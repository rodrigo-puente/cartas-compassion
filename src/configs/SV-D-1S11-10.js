const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        is_checkbox: true,
        content: "1. Cuando estoy afuera de mi casa me gusta:",
        options: {
          "field-1-1": {
            content: "Jugar futbol"
          },
          "field-1-2": {
            content: "Ladrón librado",
          },
          "field-1-3": {
            content: "Saltar cuerda",
          },
          "field-1-4": {
            content: "Verano",
          },
        }
      }, 
      "field-1-1": {
        checkbox: true,
        x: 170,
        y: 282,
      },
      "field-1-2": {
        checkbox: true,
        x: 245,
        y: 282,
      },
      "field-1-3": {
        checkbox: true,
        x: 340,
        y: 282,
      },
      "field-1-4": {
        checkbox: true,
        x: 430,
        y: 282,
      }, 
      "field-1-5": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 350,
        y: 498,
        width: 230,
        lineGap: 8,
        max: 42,
        required: false
      },
      "field-2": {
        radio: true,
        content: "2. Normalmente juego con",
        options: {
          "field-2-1": {
            content: "Amigos",
            checkbox: true,
            x: 340,
            y: 282,
          },
          "field-2-2": {
            content: "Hermanos",
            checkbox: true,
            x: 340,
            y: 282,          
          },
          "field-2-3": {
            content: "Parientes",
            checkbox: true,
            x: 340,
            y: 282,          
          },
          "field-2-4": {
            content: "Abuelos ",
            checkbox: true,
            x: 340,
            y: 282,          
          }
        }
      },
      "field-3": {
        input: true,
        content: "3. ¿Hay algún evento divertido en tu comunidad que quisieras compartir con tu patrocinador?",
         x: 88,
        y: 336,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-4": {
        is_checkbox: true,
        content: "4. Cuando estoy adentro de mi casa me gusta:",
        options: {
          "field-4-1": {
            content: "Jugar con muñecas"
          },
          "field-4-2": {
            content: "Ayudar en casa",
          },
          "field-4-3": {
            content: "Dibujar",
          },
          "field-4-4": {
            content: "Leer la Biblia",
          },
          "field-4-5": {
            content: "Pintar",
          },
          "field-4-6": {
            content: "Dormir",
          },
        }
      }, 
      "field-4-1": {
        checkbox: true,
        x: 170,
        y: 282,
      },
      "field-4-2": {
        checkbox: true,
        x: 245,
        y: 282,
      },
      "field-4-3": {
        checkbox: true,
        x: 340,
        y: 282,
      },
      "field-4-4": {
        checkbox: true,
        x: 430,
        y: 282,
      }, 
      "field-4-5": {
        checkbox: true,
        x: 430,
        y: 282,
      }, 
      "field-4-6": {
        checkbox: true,
        x: 430,
        y: 282,
      }, 
      "field-4-7": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 350,
        y: 498,
        width: 230,
        lineGap: 8,
        max: 42,
        required: false
      },
      "field-5": {
        input: true,
        content: "5. Cuando estoy aburrido me gusta",
         x: 88,
        y: 336,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "fecha": {
        x: 455,
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
        content: "Un mensaje a mi patrocinador",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "Adjunta un dibujo",
        image: true,
        x: 100,
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
            x: 37,
            y: 763,
          },
          "field-7-2": {
            content: "Esta carta está escrita por el niño",
            x: 37,
            y: 775,
          },
        }
      }
    }
  },
  extras: {
    title: "Cómo me divierto",
    copy: []
  }
}

module.exports = config;