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

-- INSERT INTO "cartas" VALUES (
--   NULL,
--   "ES0807",
--   "ES005900093",
--   "Jessica",
--   "09230661",
--   "Femenino",
--   "7",
--   "Sin comenzar",
--   "¿Cuál es tu color favorito? ¿Cómo es tu cuidad? ¿Tienes una historia bíblica favorita? ¿Conoces esa historia? ¿qué estás aprendiendo en el proyecto Compassion?",
--   "Carta de Respuesta",
--   "C0054145167",
--   "Terry",
--   "Corresponsal",
--   "Femenino",
--   "09299463",
--   "US",
--   "English",
--   "SV-D-1S11-12",
--   ""
-- );