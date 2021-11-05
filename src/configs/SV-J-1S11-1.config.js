const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1-1": {
        checkbox: true,
        x: 72,
        y: 427,
      },
      "field-1-2": {
        checkbox: true,
        x: 146,
        y: 427,
      },
      "field-1-3": {
        checkbox: true,
        x: 230,
        y: 427,
      },
      "field-2": {
        select: true,
        x: 350,
        y: 460,
        width: 490,
        lineGap: 11,
        options: {
          "Ahuachapán": {
            x: 345,
            y: 400,
          },
          "Cabañas": {
            x: 450,
            y: 400,
          },
          "Chalatenango": {
            x: 411,
            y: 368,
          }, 
          "Cuscatlán": {
            x: 425,
            y: 400,
          },
          "La Libertad": {
            x: 390,
            y: 420,
          },
          "La Paz": {
            x: 431,
            y: 435,
          },
          "La Unión": {
            x: 525,
            y: 435,
          },
          "Morazán": {
            x: 510,
            y: 415,
          },
          "Santa Ana": {
            x: 376,
            y: 383,
          },
          "San Miguel": {
            x: 500,
            y: 440,
          },
          "San Salvador": {
            x: 411,
            y: 411,
          },
          "San Vicente": {
            x: 450,
            y: 420,
          },
          "Sonsonate": {
            x: 366,
            y: 420,
          },
          "Usulután": {
            x: 470,
            y: 440,
          },
        }
      },
      "field-3": {
        x: 82,
        y: 516,
        width: 490,
        lineGap: 11,
        max: 2
      },
      "field-3-copy": {
        x: 103,
        y: 526,
        width: 490,
        lineGap: 11,
        max: 2
      },
      "field-3-1-A": {
        x: 60,
        y: 565,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-3-1-B": {
        x: 195,
        y: 565,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-3-2-A": {
        x: 60,
        y: 583,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-3-2-B": {
        x: 195,
        y: 583,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-3-3-A": {
        x: 60,
        y: 600,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-3-3-B": {
        x: 195,
        y: 600,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-3-4-A": {
        x: 60,
        y: 619,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-3-4-B": {
        x: 195,
        y: 619,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-3-5-A": {
        x: 60,
        y: 638,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-3-5-B": {
        x: 195,
        y: 638,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-3-6-A": {
        x: 60,
        y: 657,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-3-6-B": {
        x: 195,
        y: 657,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-3-7-A": {
        x: 60,
        y: 676,
        width: 220,
        lineGap: 11,
        max: 20
      },
      "field-3-7-B": {
        x: 195,
        y: 676,
        width: 220,
        lineGap: 11,
        max: 15
      },
      "field-6": {
        x: 370,
        y: 505,
        width: 220,
        lineGap: 11,
        max: 20
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "field-4": {
        x: 60,
        y: 65,
        width: 210,
        lineGap: 6,
        max: 250
      },
      "field-5": {
        x: 335,
        y: 65,
        width: 210,
        lineGap: 6,
        max: 250
      },
      "img": {
        image: true,
        x: 85,
        y: 300,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
    }
  },
}

module.exports = config;