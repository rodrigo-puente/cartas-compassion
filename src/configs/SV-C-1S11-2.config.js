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
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 65
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
      "field-5": {
        x: 50,
        y: 244,
        width: 165,
        lineGap: 10,
        max: 65
      },
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