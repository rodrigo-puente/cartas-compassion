const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1-1": {
        input: true,
        content: "El nombre de mi proyecto es",
        cols: "col-sm-12 col-md-6",
        x: 160,
        y: 336,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-1-2": {
        input: true,
        content: "El número de niños en mi proyecto son",
        cols: "col-sm-12 col-md-6",
        x: 160,
        y: 336,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-1-3": {
        input: true,
        content: "El nombre de mi tutor es",
        cols: "col-sm-12 col-md-6",
        x: 160,
        y: 336,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-2": {
        is_checkbox: true,
        content: "Marca 3 respuestas de lo que más te gusta hacer en tu proyecto con tu tutor",
        options: {
          "field-2-1": {
            content: "Leer la Biblia"
          },
          "field-2-2": {
            content: "Jugar",
          },
          "field-2-3": {
            content: "Hacer mis tareas",
          },
          "field-2-4": {
            content: "Orar",
          },
          "field-2-5": {
            content: "Recibir refuerzo escolar",
          },
          "field-2-6": {
            content: "Comer el refrigerio",
          },
        }
      },
      "field-2-1": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-2-2": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-2-3": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-2-4": {
        checkbox: true,
        x: 69,
        y: 427,      },
      "field-2-5": {
        checkbox: true,
        x: 69,
        y: 427,     
      },
      "field-2-6": {
        checkbox: true,
        x: 69,
        y: 427,     
      },
      "field-3": {
        is_checkbox: true,
        content: "Chequea los beneficios que recibes en el proyecto",
        options: {
          "field-3-1": {
            content: "Chequeos médicos"
          },
          "field-3-2": {
            content: "Cartas de mi patrocinador",
          },
          "field-3-3": {
            content: "Excursiones",
          },
          "field-3-4": {
            content: "Visitas de mi patrocinador",
          },
          "field-3-5": {
            content: "Celebración de cumpleaños",
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
        y: 427,      
      },
      "field-3-3": {
        checkbox: true,
        x: 69,
        y: 427,      
      },
      "field-3-4": {
        checkbox: true,
        x: 69,
        y: 427,      
      },
      "field-3-5": {
        checkbox: true,
        x: 69,
        y: 427,      
      },
      "field-4": {
        is_checkbox: true,
        content: "Me gusta ir al proyecto porque",
        options: {
          "field-4-1": {
            content: "Me siento amado"
          },
          "field-4-2": {
            content: "Conozco más a Jesús",
          },
          "field-4-3": {
            content: "Aprendo cosas nuevas",
          },
          "field-4-4": {
            content: "Me siento protegido",
          }
        }
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
      "field-5": {
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
      "field-6": {
        special_radio: true,
        options: {
          "field-6-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 50,
            y: 203,
          },
          "field-6-2": {
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