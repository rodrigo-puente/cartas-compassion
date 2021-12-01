const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"radio": true,
				"content": "1. Yo duermo en",
				"options": {
					"field-1-1": {
						"content": "Catre",
						"checkbox": true,
						"x": 86,
						"y": 286
					},
					"field-1-2": {
						"content": "Cama",
						"checkbox": true,
						"x": 198,
						"y": 293
					},
					"field-1-3": {
						"content": "Hamaca",
						"checkbox": true,
						"x": 59,
						"y": 381
					},
					"field-1-4": {
						"content": "Camarote",
						"checkbox": true,
						"x": 173,
						"y": 381
					}
				}
			},
			"field-1-5": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 114,
				"y": 400,
				"width": 214,
				"lineGap": 7,
				"max": 20,
				"required": false
			},
			"field-2": {
				"radio": true,
				"content": "2. Mi casa está construida de",
				"options": {
					"field-2-1": {
						"content": "Ladrillo",
						"checkbox": true,
						"x": 53,
						"y": 522
					},
					"field-2-2": {
						"content": "Concreto",
						"checkbox": true,
						"x": 127,
						"y": 522
					},
					"field-2-3": {
						"content": "Bambú",
						"checkbox": true,
						"x": 214,
						"y": 477
					},
					"field-2-4": {
						"content": "Madera",
						"checkbox": true,
						"x": 53,
						"y": 591
					},
					"field-2-5": {
						"content": "Lámina",
						"checkbox": true,
						"x": 132,
						"y": 591
					},
					"field-2-6": {
						"content": "Adobe",
						"checkbox": true,
						"x": 226,
						"y": 591
					}
				}
			},
			"field-3": {
				"radio": true,
				"content": "3. Nosotros obtenemos la luz por medio de",
				"options": {
					"field-3-1": {
						"content": "Candil",
						"checkbox": true,
						"x": 57,
						"y": 731
					},
					"field-3-2": {
						"content": "Candela",
						"checkbox": true,
						"x": 149,
						"y": 731
					},
					"field-3-3": {
						"content": "Foco",
						"checkbox": true,
						"x": 235,
						"y": 731
					}
				}
			},
			"field-3-4": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 106,
				"y": 749,
				"width": 214,
				"lineGap": 7,
				"max": 20,
				"required": false
			},
			"field-4": {
				"radio": true,
				"content": "4. Nosotros obtenemos el agua de",
				"options": {
					"field-4-1": {
						"content": "Chorro de la casa",
						"checkbox": true,
						"x": 376,
						"y": 230
					},
					"field-4-2": {
						"content": "Pozo",
						"checkbox": true,
						"x": 477,
						"y": 263
					},
					"field-4-3": {
						"content": "Río",
						"checkbox": true,
						"x": 416,
						"y": 311
					},
					"field-4-4": {
						"content": "Chorro de la comunidad",
						"checkbox": true,
						"x": 337,
						"y": 338
					},
					"field-4-5": {
						"content": "La lluvia",
						"checkbox": true,
						"x": 466,
						"y": 344
					}
				}
			},
			"field-4-6": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 389,
				"y": 367,
				"width": 214,
				"lineGap": 7,
				"max": 20,
				"required": false
			},
			"field-5": {
				"radio": true,
				"content": "5. Nosotros cocinamos con",
				"options": {
					"field-5-1": {
						"content": "Cocina eléctrica",
						"checkbox": true,
						"x": 374,
						"y": 436
					},
					"field-5-2": {
						"content": "Cocina de gas",
						"checkbox": true,
						"x": 462,
						"y": 414
					},
					"field-5-3": {
						"content": "Con leña",
						"checkbox": true,
						"x": 398,
						"y": 487
					}
				}
			},
			"fecha": {
				"x": 455,
				"y": 153,
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
				"content": "Mi dibujo",
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
					"field-6-1": {
						"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
						"x": 37,
						"y": 763
					},
					"field-6-2": {
						"content": "Esta carta está escrita por el niño",
						"x": 37,
						"y": 775
					}
				}
			}
		}
	},
	"extras": {
		"title": "Mi hogar",
		"copy": []
	}
}; 

 module.exports = config;