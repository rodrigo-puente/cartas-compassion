const { app, ipcMain, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3');
const isDev = require('electron-is-dev');
const moment = require("moment");
const { generateRandomIntegerInRange } = require('./misc');
const { fillVineta, generateCodeImage, pdfGenerator } = require('./pdfGenerator');
const { generateSQL } = require('./xlsxImporter');

let dbURL;

if (isDev) {
  dbURL = "./cartas.sqlite";
} else {
  dbURL = path.join(app.getPath('userData'), "cartas.sqlite");
}

if(!fs.existsSync(dbURL)){
  console.log("Base no existe...");
  let db = new sqlite3.Database(dbURL);
  db.exec(`
    CREATE TABLE IF NOT EXISTS "cartas" (
      "id" INTEGER PRIMARY KEY AUTOINCREMENT,
      "beneficiario_iglesia" TEXT,
      "beneficiario_id" TEXT, 
      "beneficiario_preferido" TEXT, 
      "beneficiario_id_global" TEXT, 
      "beneficiario_sexo" TEXT,
      "beneficiario_edad" TEXT, 
      "estado" TEXT, 
      "preguntas" TEXT, 
      "comunicacion_tipo" TEXT, 
      "comunicacion_id_global" TEXT, 
      "supporter_favorito" TEXT, 
      "supporter_tipo_relacion" TEXT,
      "supporter_sexo" TEXT,
      "supporter_id_global" TEXT, 
      "supporter_country" TEXT,
      "target_lang" TEXT, 
      "id_plantilla" TEXT,
      "formulario" TEXT
    );
  `)
}

const database = new sqlite3.Database(dbURL, (err) => {
  if (err) console.error('Database opening error: ', err);
});

ipcMain.on('async-query', (event, sql) => {
  database.all(sql, (err, rows) => {
    event.reply('query-result', (err && err.message) || rows);
  });
});

ipcMain.on('async-insert', (event, sql, data) => {
  database.run(sql, data, (err) => {
    event.reply('insert-result', err === null);
  });
});

ipcMain.on('generate-pdf', (event, user, data, template) => {
  if (user.skip_header) { //SPECIAL FORM
    const date = moment().format('YYYYMMDD');
    const randomId = generateRandomIntegerInRange(10000, 99999);

    pdfGenerator({pdfName: `${date}-${randomId}.pdf`}, user, data, template).then( x => {
      event.reply('pdf-result', x);
    });
  } else { // NORMAL FORM
    const vineta = fillVineta(user);
    
    generateCodeImage('qrcode.png', vineta.qrcode, 'datamatrix').then( x => {
      return generateCodeImage('barcode.png', vineta.barcode, 'code128');
    }).then( x => {
      return pdfGenerator(vineta, user, data, template);
    }).then( x => {
      event.reply('pdf-result', x);
    });
  }
});

ipcMain.on('select-dir', async (event) => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory']
  })
  event.reply('dir-result', result);
})

ipcMain.on('select-file', async (event, conf) => {
  const properties = conf?.multiple ? ['openFile', 'multiSelections'] : ['openFile'];
  const result = await dialog.showOpenDialog({
    properties: properties,
    filters: [{
      name: 'Imagénes',
      extensions: ['png', 'jpg', 'jpeg']
    }]
  })
  event.reply('file-result', result);
})

ipcMain.on('import-xlxs', (event, data) => {
  const sqlData = generateSQL(data);
  database.all(sqlData, (err) => {
    event.reply('xlxs-result', err === null);
  });
})

ipcMain.on('app-version', (event) => {
  event.reply('version-result', app.getVersion());
});

ipcMain.on('restart-app', () => {
  autoUpdater.quitAndInstall();
});

ipcMain.on('app-url', (event) => {
  event.reply('url-result', [isDev, app.getAppPath()]);
})