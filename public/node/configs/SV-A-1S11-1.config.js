const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 50,
        y: 230,
        width: 185,
        lineGap: 10,
        max: 140
      },
      "field-2-1": {
        x: 88,
        y: 336,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-2-2": {
        x: 160,
        y: 336,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-2-1-copy": {
        x: 87,
        y: 348,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-2-2-copy": {
        x: 149,
        y: 348,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "field-3-1": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-3-2": {
        checkbox: true,
        x: 69,
        y: 448,
      },
      "field-3-3": {
        checkbox: true,
        x: 69,
        y: 469,
      },
      "field-3-4": {
        checkbox: true,
        x: 69,
        y: 490,
      },
      "field-4": {
        x: 50,
        y: 565,
        width: 230,
        lineGap: 10,
        max: 200
      },
      "field-5-1": {
        x: 315,
        y: 228,
        width: 230,
        lineGap: 10,
        max: 235
      },
      "field-5-2": {
        x: 418,
        y: 353,
        width: 125,
        lineGap: 10,
        max: 140
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
        max: 640
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
        x: 188,
        y: 773,
        width: 320,
        lineGap: 6,
        max: 20
      },
    }
  },
}

module.exports = config;