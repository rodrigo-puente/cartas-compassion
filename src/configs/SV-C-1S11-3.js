const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Mi comida favorita es",
        cols: "col-sm-12 col-md-6",
        x: 60,
        y: 240,
        width: 200,
        lineGap: 10,
        max: 70
      },
      "field-2": {
        input: true,
        content: "2. Mi color favorito es",
        cols: "col-sm-12 col-md-6",
        x: 60,
        y: 456,
        width: 200,
        lineGap: 10,
        max: 70
      },
      "field-3": {
        input: true,
        content: "3. Mi amigo favorito es",
        cols: "col-sm-12 col-md-6",
        x: 110,
        y: 602,
        width: 160,
        lineGap: 10,
        max: 60
      },
      "field-4": {
        input: true,
        content: "4. Mi animal favorito es",
        cols: "col-sm-12 col-md-6",
        x: 310,
        y: 260,
        width: 115,
        lineGap: 10,
        max: 40
      },
      "field-5": {
        input: true,
        content: "5. Mi cuento favorito es",
        x: 400,
        y: 395,
        width: 110,
        lineGap: 10,
        max: 52
      },
      "fecha": {
        x: 440,
        y: 155,
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
        x: 50,
        y: 60,
        width: 490,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "7. Adjunta un dibujo",
        image: true,
        x: 120,
        y: 250,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        content: "Nombre y parentesco con quien escribe la carta",
        input: true,
        x: 230,
        y: 770,
        width: 320,
        lineGap: 6,
        max: 20
      },
    }
  },
  extras: {
    title: "Mis favoritos",
    copy: [],
  }
}

module.exports = config;