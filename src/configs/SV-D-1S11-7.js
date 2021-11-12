const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "label-1": {
        is_label: true,
        content: "Para niños en la escuela"
      },
      "field-1": {
        input: true,
        content: "1. En qué grado estoy",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45,
        required: false
      },
      "field-2": {
        input: true,
        content: "2. El nombre de mi maestro en la escuela es",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
        required: false
      },
      "field-3": {
        input: true,
        content: "3. Mi escuela está a cuántos minutos de mi casa",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
        required: false
      },
      "field-3-copy": {
        x: 85,
        y: 348,
        width: 200,
        lineGap: 10,
        max: 2
      },
      "label-2": {
        is_label: true,
        content: "Para niños que aún no están en la escuela"
      },
      "field-4": {
        radio: true, 
        content: "4. Yo planeo empezar ir a la escuela cuando tenga",
        options: {
          "field-4-1": {
            content: "3 años",
            checkbox: true,
            x: 95,
            y: 457,
          },
          "field-4-2": {
            content: "4 años",
            checkbox: true,
            x: 125,
            y: 457,
          },
          "field-4-3": {
            content: "5 años",
            checkbox: true,
            x: 155,
            y: 457,
          },
          "field-4-4": {
            content: "6 años",
            checkbox: true,
            x: 185,
            y: 457,
          },
        },
      },
      "field-5": {
        input: true,
        content: "5. Quiero ir a la escuela porque",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
        required: false
      },
      "field-6": {
        input: true,
        content: "6. En la escuela quisiera aprender acerca de",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90,
        required: false
      },
      "label-3": {
        is_label: true,
        content: "Para todos los niños"
      },
      "field-7": {
        is_checkbox: true,
        content: "7. Llego a la escuela en / Iré a mi escuela por medio de",
        options: {
          "field-7-1": {
            content: "Moto taxi"
          },
          "field-7-2": {
            content: "Caminando",
          },
          "field-7-3": {
            content: "Bicicleta",
          },
          "field-7-4": {
            content: "Bus",
          },
        }
      },
      "field-7-1": {
        checkbox: true,
        x: 69,
        y: 427,
      },
      "field-7-2": {
        checkbox: true,
        x: 69,
        y: 448,
      },
      "field-7-3": {
        checkbox: true,
        x: 69,
        y: 469,
      },
      "field-7-4": {
        checkbox: true,
        x: 69,
        y: 490,
      },
      "field-7-5": {
        input: true,
        content: "Otro",
        cols: "col-sm-12 col-md-4",
        x: 445,
        y: 260,
        width: 500,
        lineGap: 8,
        max: 20,
      },
      "field-8": {
        radio: true, 
        content: "8. El uniforme de mi escuela es de color / El color que me gustaría tener de uniforme es",
        options: {
          "field-8-1": {
            content: "Blanco",
            checkbox: true,
            x: 95,
            y: 457,
          },
          "field-8-2": {
            content: "Verde",
            checkbox: true,
            x: 125,
            y: 457,
          },
          "field-8-3": {
            content: "Azul",
            checkbox: true,
            x: 155,
            y: 457,
          },
          "field-8-4": {
            content: "Amarillo",
            checkbox: true,
            x: 185,
            y: 457,
          },
        },
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
      "field-9": {
        textarea: true,
        content: "6. Un mensaje a mi patrocinador",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
        max: 640
      },
      "img": {
        content: "7. Adjunta un dibujo",
        image: true,
        x: 120,
        y: 280,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-10": {
        special_radio: true,
        options: {
          "field-10-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 40,
            y: 765,
          },
          "field-10-2": {
            content: "Esta carta está escrita por el niño",
            x: 40,
            y: 778,
          },
        }
      }
    }
  },
  extras: {
    title: "Mi escuela",
    copy: ['field-3'],
  }
}

module.exports = config;