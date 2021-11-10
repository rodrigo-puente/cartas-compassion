const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Mi último chequeo médico fue en",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-2": {
        input: true,
        content: "2. Para mis chequeos médicos yo fui a",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90
      },
      "field-3": {
        input: true,
        content: "3. Yo me transporto a mis chequeos médicos",
        x: 50,
        y: 403,
        width: 220,
        lineGap: 11,
        max: 80
      },
      "field-4": {
        input: true,
        content: "4. Las siguientes personas fueron a mi chequeo médico conmigo",
        x: 50,
        y: 493,
        width: 220,
        lineGap: 11,
        max: 80
      },
      "field-5": {
        input: true,
        content: "5. En mi chequeo médico, el médico/enfermera dijo",
        x: 80,
        y: 568,
        width: 190,
        lineGap: 11,
        max: 100
      },
      "field-6": {
        input: true,
        content: "6. En mi chequeo aprendí que",
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      },
      "field-7": {
        is_checkbox: true,
        content: "7. Para estar sano yo",
        options: {
          "field-7-1": {
            content: "Hago mucho ejercicio"
          },
          "field-7-2": {
            content: "Descanso mucho"
          },
          "field-7-3": {
            content: "Lavo mis manos y cepillo mis dientes"
          },
          "field-7-4": {
            content: "Como comida sana"
          },
        }
      },
      "field-7-1": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-7-2": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-7-3": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-7-4": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-8 ": {
        textarea: true,
        content: "8. Lo que más me gusta hacer para mantenerme sano es",
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      },
      "fecha": {
        x: 370,
        y: 140,
        width: 220,
        lineGap: 11,
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "field-9": {
        textarea: true,
        content: "9. Compartiendo algo especial o agradecimiento",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "img": {
        image: true,
        content: "Dibuja cómo es tu vida saludable",
        x: 120,
        y: 280,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-10": {
        special_radio: true,
        options: {
          "field-10-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            checkbox: true,
            x: 40,
            y: 765,
          },
          "field-10-2": {
            content: "Esta carta está escrita por el niño",
            checkbox: true,
            x: 40,
            y: 765,
          }
        }
      }
    }
  },
  extras: {
    title: "Mi vida saludable",
    copy: [],
  }
}

module.exports = config;