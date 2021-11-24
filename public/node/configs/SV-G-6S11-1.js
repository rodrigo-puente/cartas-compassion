const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "code": {
        input: true,
        content: "Código del beneficiario (11 dígitos)",
        x: 40,
        y: 85,
        width: 490,
        lineGap: 8,
        characterSpacing: 8,
        max: 11,
      },
      "field-1": {
        textarea: true,
        content: "1. Escribe un mensaje especial o agradecimiento",
        x: 50,
        y: 229,
        width: 490,
        lineGap: 8,
        max: 1370
      },
      "field-2": {
        textarea: true,
        content: "Sigue escribiendo ese mensaje especial o agradecimiento ",
        x: 50,
        y: 592,
        width: 350,
        lineGap: 8,
        max: 410,
        required: false,
      },
      "fecha": {
        x: 450,
        y: 207,
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
    title: "Compartiendo algo especial o agradecimiento",
    copy: [],
  }
}

module.exports = config;