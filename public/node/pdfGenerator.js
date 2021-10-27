const PDFDocument = require('pdfkit');
const fs = require('fs');
const { promisify } = require('util');
const bwipjs = require('bwip-js');
const moment = require("moment");
const path = require("path");
const assetPath = path.join(__dirname, '..', 'node', 'assets');

function addText(doc, text, content){
  if (text === undefined) return;
  doc.text(text.replaceAll(/\n|\r/g, ""), content.x, content.y, {
    width: content.width || null,
    lineGap: content.lineGap || 8,
  })
}

function addCheckbox(doc, img, content) {
  doc.image(img, content.x, content.y, { width: 8, height: 8 });
}

function addImage(doc, value, content) {
  if (value === "") return;
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
  const config = require('./configs/vineta.config');

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

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillVineta(user) {
  const date = moment().format('YYYYMMDD');
  const randomId = generateRandomIntegerInRange(10000, 99999);

  return {
    qrcode: `${user.beneficiario_id_global}-${user.supporter_id_global}-${user.comunicacion_id_global}-${user.supporter_tipo_relacion === 'Patrocinador' ? 'S' : 'C'}`,
    barcode: `${user.beneficiario_id_global}-${user.supporter_id_global}`,
    pdfName: `${user.beneficiario_id_global}-${user.supporter_id_global}-${user.comunicacion_id_global}-${user.supporter_tipo_relacion === 'Patrocinador' ? 'S' : 'C'}-${date}-${randomId}.pdf`,
    socio: `${user.supporter_id_global || ""} - ${user.supporter_favorito || ''} - ${user.supporter_sexo || ""}`,
    beneficiario: `${user.beneficiario_id} - ${user.beneficiario_preferido} - ${user.beneficiario_sexo || ''} - ${user.beneficiario_edad}`,
    tl: `TL: ${user.target_lang}`,
    gp: `GP: ${user.supporter_country}`,
    types: `Types:`,
    tid: `TID: ${user.id_plantilla}`,
    tipo_carta: user.comunicacion_tipo.toLowerCase().split(";").map((x) => x.trim().replaceAll(" ", "_"))
  } 
}

async function pdfGenerator(vineta, user, data, template){
  return new Promise((resolve) => {
    // Crear el documento en tamaño A4 
    const doc = new PDFDocument({size: 'A4', autoFirstPage: false, margins: { bottom: 0 }});

    const pdfStream = fs.createWriteStream(`${data.route}/${vineta.pdfName}`)
    pdfStream.on('finish', function() {
      resolve(true);
    });

    const vinetaConfig = require(`./configs/${template}.config`);
    const page1 = vinetaConfig.page1;
    const page2 = vinetaConfig.page2;
    const font = path.join(assetPath, 'roboto-italic.ttf');
    const checkIMG = doc.openImage(path.join(assetPath, 'check.png'));

    doc.fontSize(10);
    doc.font(font);

    [page1, page2].forEach((i, idx) => {
      const bg = doc.openImage(path.join(assetPath, user.id_plantilla, i.bg));

      doc.addPage();
      doc.image(bg, 0, 0, { width: doc.page.width, height: doc.page.height });

      if (idx === 0) {
        doc.font('Times-Roman');
        generateHeader(doc, vineta);
        doc.font(font);
        doc.fontSize(8);
      }

      const content = i.items
      Object.keys(content).forEach((key) => {
        let field = content[key]
        if(field.checkbox){
          addCheckbox(doc, checkIMG, field);
        } else if(field.image) {
          addImage(doc, data[key], field);
        } else {
          addText(doc, data[key], field);
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
        4: 150,
      }
      doc.addPage();
      imgs.forEach((i, idx)=> {
        if (i.img === "") return;

        const img = doc.openImage(i.img);
        doc.image(img, {
          fit: [500, sizes[imgs.length] || 120], 
          align: 'center'
        }).text(i.msg, {align: 'center'});
      });
    }

    doc.pipe(pdfStream);
    doc.end();
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
