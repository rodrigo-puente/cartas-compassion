const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        is_checkbox: true,
        content: "Chequea 2 cosas que más te gusta hacer con tu familia",
        options: {
          "field-1-1": {
            content: "Comer juntos"
          },
          "field-1-2": {
            content: "Ir al río / quebrada juntos",
          },
          "field-1-3": {
            content: "Jugar juntos",
          },
          "field-1-4": {
            content: "Hacer tareas juntos",
          },
          "field-1-5": {
            content: "Ir al parque juntos",
          },
        }
      },
      "field-1-1": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-1-2": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-1-3": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-1-4": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-1-5": {
        checkbox: true,
        x: 69,
        y: 427,     
      },
      "field-2": {
        input: true,
        content: "El nombre de mi maestro favorito en la escuela es",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-3": {
        input: true,
        content: "El nombre de mi mejor amigo es",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-4": {
        input: true,
        content: "El cuento que más me gusta es",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-5": {
        radio: true, 
        content: "El lugar que más me gusta visitar es",
        options: {
          "field-5-1": {
            content: "Playa",
            checkbox: true,
            x: 95,
            y: 457,
          },
          "field-5-2": {
            content: "Parque",
            checkbox: true,
            x: 125,
            y: 457,
          },
          "field-5-3": {
            content: "Volcán",
            checkbox: true,
            x: 155,
            y: 457,
          },
          "field-5-4": {
            content: "Zoológico",
            checkbox: true,
            x: 185,
            y: 457,
          },
        },
      },
      "field-6": {
        is_checkbox: true,
        content: "Lo que más me gusta hacer para ayudar en mi casa es",
        options: {
          "field-6-1": {
            content: "Lavar los platos"
          },
          "field-6-2": {
            content: "Barrer la casa",
          },
          "field-6-3": {
            content: "Hacer mandados",
          },
          "field-6-4": {
            content: "Arreglar la cama",
          },
        }
      },
      "field-6-1": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-6-2": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-6-3": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-6-4": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "fecha": {
        x: 460,
        y: 160,
        width: 220,
        lineGap: 11,
      },
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "field-10": {
        textarea: true,
        content: "Un mensaje a mi patrocinador",
        x: 50,
        y: 61,
        width: 490,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "Mi dibujo",
        image: true,
        x: 120,
        y: 290,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-11": {
        special_radio: true,
        options: {
          "field-11-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 50,
            y: 203,
          },
          "field-11-2": {
            content: "Esta carta está escrita por el niño",
            x: 50,
            y: 215,
          },
        }
      }
    }
  },
  extras: {
    title: "Qué es lo que más me gusta",
    copy: []
  }
}

module.exports = config; 