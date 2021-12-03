const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"is_checkbox": true,
				"content": "1. ¿Cuáles estaciones tenemos en El Salvador?",
				"options": {
					"field-1-1": {
						"content": "Invierno"
					},
					"field-1-2": {
						"content": "Primavera"
					},
					"field-1-3": {
						"content": "Otoño"
					},
					"field-1-4": {
						"content": "Verano"
					}
				}
			},
			"field-1-1": {
				"checkbox": true,
				"x": 48,
				"y": 265
			},
			"field-1-2": {
				"checkbox": true,
				"x": 220,
				"y": 265
			},
			"field-1-3": {
				"checkbox": true,
				"x": 48,
				"y": 320
			},
			"field-1-4": {
				"checkbox": true,
				"x": 220,
				"y": 315
			},
			"field-2": {
				"radio": true,
				"content": "2. Mi clima favorito es",
				"options": {
					"field-2-1": {
						"content": "Soleado",
						"checkbox": true,
						"x": 265,
						"y": 430
					},
					"field-2-2": {
						"content": "Lluvioso",
						"checkbox": true,
						"x": 273,
						"y": 459
					}
				}
			},
			"label": {
				"is_label": true,
				"content": "4. Responde a las siguientes preguntas"
			},
			"field-5": {
				"radio": true,
				"content": "El clima de hoy es",
				"options": {
					"field-5-1": {
						"content": "Soleado",
						"checkbox": true,
						"x": 335,
						"y": 258
					},
					"field-5-2": {
						"content": "Lluvioso",
						"checkbox": true,
						"x": 418,
						"y": 258
					},
					"field-5-3": {
						"content": "Nublado",
						"checkbox": true,
						"x": 503,
						"y": 258
					}
				}
			},
			"field-6": {
				"radio": true,
				"content": "El clima de hoy es",
				"options": {
					"field-6-1": {
						"content": "Soleado",
						"checkbox": true,
						"x": 335,
						"y": 371
					},
					"field-6-2": {
						"content": "Lluvioso",
						"checkbox": true,
						"x": 418,
						"y": 371
					},
					"field-6-3": {
						"content": "Nublado",
						"checkbox": true,
						"x": 503,
						"y": 371
					}
				}
			},
			"field-7": {
				"radio": true,
				"content": "En navidad el clima normalmente es",
				"options": {
					"field-7-1": {
						"content": "Soleado",
						"checkbox": true,
						"x": 335,
						"y": 480
					},
					"field-7-2": {
						"content": "Lluvioso",
						"checkbox": true,
						"x": 418,
						"y": 480
					},
					"field-7-3": {
						"content": "Nublado",
						"checkbox": true,
						"x": 503,
						"y": 480
					}
				}
			},
			"fecha": {
				"x": 225,
				"y": 132,
				"width": 220,
				"lineGap": 11
			}
		}
	},
	"page2": {
		"bg": "2.jpg",
		"items": {
			"field-8": {
				"textarea": true,
				"content": "Un mensaje a mi patrocinador",
				"x": 40,
				"y": 57,
				"width": 520,
				"lineGap": 4,
				"max": 500
			},
			"img": {
				"content": "Adjunta un dibujo",
				"image": true,
				"x": 100,
				"y": 280,
				"config": {
					"fit": [
						400,
						200
					],
					"align": "center"
				}
			},
			"field-9": {
				"special_radio": true,
				"options": {
					"field-9-1": {
						"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
						"x": 37,
						"y": 763
					},
					"field-9-2": {
						"content": "Esta carta está escrita por el niño",
						"x": 37,
						"y": 775
					}
				}
			}
		}
	},
	"extras": {
		"title": "El clima",
		"copy": []
	}
}; 

 module.exports = config;