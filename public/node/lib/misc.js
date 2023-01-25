const reader = require('xlsx');
const moment = require("moment");

const { xlsxHeaders } = require("./xlsxHeaders");

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exportXLSX(data, route, kind) {
  try {
    const reportName = {
      "Sin comenzar": "cartas-por-realizar",
      "Impreso y enviado a la ICP": "cartas-realizadas"
    };

    const exportColumns = {
      "tutor": "Tutor",
      "beneficiario_iglesia": "FCP",
      "beneficiario_id": "Código", 
      "beneficiario_preferido": "Participante nombre preferido", 
      "supporter_favorito": "Patrocinador nombre preferido", 
      "comunicacion_tipo": "Tipo de carta", 
      "preguntas": "Preguntas del Patrocinador", 
      "comunicacion_id_global": "Comunicación: ID de Comunicación Global"
    };
    const date = moment().format('YYYY-MM-DD-h-mm-ss');
    const transformed_data = data.map((item) => Object.keys(exportColumns).reduce((a, key) => ({ ...a, [key]: item[key]}), {}));
    console.log(transformed_data);

    let workBook = reader.utils.book_new();
    let workSheet = reader.utils.aoa_to_sheet([Object.values(exportColumns)]);
    reader.utils.sheet_add_json(workSheet, transformed_data, { 
      header: Object.keys(exportColumns), 
      skipHeader: true, 
      origin: 'A2' 
    });
    reader.utils.book_append_sheet(workBook, workSheet, "realizadas");
    let exportFileName = `${route}/reporte-${reportName[kind]}-${date}.xlsx`;
    reader.writeFile(workBook, exportFileName);

    return true;
  } catch (err) {
    console.log("ERR generating the XLSX: ", err);
    return false;
  }
}

function generateSQL(data) { 
  let insertValues = [];
  let createdAt = Math.round(+new Date()/1000);

  for (let i = 0; i < data.length; i++) {
    let dataRow = data[i];
    let stringRow = Object.keys(xlsxHeaders).map((x) => `"${cleanValue(dataRow[xlsxHeaders[x]])}"`).join(", ");
    insertValues.push(`(${stringRow}, "Sin comenzar", ${createdAt})`);
  }

  let fields = Object.keys(xlsxHeaders).map((x) => x).join(", ");
  return `INSERT INTO cartas(${fields}, "estado", "fecha") VALUES ${insertValues.join(", ")};`;
}

function cleanValue(val) {
  if (typeof val === "string") {
    return (val || '').replace(/"/g, "").replace(/'/g, "");
  } else if (typeof val === "undefined") {
    return "";
  } else {
    return val;
  }
}

module.exports = {
  generateRandomIntegerInRange,
  exportXLSX,
  generateSQL
}
