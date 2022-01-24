const { app, ipcMain, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');

const { database } = require('./lib/database');
const { generateSQL, exportXLSX } = require('./lib/misc');
const { generatePDF } = require('./lib/pdfGenerator');

ipcMain.on('async-query', (event, sql) => {
  database.all(sql, (err, rows) => {
    event.reply('query-result', (err && err.message) || rows);
  });
});

ipcMain.on('async-query-with-data', (event, sql, data) => {
  database.run(sql, data, (err) => {
    event.reply('async-query-with-data-result', err === null);
  });
});

ipcMain.on('generate-pdf', async (event, user, data, template) => {
  const result = await generatePDF(template, user, data);
  event.reply('pdf-result', result);
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
    console.log("SQL ERROR: ", err);
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
});

ipcMain.on('generate-xlsx', (event, data, route, kind) => {
  const response = exportXLSX(data, route, kind);
  event.reply('xlsx-export-result', response);
})

