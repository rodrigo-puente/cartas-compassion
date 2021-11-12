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
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-2": {
        textarea: true,
        content: "2. Mi vacación / fiesta nacional favorita es",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-3": {
        textarea: true,
        content: "3. Mi familia celebra mi fiesta nacional / vacación favorita haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-4": {
        textarea: true,
        content: "4. Lo que más me gusta comer durante estas celebraciones es",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-5": {
        textarea: true,
        content: "5. Mi familia celebra el Año NUevo haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-6": {
        textarea: true,
        content: "6. En el proyecto nosotros celebramos el Año Nuevo haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-7": {
        textarea: true,
        content: "7. Mi familia celebra la Navidad haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-8": {
        textarea: true,
        content: "8. En el proyecto nosotros celebramos la Navidad haciendo",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
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
      "field-9": {
        textarea: true,
        content: "9. Un mensaje a mi patrocinador",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "10. Adjunta un dibujo",
        image: true,
        x: 120,
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
            x: 40,
            y: 765,
          },
          "field-10-2": {
            content: "Esta carta está escrita por el niño",
            x: 40,
            y: 778,
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