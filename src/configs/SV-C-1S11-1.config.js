const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 65
      },
      "field-2": {
        radio: true,
        options: {
          "field-2-1": {
            checkbox: true,
            x: 10,
            y: 10
          },
          "field-2-2": {
            checkbox: true,
            x: 95,
            y: 457,
          }
        }
      },
      "field-3": {
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 65
      },
      "field-4": {
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 65
      },
      "field-5-1": {
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 65
      },
      "field-5-2": {
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 65
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
        x: 120,
        y: 290,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        x: 50,
        y: 61,
        width: 490,
        lineGap: 8,
        max: 640
      },
    }
  },
}

module.exports = config;