const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Ahora el clima es",
        x: 35,
        y: 237,
        width: 188,
        lineGap: 4,
        max: 40
      },
      "field-2": {
        input: true,
        content: "2. Cuando el tiempo está soleado me gusta",
        x: 45,
        y: 360,
        width: 258,
        lineGap: 10,
        max: 100
      },
      "field-3": {
        input: true,
        content: "3. Cuando el tiempo está lluvioso me gusta",
        x: 45,
        y: 462,
        width: 258,
        lineGap: 10,
        max: 100
      },
      "field-4": {
        radio: true,
        content: "4. Mi clima favorito es",
        options: {
          "field-4-1": {
            content: "Lluvioso",
            checkbox: true,
            x: 58,
            y: 695,
          },
          "field-4-2": {
            content: "Soleado",
            checkbox: true,
            x: 58,
            y: 717,
          },
          "field-4-3": {
            content: "Con vientos",
            checkbox: true,
            x: 58,
            y: 740,
          }
        }

      },
      "field-5": {
        input: true,
        content: "5. En mi comunidad el clima es bastante (cálido, caliente, helado, ...)",
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
        textarea: true,
        content: "6. Un mensaje a mi patrocinador",
        x: 50,
        y: 60,
        width: 490,
        lineGap: 8,
        max: 690
      },
      "img": {
        content: "7. Adjunta un dibujo",
        image: true,
        x: 100,
        y: 260,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-7": {
        input: true,
        content: "Nombre y parentesco con quien escribe la carta",
        x: 175,
        y: 775,
        width: 330,
        lineGap: 6,
        max: 70
      },
    }
  },
  extras: {
    title: "El clima",
    copy: [],
  }
}

module.exports = config;