const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"input": true,
				"content": "1. Algunos de mis mejores amigos son",
				"x": 46,
				"y": 233,
				"width": 230,
				"lineGap": 7,
				"max": 93
			},
			"field-2": {
				"input": true,
				"content": "2. Mi mejor amigo es",
				"x": 46,
				"y": 338,
				"width": 230,
				"lineGap": 7,
				"max": 33
			},
			"field-3": {
				"is_checkbox": true,
				"content": "3. Me gusta mi mejor amigo porque él / ella es",
				"options": {
					"field-3-1": {
						"content": "Tiene el mismo pasatiempo que yo tengo"
					},
					"field-3-2": {
						"content": "Es inteligente"
					},
					"field-3-3": {
						"content": "Es amigable"
					},
					"field-3-4": {
						"content": "Es divertido"
					}
				}
			},
			"field-3-1": {
				"checkbox": true,
				"x": 51,
				"y": 406
			},
			"field-3-2": {
				"checkbox": true,
				"x": 51,
				"y": 432
			},
			"field-3-3": {
				"checkbox": true,
				"x": 51,
				"y": 447
			},
			"field-3-4": {
				"checkbox": true,
				"x": 51,
				"y": 463
			},
			"field-3-5": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 65,
				"y": 497,
				"width": 214,
				"lineGap": 7,
				"max": 78,
				"required": false
			},
			"field-4": {
				"input": true,
				"content": "4. Conocí a mi mejor amigo en",
				"x": 47,
				"y": 597,
				"width": 230,
				"lineGap": 7,
				"max": 97
			},
			"field-5": {
				"is_checkbox": true,
				"content": "5. La actividad que más me gusta hacer con mis amigos es",
				"options": {
					"field-5-1": {
						"content": "Juegos de computadora"
					},
					"field-5-2": {
						"content": "Volando cometas"
					},
					"field-5-3": {
						"content": "Jugando a las canicas"
					},
					"field-5-4": {
						"content": "Jugando con muñecas"
					},
					"field-5-5": {
						"content": "Cocina"
					},
					"field-5-6": {
						"content": "Al escondite"
					},
					"field-5-7": {
						"content": "Saltar la cuerda"
					},
					"field-5-8": {
						"content": "Jugando al futbol"
					}
				}
			},
			"field-5-1": {
				"checkbox": true,
				"x": 335,
				"y": 349
			},
			"field-5-2": {
				"checkbox": true,
				"x": 335,
				"y": 365
			},
			"field-5-3": {
				"checkbox": true,
				"x": 335,
				"y": 380
			},
			"field-5-4": {
				"checkbox": true,
				"x": 335,
				"y": 398
			},
			"field-5-5": {
				"checkbox": true,
				"x": 335,
				"y": 412
			},
			"field-5-6": {
				"checkbox": true,
				"x": 335,
				"y": 430
			},
			"field-5-7": {
				"checkbox": true,
				"x": 335,
				"y": 446
			},
			"field-5-8": {
				"checkbox": true,
				"x": 335,
				"y": 461
			},
			"field-5-9": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 350,
				"y": 495,
				"width": 230,
				"lineGap": 4,
				"max": 30,
				"required": false
			},
			"fecha": {
				"x": 345,
				"y": 149,
				"width": 220,
				"lineGap": 11
			}
		}
	},
	"page2": {
		"bg": "2.jpg",
		"items": {
			"field-6": {
				"textarea": true,
				"content": "6. Un mensaje a mi patrocinador",
				"x": 40,
				"y": 57,
				"width": 520,
				"lineGap": 4,
				"max": 500
			},
			"img": {
				"content": "7. Adjunta un dibujo",
				"image": true,
				"x": 60,
				"y": 275,
				"config": {
					"fit": [
						400,
						200
					],
					"align": "center"
				}
			},
			"field-7": {
				"special_radio": true,
				"options": {
					"field-7-1": {
						"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
						"x": 44,
						"y": 201
					},
					"field-7-2": {
						"content": "Esta carta está escrita por el niño",
						"x": 44,
						"y": 214
					}
				}
			}
		}
	},
	"extras": {
		"title": "Mis amigos",
		"copy": []
	}
}; 

 module.exports = config;