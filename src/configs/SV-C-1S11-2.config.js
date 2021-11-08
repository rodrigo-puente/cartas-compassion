const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 157,
        y: 372,
        width: 125,
        lineGap: 10,
        max: 26
      },
      "field-2": {
        x: 160,
        y: 489,
        width: 130,
        lineGap: 10,
        max: 26
      },
      "field-3": {
        x: 80,
        y: 641,
        width: 35,
        lineGap: 10,
        max: 2
      },
      "field-4": {
        x: 370,
        y: 267,
        width: 65,
        lineGap: 10,
        max: 6
      },
      "field-5": {
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
        x: 100,
        y: 62,
        width: 440,
        lineGap: 8,
        max: 640
      },
      "img": {
        image: true,
        x: 130,
        y: 260,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        x: 185,
        y: 775,
        width: 490,
        lineGap: 8,
        max: 70
      },
    }
  },
}

module.exports = config;