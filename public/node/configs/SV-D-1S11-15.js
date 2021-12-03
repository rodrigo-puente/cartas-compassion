const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"input": true,
				"content": "1. El nombre de mi comunidad es",
				"x": 50,
				"y": 220,
				"width": 240,
				"lineGap": 7,
				"max": 34,
				"required": true
			},
			"field-2": {
				"input": true,
				"content": "2. La población de mi comunidad es",
				"x": 50,
				"y": 277,
				"width": 260,
				"lineGap": 7,
				"max": 23,
				"required": true
			},
			"field-3": {
				"is_checkbox": true,
				"content": "3. En mi comunidad nos transportamos en",
				"options": {
					"field-3-1": {
						"content": "Bus"
					},
					"field-3-2": {
						"content": "Bicicleta"
					},
					"field-3-3": {
						"content": "Caminando"
					},
					"field-3-4": {
						"content": "Mototaxi"
					}
				}
			},
			"field-3-1": {
				"checkbox": true,
				"x": 285,
				"y": 320
			},
			"field-3-2": {
				"checkbox": true,
				"x": 377,
				"y": 337
			},
			"field-3-3": {
				"checkbox": true,
				"x": 427,
				"y": 365
			},
			"field-3-4": {
				"checkbox": true,
				"x": 422,
				"y": 450
			},
			"field-3-5": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 316,
				"y": 469,
				"width": 250,
				"lineGap": 7,
				"max": 31,
				"required": false
			},
			"field-4": {
				"is_checkbox": true,
				"content": "4. En mi comunidad la gente trabaja de",
				"options": {
					"field-4-1": {
						"content": "Costurera"
					},
					"field-4-2": {
						"content": "Vendedora"
					},
					"field-4-3": {
						"content": "Constructor"
					},
					"field-4-4": {
						"content": "Doméstica"
					},
					"field-4-5": {
						"content": "Tortillera"
					},
					"field-4-6": {
						"content": "Agricultor"
					}
				}
			},
			"field-4-1": {
				"checkbox": true,
				"x": 110,
				"y": 558
			},
			"field-4-2": {
				"checkbox": true,
				"x": 125,
				"y": 597
			},
			"field-4-3": {
				"checkbox": true,
				"x": 109,
				"y": 626
			},
			"field-4-4": {
				"checkbox": true,
				"x": 149,
				"y": 663
			},
			"field-4-5": {
				"checkbox": true,
				"x": 103,
				"y": 700
			},
			"field-4-6": {
				"checkbox": true,
				"x": 76,
				"y": 735
			},
			"field-5": {
				"input": true,
				"content": "5. Lo que más me gusta de mi comunidad es",
				"x": 309,
				"y": 221,
				"width": 240,
				"lineGap": 6,
				"max": 70,
				"required": true
			},
			"fecha": {
				"x": 390,
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
				"content": "Un mensaje a mi patrocinador",
				"x": 40,
				"y": 57,
				"width": 520,
				"lineGap": 4,
				"max": 505
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
		"title": "Mi comunidad",
		"copy": []
	}
}; 

 module.exports = config;