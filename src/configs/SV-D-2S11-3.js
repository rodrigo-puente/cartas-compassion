const config = {
  page1: {
    bg: "1.jpg",
    items: {
      "field-1": {
        input: true,
        content: "1. Mis hermanos de mayor a menor son",
        x: 50,
        y: 245,
        width: 220,
        lineGap: 11,
        max: 45
      },
      "field-2": {
        input: true,
        content: "2. En mi familia paso más tiempo con ",
        x: 50,
        y: 313,
        width: 220,
        lineGap: 11,
        max: 90
      },
      "field-3": {
        input: true,
        content: "3. Los otros parientes que viven conmigo son",
        x: 50,
        y: 403,
        width: 220,
        lineGap: 11,
        max: 80
      },
      "field-4": {
        input: true,
        content: "4. Mi comida es preparada por",
        x: 50,
        y: 493,
        width: 220,
        lineGap: 11,
        max: 80
      },
      "field-5": {
        input: true,
        content: "5. Lo que más me gusta hacer con mi familia es ",
        x: 80,
        y: 568,
        width: 190,
        lineGap: 11,
        max: 100
      },
      "field-6": {
        input: true,
        content: "6. Mi familia vive en la zona",
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      },
      "field-7 ": {
        textarea : true,
        content: "7. La forma en la cual me gusta ayudar a mi familia es",
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      },
      "field-8": {
        input: true,
        content: "8. La religión de mi familia es",
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      },
      "field-9": {
        textarea : true,
        content: "9. Mi familia necesita oración por",
        x: 125,
        y: 665,
        width: 145,
        lineGap: 11,
        max: 105
      }, 
      "fecha": {
        x: 460,
        y: 160,
        width: 220,
        lineGap: 11,
      },
      "field-10": {
        special_radio: true,
        options: {
          "field-11-1": {
            content: "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
            x: 50,
            y: 203,
          },
          "field-11-2": {
            content: "Esta carta está escrita por el niño",
            x: 50,
            y: 215,
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
        x: 120,
        y: 280,
        config: {
          fit: [400, 200],
          align: 'center'
        },
      },
      "field-11": {
        textarea: true,
        content: "Comparte algo especial o agradecimiento",
        x: 40,
        y: 60,
        width: 520,
        lineGap: 8,
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