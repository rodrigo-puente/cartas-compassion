const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Mi edad",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-2": {
        input: true,
        content: "2. Mi fecha de cumpleaños",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-3": {
        textarea: true,
        content: "3. En mi mejor cumpleaños, qué me gusta hacer y con quién(es)",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-4": {
        textarea: true,
        content: "4. Las cosas que más me gustan hacer en mi cumpleaños son",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-5": {
        textarea: true,
        content: "5. Dónde me gusta estar en mi cumpleaños es",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-6": {
        textarea: true,
        content: "6. ¿Con quién me gusta estar en mi cumpleaños?",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-7": {
        textarea: true,
        content: "7. Lo que más me gusta de mi cumpleaños es",
        cols: "col-sm-12 col-md-6",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-8": {
        textarea: true,
        content: "8. Mi oración por mi cumpleaños es",
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
      },
      "field-9": {
        special_radio: true,
        options: {
          "field-9-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 40,
            y: 765,
          },
          "field-9-2": {
            content: "Esta carta está escrita por el niño",
            x: 40,
            y: 778,
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
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "Mi dibujo",
        image: true,
        x: 120,
        y: 280,
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