const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { autoUpdater } = require('electron-updater');

require('./node/main');

let mainWindow;

function configureSpanishSpellChecker(window) {
  const currentSession = window.webContents.session;
  const availableLanguages = currentSession.availableSpellCheckerLanguages;
  const spanishLanguage = ['es', 'es-ES'].find((language) =>
    availableLanguages.includes(language)
  ) || availableLanguages.find((language) => language.toLowerCase().startsWith('es-'));

  currentSession.setSpellCheckerEnabled(true);

  if (spanishLanguage) {
    currentSession.setSpellCheckerLanguages([spanishLanguage]);
  } else {
    console.warn('No se encontró un diccionario de español para el corrector ortográfico.');
  }

  window.webContents.on('context-menu', (_, params) => {
    if (!params.isEditable || !params.misspelledWord) return;

    const menu = new Menu();
    const suggestions = params.dictionarySuggestions || [];

    if (suggestions.length) {
      suggestions.forEach((suggestion) => {
        menu.append(new MenuItem({
          label: suggestion,
          click: () => window.webContents.replaceMisspelling(suggestion)
        }));
      });
    } else {
      menu.append(new MenuItem({ label: 'No hay sugerencias', enabled: false }));
    }

    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({
      label: 'Agregar al diccionario',
      click: () => currentSession.addWordToSpellCheckerDictionary(params.misspelledWord)
    }));
    menu.popup({ window });
  });
}

if (isDev) {
  // Permite live-reload 
  require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/../node_modules/electron`)
  });
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      spellcheck: true
    },
  });

  configureSpanishSpellChecker(mainWindow);

  // and load the index.html of the app.
  // mainWindow.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.once('ready-to-show', () => {
    if (!isDev) autoUpdater.checkForUpdatesAndNotify();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update-available');
});
