const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        textarea: true,
        content: "1. Indica en qué ciudad o pueblo vives y en qué región del país. ¿Cómo es esta área?",
        x: 55,
        y: 364,
        width: 220,
        lineGap: 9,
        max: 170
      },
      "field-2": {
        input: true,
        content: "2. ¿Cuántas personas viven en tu en tu casa?",
        x: 75,
        y: 450,
        width: 220,
        lineGap: 11,
        max: 2
      },
      "field-2-copy": {
        x: 95,
        y: 470,
        width: 220,
        lineGap: 11,
        max: 2
      },
      "field-2-1": {
        repeater: true,
        content: "2.1 ¿Quiénes son esas personas y qué relación tienen contigo?",
        times: 5,
        prefix: "field-2-",
        fields: [
          { 
            content: "Nombre",
            max: 20,
            sufix: "-A"
          },
          {
            content: "Relación",
            max: 12,
            sufix: "-B"
          }
        ]
      },
      "field-2-1-A": {
        x: 55,
        y: 510,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-2-1-B": {
        x: 195,
        y: 510,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-2-2-A": {
        x: 55,
        y: 530,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-2-2-B": {
        x: 195,
        y: 530,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-2-3-A": {
        x: 55,
        y: 547,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-2-3-B": {
        x: 195,
        y: 547,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-2-4-A": {
        x: 55,
        y: 567,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-2-4-B": {
        x: 195,
        y: 567,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-2-5-A": {
        x: 55,
        y: 585,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-2-5-B": {
        x: 195,
        y: 585,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-3": {
        textarea: true,
        content: "3. Una cosa que realmente disfruto haciendo es",
        x: 55,
        y: 650,
        width: 220,
        lineGap: 9,
        max: 170
      },
      "field-7": {
        input: true,
        content: "Escritura individual, sino el niño",
        x: 75,
        y: 749,
        width: 220,
        lineGap: 11,
        max: 30
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "field-4": {
        textarea: true,
        content: "4. Mi sueño para el futuro es",
        x: 55,
        y: 75,
        width: 220,
        lineGap: 9,
        max: 330
      },
      "field-5": {
        textarea: true,
        content: "5. Me gustaría compartirte algo acerca de mi ... (Deportes, talleres, estudios, mi vida cristiana, etc...)",
        x: 55,
        y: 279,
        width: 220,
        lineGap: 9,
        max: 330
      },
      "field-6": {
        textarea: true,
        content: "6. Quisiera que oremos juntos por",
        x: 55,
        y: 490,
        width: 220,
        lineGap: 9,
        max: 330
      },
    }
  },
  extras: {
    title: "Mi primera carta a mi patrocinador",
    copy:  ["field-2"]
  }
}

module.exports = config;