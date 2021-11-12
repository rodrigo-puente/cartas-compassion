const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        is_checkbox: true,
        content: "Algunos de mis pasatiempos son (elige 2)",
        options: {
          "field-1-1": {
            content: "Saltar cuerda"
          },
          "field-1-2": {
            content: "Practicar deportes",
          },
          "field-1-3": {
            content: "Jugar chibolas",
          },
          "field-1-4": {
            content: "Jugar con carritos",
          },
          "field-1-5": {
            content: "Jugar con muñecas",
          },
        }
      },
      "field-1-1": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-1-2": {
        checkbox: true,
        x: 69,
        y: 448,
      },
      "field-1-3": {
        checkbox: true,
        x: 69,
        y: 469,
      },
      "field-1-4": {
        checkbox: true,
        x: 69,
        y: 490,
      },
      "field-1-5": {
        checkbox: true,
        x: 69,
        y: 490,
      },
      "field-2-1": {
        input: true,
        content: "Un pasatiempo que me gustaría empezar a hacer algún día es",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
      },
      "field-2-2": {
        input: true,
        content: "Mi pasatiempo favorito es",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
      },
      "field-2-3": {
        input: true,
        content: "Me gustaría compartir mis pasatiempos con",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
      },
      "field-2-4": {
        input: true,
        content: "Lo que más me gusta hacer con mi mascota es",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
        required: false
      },
      "field-3": {
        is_checkbox: true,
        content: "Cuáles de estas mascotas tienes en tu casa",
        options: {
          "field-3-1": {
            content: "Perro"
          },
          "field-3-2": {
            content: "Perico",
          },
          "field-3-3": {
            content: "Pájaro",
          },
          "field-3-4": {
            content: "Pollo",
          },
          "field-3-5": {
            content: "Gato",
          },
          "field-3-6": {
            content: "Ninguno",
          },
        }
      },
      "field-3-1": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-3-2": {
        checkbox: true,
        x: 69,
        y: 448,
      },
      "field-3-3": {
        checkbox: true,
        x: 69,
        y: 469,
      },
      "field-3-4": {
        checkbox: true,
        x: 69,
        y: 490,
      },
      "field-3-5": {
        checkbox: true,
        x: 69,
        y: 490,
      },
      "field-3-6": {
        checkbox: true,
        x: 69,
        y: 490,
      },
      "field-4": {
        input: true,
        content: "¿Hay algo especial de tu mascota o pasatiempo que quisieras que tu patrocinador conozca?",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
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
      "field-5": {
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
        x: 120,
        y: 280,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-6": {
        special_radio: true,
        options: {
          "field-6-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 40,
            y: 765,
          },
          "field-6-2": {
            content: "Esta carta está escrita por el niño",
            x: 40,
            y: 778,
          },
        }
      }
    }
  },
  extras: {
    title: "Mis pasatiempos y mascotas",
    copy: []
  }
}

module.exports = config;