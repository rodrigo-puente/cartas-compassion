const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 237,
        y: 214,
        width: 188,
        lineGap: 4,
        max: 6
      },
      "field-1-copy": {
        x: 220,
        y: 236,
        width: 188,
        lineGap: 4,
        max: 6
      },
      "field-2": {
        x: 233,
        y: 281,
        width: 258,
        lineGap: 10,
        max: 7
      },
      "field-2-copy": {
        x: 234,
        y: 303,
        width: 188,
        lineGap: 4,
        max: 7
      },
      "field-3": {
        x: 237,
        y: 347,
        width: 258,
        lineGap: 10,
        max: 3
      },
      "field-3-copy": {
        x: 219,
        y: 370,
        width: 188,
        lineGap: 4,
        max: 3
      },
      "field-4-1": {
        checkbox: true,
        x: 200,
        y: 473,
      },
      "field-4-2": {
        checkbox: true,
        x: 200,
        y: 494,
      },
      "field-4-3": {
        checkbox: true,
        x: 200,
        y: 516,
      },
      "field-4-4": {
        checkbox: true,
        x: 200,
        y: 538,
      },
      "field-5": {
        x: 407,
        y: 249,
        width: 159,
        lineGap: 12,
        max: 325
      }, 
      "fecha": {
        x: 470,
        y: 171,
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
        max: 695
      },
      "img": {
        image: true,
        x: 100,
        y: 255,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        x: 186,
        y: 773,
        width: 330,
        lineGap: 6,
        max: 70
      },
    }
  },
}

module.exports = config;