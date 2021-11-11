const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "label-1": {
        label: true,
        content: "1. Mi rutina diaria es (enumera el orden de las actividades que realizas durante el día):"
      },
      "field-1": {
        input: true,
        content: "Me levanto",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-2": {
        input: true,
        content: "Me baño",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-3": {
        input: true,
        content: "Me cepillo los dientes",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-4": {
        input: true,
        content: "Voy a la escuela",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-5": {
        input: true,
        content: "Desayuno",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-6": {
        input: true,
        content: "Oro y leo la biblia",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-7": {
        input: true,
        content: "Almuerzo",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-8": {
        input: true,
        content: "Me visto",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-9": {
        input: true,
        content: "Ceno",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-10": {
        input: true,
        content: "Me duermo",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-11": {
        input: true,
        content: "Juego",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-12": {
        input: true,
        content: "Hago las tareas",
        cols: "col-sm-12 col-md-3",
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 2
      },
      "field-13": {
        radio: true, 
        content: "2. Mi mejor día de la semana es",
        options: {
          "field-13-1": {
            content: "Lunes",
            checkbox: true,
            x: 95,
            y: 457,
          },
          "field-13-2": {
            content: "Martes",
            checkbox: true,
            x: 125,
            y: 457,
          },
          "field-13-3": {
            content: "Miércoles",
            checkbox: true,
            x: 155,
            y: 457,
          },
          "field-13-4": {
            content: "Jueves",
            checkbox: true,
            x: 185,
            y: 457,
          },
          "field-13-5": {
            content: "Viernes",
            checkbox: true,
            x: 215,
            y: 457,
          },
          "field-13-6": {
            content: "Sábado",
            checkbox: true,
            x: 215,
            y: 457,
          },
          "field-13-7": {
            content: "Domingo",
            checkbox: true,
            x: 215,
            y: 457,
          },
        },
      },
      "field-14": {
        is_checkbox: true,
        content: "3. Los días que voy al proyecto son",
        options: {
          "field-14-1": {
            content: "Lunes"
          },
          "field-14-2": {
            content: "Martes",
          },
          "field-14-3": {
            content: "Miércoles",
          },
          "field-14-4": {
            content: "Jueves",
          },
          "field-14-5": {
            content: "Viernes",
          },
          "field-14-6": {
            content: "Sábado",
          },
          "field-14-7": {
            content: "Domingo",
          },
          "field-14-8": {
            content: "Todos los días",
          },
        }
      },
      "field-14-1": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-14-2": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-14-3": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-14-4": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-14-5": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-14-6": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-14-7": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-14-8": {
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
      "field-15": {
        textarea: true,
        content: "4. Un mensaje a mi patrocinador",
        x: 50,
        y: 61,
        width: 490,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "5. Mi dibujo",
        image: true,
        x: 120,
        y: 290,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-16": {
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
    title: "Mi semana típica",
    copy: []
  }
}

module.exports = config;