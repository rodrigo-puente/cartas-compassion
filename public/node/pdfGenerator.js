const PDFDocument = require('pdfkit');
const fs = require('fs');
const { promisify } = require('util');
const bwipjs = require('bwip-js');
const moment = require("moment");
const path = require("path");
const { generateRandomIntegerInRange } = require('./misc');
const assetPath = path.join(__dirname, '..', 'node', 'assets');

function addText(doc, text, content){
  if (text === undefined) return;
  doc.text(text.replace(/\r?\n|\r/g, " "), content.x, content.y, {
    width: content.width || null,
    lineGap: content.lineGap || 8,
    characterSpacing: content.characterSpacing || 0,
  });
}

function addCheckbox(doc, value, content, img) {
  if (value !== true) return;
  doc.image(img, content.x, content.y, { width: 8, height: 8 });
}

function addSelect(doc, content, img) {
  doc.image(img, content.x, content.y, { width: 8, height: 8 });
}

function addImage(doc, value, content) {
  if (value === "" || value === undefined) return;
  const img = doc.openImage(value);
  doc.image(img, content.x, content.y, content.config);
}

function generateCode(text, type){
  return bwipjs.toBuffer({
    bcid: type,
    text: text,
    textxalign: 'center',
    backgroundcolor: 'ffffff'  
  })
}

function generateHeader(doc, vineta){
  const config = require('./configs/vineta');

  Object.keys(config).forEach((key) => {
    let itemConfig = config[key];
    if (itemConfig) addText(doc, vineta[key], itemConfig);
  });

  vineta.tipo_carta.forEach((i, idx) => {
    const x = 420 + (10 * idx);
    const image = doc.openImage(path.join(assetPath, 'cartas', `${i}.png`));
    doc.image(image, x, 30, {
      fit: [10, 10]
    });
  })

  doc.fontSize(6);

  const qr = doc.openImage(path.join(assetPath, 'qrcode.png'));
  doc.image(qr, 285, 65, {
    fit: [30, 30]
  })
  doc.text(vineta.qrcode, 260, 100);

  const barcode = doc.openImage(path.join(assetPath, 'barcode.png'));
  doc.image(barcode, 380, 60, {
    fit: [100, 40]
  })
  doc.text(vineta.barcode, 400, 105);
}

function fillVineta(user) {
  const date = moment().format('YYYYMMDD');
  const randomId = generateRandomIntegerInRange(10000, 99999);

  const beneficiario_id_global = user?.beneficiario_id_global ? `${user.beneficiario_id_global}` : "";
  const supporter_id_global = user?.supporter_id_global ? `-${user.supporter_id_global}` : "";
  const comunicacion_id_global = user?.comunicacion_id_global ? `-${user.comunicacion_id_global}` : "";
  const tipo_relacion = user?.supporter_tipo_relacion ? (user.supporter_tipo_relacion === 'Patrocinador' ? '-S' : '-C') : "";

  let data = {
    qrcode: `${beneficiario_id_global}${supporter_id_global}${comunicacion_id_global}${tipo_relacion}`.replace(/--/g, "-").trim(),
    barcode: `${beneficiario_id_global}${supporter_id_global}`.replace(/--/g, "-").trim(),
    socio: `${supporter_id_global || ""} - ${user.supporter_favorito || ""} - ${user.supporter_sexo || ""}`.replace(/--/g, "-").trim(),
    pdfname: `${beneficiario_id_global}${supporter_id_global}${comunicacion_id_global}${tipo_relacion}-${date}-${randomId}.pdf`.replace(/--/g, "-").trim(),
  };

  Object.keys(data).forEach((i) => {
    if (data[i].startsWith("-")) data[i] = data[i].slice(1);
    if (data[i].endsWith("-")) data[i] = data[i].slice(0, -1);
  });

  return {
    qrcode: data.qrcode,
    barcode: data.barcode,
    pdfName: data.pdfname,
    socio: data.socio,
    beneficiario: `${user.beneficiario_id} - ${user.beneficiario_preferido} - ${user.beneficiario_sexo || ""} - ${user.beneficiario_edad}`,
    tl: `TL: ${user.target_lang}`,
    gp: `GP: ${user.supporter_country}`,
    types: `Types:`,
    tid: `TID: ${user.id_plantilla}`,
    tipo_carta: user.comunicacion_tipo.toLowerCase().split(";").map((x) => x.trim().replaceAll(" ", "_"))
  } 
}

async function pdfGenerator(vineta, user, data, template){
  return new Promise((resolve) => {
    try {
      const doc = new PDFDocument({size: 'A4', autoFirstPage: false, margins: { bottom: 0 }});

      const pdfStream = fs.createWriteStream(`${data.route}/${vineta.pdfName}`)
      pdfStream.on('finish', function() {
        resolve(true);
      });

      const vinetaConfig = require(`./configs/${template}`);
      const font = path.join(assetPath, 'roboto-italic.ttf');
      const checkIMG = doc.openImage(path.join(assetPath, 'check.png'));

      doc.fontSize(10);
      doc.font(font);

      Object.keys(vinetaConfig).forEach((key, idx) => {
        if (key === "extras") return;
        
        const i = vinetaConfig[key]
        const bg = doc.openImage(path.join(assetPath, user.id_plantilla, i.bg));
        const content = i.items;

        if (content === {}) return;

        doc.addPage();
        doc.image(bg, 0, 0, { width: doc.page.width, height: doc.page.height });

        if (idx === 0 && !user.skip_header) {
          doc.font('Times-Roman');
          generateHeader(doc, vineta);
          doc.font(font);
          doc.fontSize(11);
        }

        if (user.skip_header) {
          doc.fontSize(11);
        }
      
        Object.keys(content).forEach((key) => {
          try {
            if (data[key] === undefined) return;

            let field = content[key]
            if(field.checkbox){
              addCheckbox(doc, data[key], field, checkIMG);
            } else if(field.image) {
              addImage(doc, data[key], field);
            } else if (field.select) {
              addText(doc, data[key], field);
              addSelect(doc, field["options"][data[key]], checkIMG);
            } else if (field.radio || field.special_radio) {
              addSelect(doc, field["options"][data[key]], checkIMG);
            } else {
              addText(doc, data[key], field);
            }
          } catch (err) {
            console.log("ERR GENERATING CONTENT: ", template, key, err);
          }
        });
      });

      const imgs = data["imgs"].filter((x) => x.img !== "");

      // Si adjuntó imágenes las ponemos en la tercera página
      if (imgs.length) {
        const sizes = {
          1: 300,
          2: 250,
          3: 200,
          4: 120,
        }
        const size = sizes[imgs.length];

        doc.addPage();
        doc.fontSize(8);

        try {
          imgs.forEach((i, idx) => {

            let y = 50 + ((size + 50) * idx);
            const img = doc.openImage(i.img);
            doc.image(img, 50, y, {
              fit: [500, size], 
              align: 'center',
              valign: 'center',
            });
            
            y = y + size + 10;
            doc.text(i.msg, 100, y, {
              width: 420
            });
          });
        } catch(err) { 
          console.dir(err);
        }
      }

      doc.pipe(pdfStream);
      doc.end();
    } catch (err) {
      console.log("ERROR: ", err);
    }
  });
}

async function generateCodeImage(name, vineta, type){
  const writeFileAsync = promisify(fs.writeFile)
  const image = await generateCode(vineta, type);
  await writeFileAsync(path.join(assetPath, name), image);
  return true;
}

module.exports = {
  pdfGenerator,
  generateCodeImage,
  fillVineta
}
