const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        x: 45,
        y: 212,
        width: 500,
        lineGap: 11,
      },
      "fecha": {
        x: 450,
        y: 190,
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
        x: 100,
        y: 460,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
    }
  },
}

module.exports = config;