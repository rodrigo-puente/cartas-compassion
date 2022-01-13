const { app } = require('electron');
const path = require('path');
const sqlite3 = require('sqlite3');
const isDev = require('electron-is-dev');

let dbURL;

if (isDev) {
  dbURL = "./cartas.sqlite";
} else {
  dbURL = path.join(app.getPath('userData'), "cartas.sqlite");
}

const database = new sqlite3.Database(dbURL, (err) => {
  if (err) console.error('Database opening error: ', err);
});

database.exec(`
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
    "formulario" TEXT,
    "fecha" INTEGER
  );

  CREATE TABLE IF NOT EXISTS "cartas_especiales" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "beneficiario" TEXT,
    "id_plantilla" TEXT,
    "formulario" TEXT,
    "fecha" INTEGER   
  );
`);

database.exec(`ALTER TABLE "cartas" ADD COLUMN "fecha" INTEGER;`, (err) => {
  console.log(err);
  console.log("Already implemented...");
});

database.exec(`ALTER TABLE "cartas" ADD COLUMN "tutor" TEXT;`, (err) => {
  console.log(err);
  console.log("Already implemented...");
});

module.exports = {
  database
}