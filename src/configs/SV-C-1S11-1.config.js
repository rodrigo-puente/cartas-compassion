const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 53,
        y: 230,
        width: 210,
        lineGap: 11,
        max: 265
      },
      "field-2": {
        radio: true,
        options: {
          "field-2-1": {
            checkbox: true,
            x: 83,
            y: 438
          },
          "field-2-2": {
            checkbox: true,
            x: 140,
            y: 438,
          }
        }
      },
      "field-3": {
        x: 160,
        y: 550,
        width: 150,
        lineGap: 12,
        max: 45
      },
      "field-4": {
        x: 60,
        y: 681,
        width: 230,
        lineGap: 10,
        max: 45
      },
      "field-5-1": {
        x: 319,
        y: 230,
        width: 250,
        lineGap: 11,
        max: 140
      },
      "field-5-2": {
        x: 410,
        y: 295,
        width: 140,
        lineGap: 10,
        max: 215
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
        y: 61,
        width: 490,
        lineGap: 8,
        max: 640
      },
      "img": {
        image: true,
        x: 95,
        y: 255,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        x: 188,
        y: 774,
        width: 490,
        lineGap: 8,
        max: 62
      },
    }
  },
}

module.exports = config;