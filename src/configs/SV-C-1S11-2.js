const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Mi casa está hecha de (adobe, concreto, madera, lámina ...)",
        cols: "col-sm-12 col-md-6",
        x: 157,
        y: 372,
        width: 125,
        lineGap: 10,
        max: 26
      },
      "field-2": {
        input: true,
        content: "2. Mi casa está cerca de (rio, mar, montaña, ciudad ...)",
        cols: "col-sm-12 col-md-6",
        x: 160,
        y: 489,
        width: 130,
        lineGap: 10,
        max: 26
      },
      "field-3": {
        input: true,
        content: "3. Cuántas personas viven en mi casa",
        cols: "col-sm-12 col-md-6",
        x: 80,
        y: 641,
        width: 35,
        lineGap: 10,
        max: 2
      },
      "field-4": {
        input: true,
        content: "4. Cuántas casas vecinas hay cerca de mi casa (muchas, pocas, cero ...)",
        cols: "col-sm-12 col-md-6",
        x: 370,
        y: 267,
        width: 65,
        lineGap: 10,
        max: 6
      },
      "field-5": {
        input: true,
        content: "5. Mi comunidad se llama",
        cols: "col-sm-12 col-md-6",
        x: 330,
        y: 464,
        width: 240,
        lineGap: 10,
        max: 50
      },
      "fecha": {
        x: 440,
        y: 170,
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
        x: 100,
        y: 62,
        width: 440,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "7. Adjunta un dibujo",
        image: true,
        x: 130,
        y: 260,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        input: true,
        content: "Nombre y parentesco con quien escribe la carta",
        x: 185,
        y: 775,
        width: 490,
        lineGap: 8,
        max: 50
      },
    }
  },
  extras: {
    title: "Dónde vivo",
    copy: [],
  }
}

module.exports = config;