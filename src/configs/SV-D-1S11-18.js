const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"is_checkbox": true,
				"content": "Chequea 2 cosas que más te gusta hacer con tu familia",
				"options": {
					"field-1-1": {
						"content": "Comer juntos"
					},
					"field-1-2": {
						"content": "Ir al río / quebrada juntos"
					},
					"field-1-3": {
						"content": "Jugar juntos"
					},
					"field-1-4": {
						"content": "Hacer tareas juntos"
					},
					"field-1-5": {
						"content": "Ir al parque juntos"
					}
				}
			},
			"field-1-1": {
				"checkbox": true,
				"x": 72,
				"y": 295
			},
			"field-1-2": {
				"checkbox": true,
				"x": 165,
				"y": 332
			},
			"field-1-3": {
				"checkbox": true,
				"x": 255,
				"y": 303
			},
			"field-1-4": {
				"checkbox": true,
				"x": 75,
				"y": 400
			},
			"field-1-5": {
				"checkbox": true,
				"x": 260,
				"y": 401
			},
			"field-2": {
				"input": true,
				"content": "El nombre de mi maestro favorito en la escuela es",
				"x": 57,
				"y": 473,
				"width": 230,
				"lineGap": 6,
				"max": 34
			},
			"field-3": {
				"input": true,
				"content": "El nombre de mi mejor amigo es",
				"x": 57,
				"y": 522,
				"width": 230,
				"lineGap": 6,
				"max": 34
			},
			"field-4": {
				"input": true,
				"content": "El cuento que más me gusta es",
				"x": 57,
				"y": 570,
				"width": 230,
				"lineGap": 6,
				"max": 34
			},
			"field-5": {
				"radio": true,
				"content": "El lugar que más me gusta visitar es",
				"options": {
					"field-5-1": {
						"content": "Playa",
						"checkbox": true,
						"x": 87,
						"y": 663
					},
					"field-5-2": {
						"content": "Parque",
						"checkbox": true,
						"x": 187,
						"y": 655
					},
					"field-5-3": {
						"content": "Volcán",
						"checkbox": true,
						"x": 50,
						"y": 745
					},
					"field-5-4": {
						"content": "Zoológico",
						"checkbox": true,
						"x": 187,
						"y": 730
					}
				}
			},
			"field-6": {
				"is_checkbox": true,
				"content": "Lo que más me gusta hacer para ayudar en mi casa es",
				"options": {
					"field-6-1": {
						"content": "Lavar los platos"
					},
					"field-6-2": {
						"content": "Barrer la casa"
					},
					"field-6-3": {
						"content": "Hacer mandados"
					},
					"field-6-4": {
						"content": "Arreglar la cama"
					}
				}
			},
			"field-6-1": {
				"checkbox": true,
				"x": 355,
				"y": 366
			},
			"field-6-2": {
				"checkbox": true,
				"x": 510,
				"y": 402
			},
			"field-6-3": {
				"checkbox": true,
				"x": 378,
				"y": 492
			},
			"field-6-4": {
				"checkbox": true,
				"x": 415,
				"y": 450
			},
			"fecha": {
				"x": 450,
				"y": 152,
				"width": 220,
				"lineGap": 11
			}
		}
	},
	"page2": {
		"bg": "2.jpg",
		"items": {
			"field-10": {
				"textarea": true,
				"content": "Un mensaje a mi patrocinador",
				"x": 50,
				"y": 58,
				"width": 490,
				"lineGap": 4,
				"max": 493
			},
			"img": {
				"content": "Mi dibujo",
				"image": true,
				"x": 100,
				"y": 250,
				"config": {
					"fit": [
						400,
						200
					],
					"align": "center"
				}
			},
			"field-11": {
				"special_radio": true,
				"options": {
					"field-11-1": {
						"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
						"x": 38,
						"y": 763
					},
					"field-11-2": {
						"content": "Esta carta está escrita por el niño",
						"x": 38,
						"y": 775
					}
				}
			}
		}
	},
	"extras": {
		"title": "Qué es lo que más me gusta",
		"copy": []
	}
}; 

 module.exports = config;