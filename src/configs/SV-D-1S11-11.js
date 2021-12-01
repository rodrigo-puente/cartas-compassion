const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"radio": true,
				"content": "1. En el futuro espero aprender sobre",
				"options": {
					"field-1-1": {
						"content": "Mecánica",
						"checkbox": true,
						"x": 230,
						"y": 225
					},
					"field-1-2": {
						"content": "Diseño gráfico",
						"checkbox": true,
						"x": 115,
						"y": 260
					},
					"field-1-3": {
						"content": "Trabajar con hierro",
						"checkbox": true,
						"x": 190,
						"y": 265
					},
					"field-1-4": {
						"content": "Computación ",
						"checkbox": true,
						"x": 250,
						"y": 275
					}
				}
			},
			"field-1-5": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 96,
				"y": 326,
				"width": 230,
				"lineGap": 4,
				"max": 30,
				"required": false
			},
			"field-2": {
				"radio": true,
				"content": "2. En el futuro espero visitar",
				"options": {
					"field-2-1": {
						"content": "América del Norte",
						"checkbox": true,
						"x": 45,
						"y": 475
					},
					"field-2-2": {
						"content": "América del Sur",
						"checkbox": true,
						"x": 80,
						"y": 531
					},
					"field-2-3": {
						"content": "Europa",
						"checkbox": true,
						"x": 160,
						"y": 431
					},
					"field-2-4": {
						"content": "Africa",
						"checkbox": true,
						"x": 160,
						"y": 505
					},
					"field-2-5": {
						"content": "Asia",
						"checkbox": true,
						"x": 234,
						"y": 448
					},
					"field-2-6": {
						"content": "Oceania",
						"checkbox": true,
						"x": 255,
						"y": 541
					}
				}
			},
			"field-3": {
				"radio": true,
				"content": "3. En el futuro me gustaría ser",
				"options": {
					"field-3-1": {
						"content": "Arquitecto",
						"checkbox": true,
						"x": 248,
						"y": 613
					},
					"field-3-2": {
						"content": "Abogado",
						"checkbox": true,
						"x": 279,
						"y": 703
					},
					"field-3-3": {
						"content": "Veterinario",
						"checkbox": true,
						"x": 231,
						"y": 703
					},
					"field-3-4": {
						"content": "Bombero",
						"checkbox": true,
						"x": 168,
						"y": 705
					},
					"field-3-5": {
						"content": "Doctor",
						"checkbox": true,
						"x": 117,
						"y": 705
					}
				}
			},
			"field-3-6": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 145,
				"y": 748,
				"width": 230,
				"lineGap": 4,
				"max": 24,
				"required": false
			},
			"field-4": {
				"radio": true,
				"content": "4. Espero un día poder tocar",
				"options": {
					"field-4-1": {
						"content": "Batería",
						"checkbox": true,
						"x": 363,
						"y": 195
					},
					"field-4-2": {
						"content": "Pandereta",
						"checkbox": true,
						"x": 411,
						"y": 195
					},
					"field-4-3": {
						"content": "Guitarra",
						"checkbox": true,
						"x": 464,
						"y": 195
					},
					"field-4-4": {
						"content": "Piano",
						"checkbox": true,
						"x": 534,
						"y": 195
					}
				}
			},
			"field-4-5": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 377,
				"y": 266,
				"width": 230,
				"lineGap": 4,
				"max": 27,
				"required": false
			},
			"field-5": {
				"radio": true,
				"content": "5. Un día espero ser como este personaje bíblico",
				"options": {
					"field-5-1": {
						"content": "Ester",
						"checkbox": true,
						"x": 335,
						"y": 400
					},
					"field-5-2": {
						"content": "Daniel",
						"checkbox": true,
						"x": 408,
						"y": 400
					},
					"field-5-3": {
						"content": "Jesús",
						"checkbox": true,
						"x": 485,
						"y": 400
					},
					"field-5-4": {
						"content": "Sansón",
						"checkbox": true,
						"x": 335,
						"y": 477
					},
					"field-5-5": {
						"content": "Deborah",
						"checkbox": true,
						"x": 465,
						"y": 431
					}
				}
			},
			"field-5-6": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 425,
				"y": 491,
				"width": 230,
				"lineGap": 4,
				"max": 18,
				"required": false
			},
			"fecha": {
				"x": 240,
				"y": 167,
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
				"content": "Un mensaje a mi patrocinador",
				"x": 40,
				"y": 57,
				"width": 520,
				"lineGap": 4,
				"max": 475
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
			"field-7": {
				"special_radio": true,
				"options": {
					"field-7-1": {
						"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
						"x": 37,
						"y": 763
					},
					"field-7-2": {
						"content": "Esta carta está escrita por el niño",
						"x": 37,
						"y": 775
					}
				}
			}
		}
	},
	"extras": {
		"title": "Mi esperanza para el futuro",
		"copy": []
	}
}; 

 module.exports = config;