const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"input": true,
				"content": "1. Mi último chequeo médico fue en",
				"x": 45,
				"y": 235,
				"width": 135,
				"lineGap": 7,
				"max": 15
			},
			"field-2": {
				"input": true,
				"content": "2. Para mis chequeos médicos yo fui a",
				"x": 45,
				"y": 302,
				"width": 135,
				"lineGap": 3,
				"max": 33
			},
			"field-3": {
				"input": true,
				"content": "3. Yo me transporto a mis chequeos médicos",
				"x": 45,
				"y": 387,
				"width": 135,
				"lineGap": 3,
				"max": 33
			},
			"field-4": {
				"input": true,
				"content": "4. Las siguientes personas fueron a mi chequeo médico conmigo",
				"x": 45,
				"y": 484,
				"width": 135,
				"lineGap": 3,
				"max": 33
			},
			"field-5": {
				"input": true,
				"content": "5. En mi chequeo médico, el médico/enfermera dijo",
				"x": 45,
				"y": 566,
				"width": 135,
				"lineGap": 3,
				"max": 72
			},
			"field-6": {
				"input": true,
				"content": "6. En mi chequeo aprendí que",
				"x": 45,
				"y": 679,
				"width": 135,
				"lineGap": 3,
				"max": 72
			},
			"field-7": {
				"is_checkbox": true,
				"content": "7. Para estar sano yo",
				"options": {
					"field-7-1": {
						"content": "Hago mucho ejercicio"
					},
					"field-7-2": {
						"content": "Descanso mucho"
					},
					"field-7-3": {
						"content": "Lavo mis manos y cepillo mis dientes"
					},
					"field-7-4": {
						"content": "Como comida sana"
					}
				}
			},
			"field-7-1": {
				"checkbox": true,
				"x": 207,
				"y": 456
			},
			"field-7-2": {
				"checkbox": true,
				"x": 276,
				"y": 456
			},
			"field-7-3": {
				"checkbox": true,
				"x": 207,
				"y": 540
			},
			"field-7-4": {
				"checkbox": true,
				"x": 276,
				"y": 540
			},
			"field-8": {
				"textarea": true,
				"content": "8. Lo que más me gusta hacer para mantenerme sano es",
				"x": 210,
				"y": 658,
				"width": 125,
				"lineGap": 2,
				"max": 126
			},
			"fecha": {
				"x": 260,
				"y": 217,
				"width": 220,
				"lineGap": 11
			}
		}
	},
	"page2": {
		"bg": "2.jpg",
		"items": {
			"field-9": {
				"textarea": true,
				"content": "9. Compartiendo algo especial o agradecimiento",
				"x": 50,
				"y": 456,
				"width": 230,
				"lineGap": 8,
				"max": 460
			},
			"img": {
				"image": true,
				"content": "Dibuja cómo es tu vida saludable",
				"x": 100,
				"y": 100,
				"config": {
					"fit": [
						400,
						200
					],
					"align": "center"
				}
			},
			"field-10": {
				"special_radio": true,
				"options": {
					"field-10-1": {
						"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
						"checkbox": true,
						"x": 163,
						"y": 356
					},
					"field-10-2": {
						"content": "Esta carta está escrita por el niño",
						"checkbox": true,
						"x": 163,
						"y": 376
					}
				}
			}
		}
	},
	"extras": {
		"title": "Mi vida saludable",
		"copy": []
	}
}; 

 module.exports = config;