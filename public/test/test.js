const fs = require("fs");
const { pdfGenerator } = require("../node/pdfGenerator");

fs.readdir(`${__dirname}/pdfs`, (err, files) => {
  files.forEach(file => fs.unlinkSync(`${__dirname}/pdfs/${file}`))
});

fs.readdir(`${__dirname}/../node/configs`, async (err, files) => {
  await Promise.all(files.map(async (file) => {
    if (file === "modifier.js" || file === "vineta.js") return;

    let vineta = {
      qrcode: '5859929-8142189-C0058262775-S',
      barcode: '5859929-8142189',
      pdfName: `${file}.pdf`,
      socio: '8142189 - Nancy ',
      beneficiario: 'ES080700093 - Christian - Masculino - 20',
      tl: 'TL: English',
      gp: 'GP: US',
      types: 'Types:',
      tid: 'TID: SV-A-1S11-1',
      tipo_carta: [ 'carta_de_respuesta' ]
    };

    let user = {
      id_plantilla: `${file.replace(".js", "")}`,
    }

    let loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    let json = require(`${__dirname}/../node/configs/${file.replace(".js", "")}`);
    let items = { ...json?.page1.items, ...json?.page2.items };
    let form = {
      imgs: [
        { img: `${__dirname}/test.png`, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { img: `${__dirname}/test.png`, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { img: `${__dirname}/test.png`, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { img: `${__dirname}/test.png`, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      ],
      route: `${__dirname}/pdfs`
    };
    
    Object.keys(items).forEach((key) => {
      if (items[key].input || items[key].textarea) {
        form[key] = loremIpsum.substring(0, items[key].max);
      }
    });

    await pdfGenerator(vineta, user, form, file.replace(".js", ""));
  }));
});
    