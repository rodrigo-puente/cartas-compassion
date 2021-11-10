const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Cuántos centimetros de altura tengo",
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
        input: true,
        content: "2. Cuántos kilogramos peso",
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
        input: true,
        content: "3. Cuántos años de edad tengo ahora",
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
      "field-4": {
        is_checkbox: true,
        content: "4. Estas son algunas de las cosas que puedo hacer",
        options: {
          "field-4-1": {
            content: "Caminar"
          },
          "field-4-2": {
            content: "Correr"
          },
          "field-4-3": {
            content: "Saltar"
          },
          "field-4-4": {
            content: "Tirar una pelota"
          },
        }
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
        input: true,
        content: "5. Mis peticiones de oración son",
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
    title: "Acerca de mí",
    copy: ['field-1', 'field-2', 'field-3'],
  }
}

module.exports = config;