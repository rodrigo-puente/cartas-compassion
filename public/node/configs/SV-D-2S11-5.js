const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Mi edad",
        cols: "col-sm-12 col-md-6",
        x: 42,
        y: 257,
        width: 150,
        lineGap: 11,
        max: 29
      },
      "field-2": {
        input: true,
        content: "2. Mi fecha de cumpleaños",
        cols: "col-sm-12 col-md-6",
        x: 42,
        y: 311,
        width: 150,
        lineGap: 11,
        max: 29
      },
      "field-3": {
        textarea: true,
        content: "3. En mi mejor cumpleaños, qué me gusta hacer y con quién(es)",
        cols: "col-sm-12 col-md-6",
        x: 42,
        y: 375,
        width: 150,
        lineGap: 7,
        max: 130
      },
      "field-4": {
        textarea: true,
        content: "4. Las cosas que más me gustan hacer en mi cumpleaños son",
        cols: "col-sm-12 col-md-6",
        x: 42,
        y: 505,
        width: 150,
        lineGap: 7,
        max: 104
      },
      "field-5": {
        textarea: true,
        content: "5. Dónde me gusta estar en mi cumpleaños es",
        cols: "col-sm-12 col-md-6",
        x: 42,
        y: 621,
        width: 150,
        lineGap: 7,
        max: 84
      },
      "field-6": {
        textarea: true,
        content: "6. ¿Con quién me gusta estar en mi cumpleaños?",
        cols: "col-sm-12 col-md-6",
        x: 42,
        y: 718,
        width: 145,
        lineGap: 7,
        max: 80
      },
      "field-7": {
        textarea: true,
        content: "7. Lo que más me gusta de mi cumpleaños es",
        cols: "col-sm-12 col-md-6",
        x: 205,
        y: 323,
        width: 150,
        lineGap: 7,
        max: 244
      },
      "field-8": {
        textarea: true,
        content: "8. Mi oración por mi cumpleaños es",
        cols: "col-sm-12 col-md-6",
        x: 203,
        y: 527,
        width: 148,
        lineGap: 6.5,
        max: 300
      },
      "fecha": {
        x: 250,
        y: 177,
        width: 220,
        lineGap: 11,
      },
      "field-9": {
        special_radio: true,
        options: {
          "field-9-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 205,
            y: 735,
          },
          "field-9-2": {
            content: "Esta carta está escrita por el niño",
            x: 205,
            y: 774,
          },
        }
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "field-10": {
        textarea: true,
        content: "Compartiendo algo especial o agradecimiento",
        x: 43,
        y: 459,
        width: 240,
        lineGap: 12,
        max: 704
      },
      "img": {
        content: "Mi dibujo",
        image: true,
        x: 80,
        y: 80,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      }
    }
  },
  extras: {
    title: "Mi cumpleaños favorito",
    copy: [],
  }
};

module.exports = config;