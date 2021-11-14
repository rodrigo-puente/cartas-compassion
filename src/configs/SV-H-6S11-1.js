const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "Persona que escribe (si no fue el niño/niña)",
        x: 270,
        y: 262,
        width: 490,
        lineGap: 11,
        max: 45
      },
      "field-2": {
        input: true,
        content: "Su relación con el niño/niña",
        x: 300,
        y: 281,
        width: 490,
        lineGap: 11,
        max: 35,
        required: false
      },
      "field-3": {
        textarea: true,
        content: "Mensaje de agradecimiento",
        x: 65,
        y: 335,
        width: 490,
        lineGap: 7,
        max: 230
      },
      "field-4": {
        textarea: true,
        content: "Razón de la salida",
        x: 65,
        y: 420,
        width: 490,
        lineGap: 7,
        max: 230
      },
      "field-5": {
        textarea: true,
        content: "¿Qué beneficios recibió en el proyecto?",
        x: 65,
        y: 510,
        width: 490,
        lineGap: 7,
        max: 230
      },
      "field-6": {
        textarea: true,
        content: "Te invitamos a orar por tu niño para",
        x: 65,
        y: 600,
        width: 490,
        lineGap: 7,
        max: 230
      },
      "field-7": {
        textarea: true,
        content: "Saludo final al patrocinador",
        x: 65,
        y: 690,
        width: 490,
        lineGap: 7,
        max: 230
      },
      "fecha": {
        x: 112,
        y: 218,
        width: 220,
        lineGap: 11,
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {}
  },
  extras: {
    title: "Carta final a mi patrocinador",
    copy: [],
  }
}

module.exports = config;