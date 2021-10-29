const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 60,
        y: 240,
        width: 200,
        lineGap: 10,
        max: 70
      },
      "field-2": {
        x: 60,
        y: 456,
        width: 200,
        lineGap: 10,
        max: 70
      },
      "field-3": {
        x: 110,
        y: 602,
        width: 160,
        lineGap: 10,
        max: 60
      },
      "field-4": {
        x: 310,
        y: 260,
        width: 115,
        lineGap: 10,
        max: 40
      },
      "field-5": {
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
        x: 50,
        y: 60,
        width: 490,
        lineGap: 8,
        max: 660
      },
      "img": {
        image: true,
        x: 120,
        y: 250,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        x: 230,
        y: 770,
        width: 320,
        lineGap: 6,
        max: 20
      },
    }
  },
}

module.exports = config;