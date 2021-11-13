const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        textarea: true,
        content: "1. Nuestras fiestas nacionales / vacaciones son",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 230,
        lineGap: 11,
        max: 85
      },
      "field-2": {
        textarea: true,
        content: "2. Mi vacación / fiesta nacional favorita es",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 319,
        width: 230,
        lineGap: 11,
        max: 45
      },
      "field-3": {
        textarea: true,
        content: "3. Mi familia celebra mi fiesta nacional / vacación favorita haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 401,
        width: 230,
        lineGap: 11,
        max: 80
      },
      "field-4": {
        textarea: true,
        content: "4. Lo que más me gusta comer durante estas celebraciones es",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 526,
        width: 230,
        lineGap: 11,
        max: 85
      },
      "field-5": {
        textarea: true,
        content: "5. Mi familia celebra el Año NUevo haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 604,
        width: 230,
        lineGap: 11,
        max: 135
      },
      "field-6": {
        textarea: true,
        content: "6. En el proyecto nosotros celebramos el Año Nuevo haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 715,
        width: 230,
        lineGap: 11,
        max: 135
      },
      "field-7": {
        textarea: true,
        content: "7. Mi familia celebra la Navidad haciendo",
        cols: "col-sm-12 col-md-6",
        x: 334,
        y: 234,
        width: 230,
        lineGap: 11,
        max: 132
      },
      "field-8": {
        textarea: true,
        content: "8. En el proyecto nosotros celebramos la Navidad haciendo",
        cols: "col-sm-12 col-md-6",
        x: 334,
        y: 343,
        width: 230,
        lineGap: 11,
        max: 132
      },
      "fecha": {
        x: 450,
        y: 147,
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
        content: "9. Un mensaje a mi patrocinador",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 670
      },
      "img": {
        content: "10. Adjunta un dibujo",
        image: true,
        x: 100,
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
            x: 37,
            y: 765,
          },
          "field-10-2": {
            content: "Esta carta está escrita por el niño",
            x: 37,
            y: 775,
          },
        }
      }
    }
  },
  extras: {
    title: "Fiestas y vacaciones",
    copy: [],
  }
}

module.exports = config;