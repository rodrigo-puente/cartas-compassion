const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 60,
        y: 255,
        width: 235,
        lineGap: 4,
        max: 20
      },
      "field-2": {
        x: 60,
        y: 335,
        width: 235,
        lineGap: 4,
        max: 20
      },
      "field-3": {
        x: 60,
        y: 335,
        width: 235,
        lineGap: 4,
        max: 20
      },
      "field-4": {
        radio: true,
        options: {
          "field-4-1": {
            checkbox: true,
            x: 65,
            y: 548,
          },
          "field-4-2": {
            checkbox: true,
            x: 65,
            y: 548,
          },
          "field-4-3 ": {
            checkbox: true,
            x: 65,
            y: 548,
          }
        }

      },
      "field-5": {
        x: 60,
        y: 335,
        width: 235,
        lineGap: 4,
        max: 20
      }, 
      "fecha": {
        x: 450,
        y: 173,
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
        x: 215,
        y: 770,
        width: 320,
        lineGap: 6,
        max: 45
      },
    }
  },
}

module.exports = config;