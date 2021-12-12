const reader = require('xlsx');
const moment = require("moment");

const { xlsxHeaders } = require("./xlsxHeaders");

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exportXLSX(data, route, kind) {
  try {
    let headers = [];
    headers.push("id");
    Object.values(xlsxHeaders).forEach((x) => headers.push(x));
    headers.push("formulario");
    headers.push("estado");

    let keyMapping = []
    keyMapping.push("id");
    Object.keys(xlsxHeaders).forEach((x) => keyMapping.push(x));
    keyMapping.push("formulario");
    keyMapping.push("estado");

    const date = moment().format('YYYY-MM-DD-h-mm-ss');

    let workBook = reader.utils.book_new();
    let workSheet = reader.utils.aoa_to_sheet([headers]);
    reader.utils.sheet_add_json(workSheet, data, { header: keyMapping, skipHeader: true, origin: 'A2' });
    reader.utils.book_append_sheet(workBook, workSheet, "realizadas");
    let exportFileName = `${route}/reporte-${kind.toLowerCase().replaceAll(" ", "-")}-${date}.xlsx`;
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
    let stringRow = Object.keys(xlsxHeaders).map((x) => `"${dataRow[xlsxHeaders[x]] || ''}"`).join(", ");
    insertValues.push(`(${stringRow}, "Sin comenzar", ${createdAt})`);
  }

  let fields = Object.keys(xlsxHeaders).map((x) => x).join(", ");
  return `INSERT INTO cartas(${fields}, "estado", "fecha") VALUES ${insertValues.join(", ")};`;
}

module.exports = {
  generateRandomIntegerInRange,
  exportXLSX,
  generateSQL
}
