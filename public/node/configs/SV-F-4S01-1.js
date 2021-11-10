const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        textarea: true,
        content: "1. Un mensaje de agradecimiento a mi patrocinador",
        x: 65,
        y: 278,
        width: 490,
        lineGap: 11,
        max: 380
      },
      "field-2": {
        textarea: true,
        content: "2. ¿Qué beneficios he recibido del proyecto?",
        x: 65,
        y: 384,
        width: 490,
        lineGap: 11,
        max: 380
      },
      "field-3": {
        textarea: true,
        content: "3. Mis planes para el futuro",
        x: 65,
        y: 493,
        width: 490,
        lineGap: 11,
        max: 380
      },
      "field-4": {
        textarea: true,
        content: "4. Mis peticiones de oración",
        x: 65,
        y: 600,
        width: 490,
        lineGap: 11,
        max: 290
      },
      "field-5": {
        textarea: true,
        content: "5. Un saludo final para mi patrocinador",
        x: 65,
        y: 688,
        width: 490,
        lineGap: 11,
        max: 290
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