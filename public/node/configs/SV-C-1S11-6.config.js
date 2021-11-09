const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 35,
        y: 237,
        width: 188,
        lineGap: 4,
        max: 40
      },
      "field-1-copy": {
        x: 35,
        y: 237,
        width: 188,
        lineGap: 4,
        max: 40
      },
      "field-2": {
        x: 45,
        y: 360,
        width: 258,
        lineGap: 10,
        max: 100
      },
      "field-2-copy": {
        x: 35,
        y: 237,
        width: 188,
        lineGap: 4,
        max: 40
      },
      "field-3": {
        x: 45,
        y: 462,
        width: 258,
        lineGap: 10,
        max: 100
      },
      "field-3-copy": {
        x: 35,
        y: 237,
        width: 188,
        lineGap: 4,
        max: 40
      },
      "field-4-1": {
        checkbox: true,
        x: 58,
        y: 695,
      },
      "field-4-2": {
        checkbox: true,
        x: 58,
        y: 717,
      },
      "field-4-3": {
        checkbox: true,
        x: 58,
        y: 740,
      },
      "field-4-4": {
        checkbox: true,
        x: 58,
        y: 760,
      },
      "field-5": {
        x: 330,
        y: 272,
        width: 216,
        lineGap: 4,
        max: 46
      }, 
      "fecha": {
        x: 455,
        y: 165,
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
        max: 690
      },
      "img": {
        image: true,
        x: 100,
        y: 260,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        x: 175,
        y: 775,
        width: 330,
        lineGap: 6,
        max: 70
      },
    }
  },
}

module.exports = config;