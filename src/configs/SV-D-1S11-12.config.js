const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
      },
      "field-2": {
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
      },
      "field-3": {
        x: 50,
        y: 403,
        width: 220,
        lineGap: 11,
      },
      "field-4": {
        x: 50,
        y: 493,
        width: 220,
        lineGap: 11,
      },
      "field-5": {
        x: 80,
        y: 568,
        width: 190,
        lineGap: 11,
      },
      "field-6": {
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
      },
      "field-7": {
        x: 335,
        y: 268,
        width: 210,
        lineGap: 11,
      },
      "field-8": {
        x: 335,
        y: 366,
        width: 210,
        lineGap: 11,
      },
      "fecha": {
        x: 450,
        y: 180,
        width: 220,
        lineGap: 11,
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "field-9": {
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
      },
      "field-10": {
        checkbox: true,
        x: 40,
        y: 765,
        config: {
          width: 8,
          height: 8
        },
        lineGap: 11,
      },
      "field-11": {
        checkbox: true,
        x: 40,
        y: 778,
        config: {
          width: 8,
          height: 8
        },
        lineGap: 11,
      }
    }
  }
}

module.exports = config;