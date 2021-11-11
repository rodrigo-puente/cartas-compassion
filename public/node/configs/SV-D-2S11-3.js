const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Mis hermanos de mayor a menor son",
        x: 41,
        y: 245,
        width: 135,
        lineGap: 7,
        max: 85
      },
      "field-2": {
        input: true,
        content: "2. En mi familia paso más tiempo con ",
        x: 41,
        y: 369,
        width: 135,
        lineGap: 7,
        max: 56
      },
      "field-3": {
        input: true,
        content: "3. Los otros parientes que viven conmigo son",
        x: 41,
        y: 459,
        width: 135,
        lineGap: 7,
        max: 56
      },
      "field-4": {
        input: true,
        content: "4. Mi comida es preparada por",
        x: 40,
        y: 533,
        width: 134,
        lineGap: 7,
        max: 56
      },
      "field-5": {
        input: true,
        content: "5. Lo que más me gusta hacer con mi familia es ",
        x: 41,
        y: 617,
        width: 133,
        lineGap: 7,
        max: 85
      },
      "field-6": {
        input: true,
        content: "6. Mi familia vive en la zona",
        x: 41,
        y: 725,
        width: 131,
        lineGap: 7,
        max: 46
      },
      "field-7 ": {
        textarea : true,
        content: "7. La forma en la cual me gusta ayudar a mi familia es",
        x: 202,
        y: 368,
        width: 130,
        lineGap: 7,
        max: 100
      },
      "field-8": {
        input: true,
        content: "8. La religión de mi familia es",
        x: 203,
        y: 498,
        width: 130,
        lineGap: 7,
        max: 47
      },
      "field-9": {
        textarea : true,
        content: "9. Mi familia necesita oración por",
        x: 210,
        y: 572,
        width: 131,
        lineGap: 7,
        max: 204
      }, 
      "fecha": {
        x: 233,
        y: 160,
        width: 220,
        lineGap: 10,
      },
      "field-10": {
        special_radio: true,
        options: {
          "field-11-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 212,
            y: 746,
          },
          "field-11-2": {
            content: "Esta carta está escrita por el niño",
            x: 212,
            y: 788,
          },
        }
      }
    }
  },
  page2: {
    bg: "2.jpg",
    items: {
      "img": {
        image: true,
        content: "Dibuja a tu familia",
        x: 126,
        y: 71,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-11": {
        textarea: true,
        content: "Comparte algo especial o agradecimiento",
        x: 40,
        y: 459,
        width: 224,
        lineGap: 12,
        max: 640
      },
    }
  },
  extras: {
    title: "Mi familia",
    copy: [],
  }
}

module.exports = config;