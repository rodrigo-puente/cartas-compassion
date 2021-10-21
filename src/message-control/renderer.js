const electron = window.require('electron');
const { ipcRenderer } = electron;

export function sendAsync(sql) {
  return new Promise((resolve) => {
    ipcRenderer.once('query-result', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('async-query', sql);
  });
}

export function sendInsert(datos) {
  const sql = "UPDATE cartas SET formulario = ?, estado = 'Impreso y enviado a la ICP' WHERE id = ?";
  return new Promise((resolve) => {
    ipcRenderer.once('insert-result', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('async-insert', sql, datos);
  });
}

export function generatePDF(user, datos, template) {
  return new Promise((resolve) => {
    ipcRenderer.once('pdf-result', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('generate-pdf', user, datos, template);
  });
}

export function selectDir() {
  return new Promise((resolve) => {
    ipcRenderer.once('dir-result', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('select-dir');
  });
}

export function selectFile(conf) {
  return new Promise((resolve) => {
    ipcRenderer.once('file-result', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('select-file', conf);
  });
}

export function importXLSX(datos) {
  return new Promise((resolve) => {
    ipcRenderer.once('xlxs-result', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('import-xlxs', datos);
  });
}