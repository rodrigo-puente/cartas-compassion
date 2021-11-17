const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        radio: true,
        content: "1. Cuando sea grande quiero ser",
        options: {
          "field-1-1": {
            content: "Maestro",
            checkbox: true,
            x: 83,
            y: 438
          },
          "field-1-2": {
            content: "Doctora",
            checkbox: true,
            x: 140,
            y: 438,
          },
          "field-1-3": {
            content: "Cocinero",
            checkbox: true,
            x: 140,
            y: 438,
          },
          "field-1-4": {
            content: "Ingeniero",
            checkbox: true,
            x: 140,
            y: 438,
          },
          "field-1-5": {
            content: "Presidente",
            checkbox: true,
            x: 140,
            y: 438,
          },
          "field-1-6": {
            content: "Bombero ",
            checkbox: true,
            x: 140,
            y: 438,
          }
        }
      }, 
      "field-2": {
        radio: true,
        content: "2. Me gustaría conocer el/la",
        options: {
          "field-2-1": {
            content: "Nieve",
            checkbox: true,
            x: 83,
            y: 438
          },
          "field-2-2": {
            content: "Edificio más alto del mundo",
            checkbox: true,
            x: 140,
            y: 438,
          },
          "field-2-3": {
            content: "Pirámides de Egipto",
            checkbox: true,
            x: 140,
            y: 438,
          },
        }
      },
      "field-2-4": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 65,
        y: 500,
        width: 214,
        lineGap: 11,
        max: 125,
        required: false
      },
      "field-3": {
        radio: true,
        content: "3. Marca con una X qué es lo que te gustaría hacer algún día",
        options: {
          "field-3-1": {
            content: "Escalar una montaña",
            checkbox: true,
            x: 83,
            y: 438
          },
          "field-3-2": {
            content: "Viajar en avión",
            checkbox: true,
            x: 140,
            y: 438,
          },
          "field-3-3": {
            content: "Navegar en un barco",
            checkbox: true,
            x: 140,
            y: 438,
          },
          "field-3-4": {
            content: "Bucear",
            checkbox: true,
            x: 140,
            y: 438,
          },
        }
      },
      "field-3-5": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 65,
        y: 500,
        width: 214,
        lineGap: 11, 
        max: 125,
        required: false
      },
      "field-3-6": {
        content: "Si quieres adjunta un dibujo coloreado",
        cols: "col-sm-12 col-md-8",
        image: true,
        x: 100,
        y: 280,
        config: {
          fit: [100, 100],
          align: 'center'
        },
      },
      "field-4": {
        textarea: true,
        content: "4. Algún día me gustaríua conocer a mi patrocinador porque",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "field-5": {
        is_checkbox: true,
        content: "5. Marca con una X tus dos respuestas favoritas",
        options: {
          "field-5-1": {
            content: "Al Presidente de mi país",
          },
          "field-5-2": {
            content: "Jesús",
          },
          "field-5-3": {
            content: "El mejor futbolista",
          },
        }
      },
      "field-5-1": {
        checkbox: true,
        x: 63,
        y: 489,      
      },
      "field-5-2": {
        checkbox: true,
        x: 63,
        y: 489,      
      },
      "field-5-3": {
        checkbox: true,
        x: 63,
        y: 489,      
      },
      "field-5-4": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 65,
        y: 500,
        width: 214,
        lineGap: 11,
        max: 125,
        required: false
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
        content: "Mi dibujo",
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
          "field-6-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 37,
            y: 763,
          },
          "field-6-2": {
            content: "Esta carta está escrita por el niño",
            x: 37,
            y: 775,
          },
        }
      }
    }
  },
  extras: {
    title: "Mis sueños",
    copy: []
  }
}

module.exports = config;