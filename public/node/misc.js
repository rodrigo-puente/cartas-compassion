const reader = require('xlsx');
const moment = require("moment");

const xlsxHeaders = {
  "beneficiario_iglesia": "ID de la Iglesia Socia del Beneficiario",
  "beneficiario_id": "ID Local del Beneficiario", 
  "beneficiario_preferido": "Cuenta personal: Nombre Preferido", 
  "beneficiario_id_global": "ID Número de Identificación Global", 
  "beneficiario_sexo": "Sexo", 
  "beneficiario_edad": "Edad", 
  "preguntas": "Preguntas del Patrocinador", 
  "comunicacion_tipo": "Tipo de Comunicación", 
  "comunicacion_id_global": "Comunicación: ID de Comunicación Global", 
  "supporter_favorito": "Patrocinador / Corresponsal: Nombre Preferido", 
  "supporter_tipo_relacion": "Tipo de Relacionamiento",
  "supporter_sexo": "Patrocinador / Corresponsal: Sexo",
  "supporter_id_global": "Patrocinador / Corresponsal: ID Número de Identificación Global", 
  "supporter_country": "ID del Socio Global",
  "target_lang": "Target Language", 
  "id_plantilla": "ID de la Plantilla",
};

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exportXLSX(data, route) {
  try {
    let headers = [];
    headers.push("id");
    Object.values(xlsxHeaders).forEach((x) => headers.push(x));
    headers.push("formulario");

    let keyMapping = []
    keyMapping.push("id");
    Object.keys(xlsxHeaders).forEach((x) => keyMapping.push(x));
    keyMapping.push("formulario");

    const date = moment().format('YYYY-MM-DD-h:mm:ss');
    let workBook = reader.utils.book_new();

    let workSheet = reader.utils.aoa_to_sheet([headers]);
    reader.utils.sheet_add_json(workSheet, data, { header: keyMapping, skipHeader: true, origin: 'A2' });

    reader.utils.book_append_sheet(workBook, workSheet, "realizadas");
    let exportFileName = `${route}/reporte-${date}.xlsx`;
    reader.writeFile(workBook, exportFileName);
    return true;
  } catch (err) {
    console.log("ERR generating the XLSX: ", err);
    return false;
  }
}

function generateSQL(data) { 
  let insertValues = [];

  for (let i = 1; i < data.length; i++) {
    let dataRow = data[i];
    let stringRow = Object.keys(xlsxHeaders).map((x) => `"${dataRow[xlsxHeaders[x]] || ''}"`).join(", ");
    insertValues.push(`(${stringRow}, "Sin comenzar")`);
  }

  let fields = Object.keys(xlsxHeaders).map((x) => x).join(", ");
  return `INSERT INTO cartas(${fields}, "estado") VALUES ${insertValues.join(", ")};`;
}


module.exports = {
  generateRandomIntegerInRange,
  exportXLSX,
  generateSQL
}
