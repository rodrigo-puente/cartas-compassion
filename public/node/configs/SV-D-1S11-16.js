const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"is_checkbox": true,
				"content": "1. Mi comida favorita es",
				"options": {
					"field-1-1": {
						"content": "Frutas"
					},
					"field-1-2": {
						"content": "Vegetales"
					},
					"field-1-3": {
						"content": "Carnes"
					},
					"field-1-4": {
						"content": "Sopas"
					},
					"field-1-5": {
						"content": "Pollo"
					},
					"field-1-6": {
						"content": "Frijoles"
					}
				}
			},
			"field-1-1": {
				"checkbox": true,
				"x": 317,
				"y": 208
			},
			"field-1-2": {
				"checkbox": true,
				"x": 420,
				"y": 209
			},
			"field-1-3": {
				"checkbox": true,
				"x": 502,
				"y": 223
			},
			"field-1-4": {
				"checkbox": true,
				"x": 81,
				"y": 252
			},
			"field-1-5": {
				"checkbox": true,
				"x": 198,
				"y": 252
			},
			"field-1-6": {
				"checkbox": true,
				"x": 317,
				"y": 250
			},
			"field-1-7": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 445,
				"y": 257,
				"width": 500,
				"lineGap": 4,
				"max": 14,
				"required": false
			},
			"field-2": {
				"is_checkbox": true,
				"content": "2. Mi deporte favorito es",
				"options": {
					"field-2-1": {
						"content": "Baloncesto"
					},
					"field-2-2": {
						"content": "Baseball"
					},
					"field-2-3": {
						"content": "Natación"
					},
					"field-2-4": {
						"content": "Futbol"
					},
					"field-2-5": {
						"content": "Voleibol"
					}
				}
			},
			"field-2-1": {
				"checkbox": true,
				"x": 51,
				"y": 391
			},
			"field-2-2": {
				"checkbox": true,
				"x": 136,
				"y": 391
			},
			"field-2-3": {
				"checkbox": true,
				"x": 227,
				"y": 378
			},
			"field-2-4": {
				"checkbox": true,
				"x": 96,
				"y": 480
			},
			"field-2-5": {
				"checkbox": true,
				"x": 193,
				"y": 471
			},
			"field-2-6": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 115,
				"y": 500,
				"width": 500,
				"lineGap": 4,
				"max": 14,
				"required": false
			},
			"field-3-1": {
				"textarea": true,
				"content": "3. Mis versículos favoritos del Antiguo testamento son",
				"x": 55,
				"y": 592,
				"width": 235,
				"lineGap": 2,
				"max": 100
			},
			"field-3-2": {
				"textarea": true,
				"content": "3. Mis versículos favoritos del Nuevo testamento son",
				"x": 55,
				"y": 679,
				"width": 185,
				"lineGap": 2,
				"max": 86
			},
			"field-4": {
				"is_checkbox": true,
				"content": "4. Mis animales favoritos son",
				"options": {
					"field-4-1": {
						"content": "Vaca"
					},
					"field-4-2": {
						"content": "Caballo"
					},
					"field-4-3": {
						"content": "Pollo"
					},
					"field-4-4": {
						"content": "Perro"
					},
					"field-4-5": {
						"content": "Gato"
					}
				}
			},
			"field-4-1": {
				"checkbox": true,
				"x": 344,
				"y": 390
			},
			"field-4-2": {
				"checkbox": true,
				"x": 410,
				"y": 389
			},
			"field-4-3": {
				"checkbox": true,
				"x": 490,
				"y": 389
			},
			"field-4-4": {
				"checkbox": true,
				"x": 388,
				"y": 465
			},
			"field-4-5": {
				"checkbox": true,
				"x": 462,
				"y": 465
			},
			"field-4-6": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 400,
				"y": 480,
				"width": 200,
				"lineGap": 4,
				"max": 14,
				"required": false
			},
			"fecha": {
				"x": 445,
				"y": 145,
				"width": 220,
				"lineGap": 11
			}
		}
	},
	"page2": {
		"bg": "2.jpg",
		"items": {
			"field-5": {
				"textarea": true,
				"content": "5. Un mensaje a mi patrocinador",
				"x": 50,
				"y": 59,
				"width": 500,
				"lineGap": 4,
				"max": 460
			},
			"img": {
				"content": "6. Adjunta un dibujo",
				"image": true,
				"x": 120,
				"y": 260,
				"config": {
					"fit": [
						400,
						200
					],
					"align": "center"
				}
			},
			"field-6": {
				"special_radio": true,
				"options": {
					"field-6-1": {
						"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
						"x": 36,
						"y": 765
					},
					"field-6-2": {
						"content": "Esta carta está escrita por el niño",
						"x": 36,
						"y": 778
					}
				}
			}
		}
	},
	"extras": {
		"title": "Mis favoritos",
		"copy": []
	}
}; 

 module.exports = config;