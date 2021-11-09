const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-2": {
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90
      },
      "field-3": {
        x: 50,
        y: 403,
        width: 220,
        lineGap: 11,
        max: 80
      },
      "field-4": {
        x: 50,
        y: 493,
        width: 220,
        lineGap: 11,
        max: 80
      },
      "field-5": {
        x: 80,
        y: 568,
        width: 190,
        lineGap: 11,
        max: 100
      },
      "field-6": {
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      },
      "field-7-1": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-7-2": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-7-3": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-7-4": {
        checkbox: true,
        x: 69,
        y: 427
      },
      "field-8 ": {
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      },
      "fecha": {
        x: 370,
        y: 140,
        width: 220,
        lineGap: 11,
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "img": {
        image: true,
        x: 120,
        y: 280,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-9": {
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "field-10": {
        radio: true,
        options: {
          "field-10-1": {
            checkbox: true,
            x: 40,
            y: 765,
          },
          "field-10-2": {
            checkbox: true,
            x: 40,
            y: 765,
          }
        }
      }
    }
  }
}

module.exports = config;