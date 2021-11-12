const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Algunos de mis mejores amigos son",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-2": {
        input: true,
        content: "2. Mi mejor amigo es",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90
      },
      "field-3": {
        is_checkbox: true,
        content: "3. Me gusta mi mejor amigo porque él / ella es",
        options: {
          "field-3-1": {
            content: "Tiene el mismo pasatiempo que yo tengo"
          },
          "field-3-2": {
            content: "Es inteligente"

          },
          "field-3-3": {
            content: "Es amigable"
          },
          "field-3-4": {
            content: "Es divertido"
          },
        }
      },
      "field-3-1": {
        checkbox: true,
        x: 317,
        y: 208,
      },
      "field-3-2": {
        checkbox: true,
        x: 420,
        y: 209,
      },
      "field-3-3": {
        checkbox: true,
        x: 502,
        y: 223,
      },
      "field-3-4": {
        checkbox: true,
        x: 81,
        y: 252,
      },
      "field-3-5": {
        checkbox: true,
        x: 198,
        y: 252,
      },
      "field-3-6": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 445,
        y: 260,
        width: 500,
        lineGap: 8,
        max: 20,
      },
      "field-4": {
        textarea: true,
        content: "4. Conocí a mi mejor amigo en",
        x: 50,
        y: 403,
        width: 220,
        lineGap: 11,
        max: 80
      },
      "field-5": {
        is_checkbox: true,
        content: "5. La actividad que más me gusta hacer con mis amigos es",
        options: {
          "field-5-1": {
            content: "Juegos de computadora"
          },
          "field-5-2": {
            content: "Volando cometas"

          },
          "field-5-3": {
            content: "Jugando a las canicas"
          },
          "field-5-4": {
            content: "Jugando con muñecas"
          },
          "field-5-5": {
            content: "Cocina"
          },
          "field-5-6": {
            content: "Al escondite"
          },
          "field-5-7": {
            content: "Saltar la cuerda"
          },
          "field-5-8": {
            content: "Jugando al futbol"
          },
        }
      },
      "field-5-1": {
        checkbox: true,
        x: 317,
        y: 208,
      },
      "field-5-2": {
        checkbox: true,
        x: 420,
        y: 209,
      },
      "field-5-3": {
        checkbox: true,
        x: 502,
        y: 223,
      },
      "field-5-4": {
        checkbox: true,
        x: 81,
        y: 252,
      },
      "field-5-5": {
        checkbox: true,
        x: 198,
        y: 252,
      },
      "field-5-6": {
        checkbox: true,
        x: 198,
        y: 252,
      },
      "field-5-7": {
        checkbox: true,
        x: 198,
        y: 252,
      },
      "field-5-8": {
        checkbox: true,
        x: 198,
        y: 252,
      },
      "field-5-9": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 445,
        y: 260,
        width: 500,
        lineGap: 8,
        max: 20,
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
      "field-6": {
        textarea: true,
        content: "6. Un mensaje a mi patrocinador",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "7. Adjunta un dibujo",
        image: true,
        x: 120,
        y: 280,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        special_radio: true,
        options: {
          "field-7-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 40,
            y: 765,
          },
          "field-7-2": {
            content: "Esta carta está escrita por el niño",
            x: 40,
            y: 778,
          },
        }
      }
    }
  },
  extras: {
    title: "Mis amigos",
    copy: [],
  }
}

module.exports = config;