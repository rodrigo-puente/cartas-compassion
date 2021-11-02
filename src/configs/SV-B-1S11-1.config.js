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
        y: 332,
        width: 230,
        lineGap: 10,
        max: 80
      },
      "field-3-1": {
        checkbox: true,
        x: 95,
        y: 457,
      },
      "field-3-2": {
        checkbox: true,
        x: 125,
        y: 457,
      },
      "field-3-3": {
        checkbox: true,
        x: 155,
        y: 457,
      },
      "field-3-4": {
        checkbox: true,
        x: 185,
        y: 457,
      },
      "field-3-5": {
        checkbox: true,
        x: 215,
        y: 457,
      },
      "field-4-1": {
        x: 66,
        y: 546,
        width: 230,
        lineGap: 10,
        max: 2
      },
      "field-4-2": {
        x: 119,
        y: 546,
        width: 230,
        lineGap: 10,
        max: 2
      },
      "field-4-3": {
        x: 168,
        y: 546,
        width: 230,
        lineGap: 10,
        max: 4
      },
      "field-5": {
        x: 50,
        y: 634,
        width: 230,
        lineGap: 10,
        max: 80
      },
      "field-6": {
        x: 335,
        y: 217,
        width: 230,
        lineGap: 10,
        max: 80
      },
      "field-7-1": {
        checkbox: true,
        x: 358,
        y: 343,
      },
      "field-7-2": {
        checkbox: true,
        x: 443,
        y: 343,
      },
      "field-7-3": {
        checkbox: true,
        x: 534,
        y: 343,
      },
      "field-8": {
        x: 335,
        y: 438,
        width: 230,
        lineGap: 10,
        max: 45
      },
      "field-9": {
        x: 335,
        y: 495,
        width: 230,
        lineGap: 10,
        max: 45
      },
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "field-10": {
        x: 50,
        y: 61,
        width: 490,
        lineGap: 8,
        max: 680
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
      "field-11": {
        checkbox: true,
        x: 50,
        y: 203,
        lineGap: 11,
      },
      "field-12": {
        checkbox: true,
        x: 50,
        y: 215,
        lineGap: 11,
      },
    }
  },
}

module.exports = config;