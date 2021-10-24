const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 60,
        y: 250,
        width: 235,
        lineGap: 4,
      },
      "field-2": {
        x: 60,
        y: 330,
        width: 235,
        lineGap: 4,
      },
      "field-3-1": {
        checkbox: true,
        x: 65,
        y: 504,
      },
      "field-3-2": {
        checkbox: true,
        x: 65,
        y: 527,
      },
      "field-3-3": {
        checkbox: true,
        x: 65,
        y: 548,
      },
      "field-3-4": {
        checkbox: true,
        x: 65,
        y: 572,
      },
      "field-3-5": {
        checkbox: true,
        x: 65,
        y: 594,
      },
      "field-3-6": {
        checkbox: true,
        x: 65,
        y: 615,
      },
      "field-3-7": {
        checkbox: true,
        x: 65,
        y: 638,
      },
      "field-4": {
        x: 377,
        y: 337,
        width: 175,
        lineGap: 8,
      },
      "field-5": {
        x: 315,
        y: 484,
        width: 200,
        lineGap: 4,
      },
      "fecha": {
        x: 450,
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
        x: 50,
        y: 58,
        width: 490,
        lineGap: 6,
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
        x: 212,
        y: 770,
        width: 320,
        lineGap: 6,
      },
    }
  },
}

module.exports = config;