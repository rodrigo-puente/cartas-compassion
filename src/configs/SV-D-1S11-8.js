const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"is_checkbox": true,
				"content": "Algunos de mis pasatiempos son (elige 2)",
				"options": {
					"field-1-1": {
						"content": "Saltar cuerda"
					},
					"field-1-2": {
						"content": "Practicar deportes"
					},
					"field-1-3": {
						"content": "Jugar chibolas"
					},
					"field-1-4": {
						"content": "Jugar con carritos"
					},
					"field-1-5": {
						"content": "Jugar con muñecas"
					}
				}
			},
			"field-1-1": {
				"checkbox": true,
				"x": 170,
				"y": 282
			},
			"field-1-2": {
				"checkbox": true,
				"x": 245,
				"y": 282
			},
			"field-1-3": {
				"checkbox": true,
				"x": 340,
				"y": 282
			},
			"field-1-4": {
				"checkbox": true,
				"x": 430,
				"y": 282
			},
			"field-1-5": {
				"checkbox": true,
				"x": 508,
				"y": 282
			},
			"field-2-1": {
				"input": true,
				"content": "Un pasatiempo que me gustaría empezar a hacer algún día es",
				"x": 300,
				"y": 297,
				"width": 290,
				"lineGap": 7,
				"max": 37
			},
			"field-2-2": {
				"input": true,
				"content": "Mi pasatiempo favorito es",
				"x": 250,
				"y": 329,
				"width": 310,
				"lineGap": 7,
				"max": 46
			},
			"field-2-3": {
				"input": true,
				"content": "Me gustaría compartir mis pasatiempos con",
				"x": 372,
				"y": 350,
				"width": 220,
				"lineGap": 7,
				"max": 24
			},
			"field-2-4": {
				"input": true,
				"content": "Lo que más me gusta hacer con mi mascota es",
				"x": 385,
				"y": 371,
				"width": 220,
				"lineGap": 7,
				"max": 23,
				"required": false
			},
			"field-3": {
				"is_checkbox": true,
				"content": "Cuáles de estas mascotas tienes en tu casa",
				"options": {
					"field-3-1": {
						"content": "Perro"
					},
					"field-3-2": {
						"content": "Perico"
					},
					"field-3-3": {
						"content": "Pájaro"
					},
					"field-3-4": {
						"content": "Pollo"
					},
					"field-3-5": {
						"content": "Gato"
					}
				}
			},
			"field-3-1": {
				"checkbox": true,
				"x": 63,
				"y": 489
			},
			"field-3-2": {
				"checkbox": true,
				"x": 118,
				"y": 578
			},
			"field-3-3": {
				"checkbox": true,
				"x": 210,
				"y": 577
			},
			"field-3-4": {
				"checkbox": true,
				"x": 330,
				"y": 430
			},
			"field-3-5": {
				"checkbox": true,
				"x": 420,
				"y": 460
			},
			"field-3-6": {
				"input": true,
				"content": "Otro",
				"cols": "col-sm-12 col-md-4",
				"x": 118,
				"y": 648,
				"width": 214,
				"lineGap": 7,
				"max": 30,
				"required": false
			},
			"field-4": {
				"input": true,
				"content": "¿Hay algo especial de tu mascota o pasatiempo que quisieras que tu patrocinador conozca?",
				"x": 57,
				"y": 742,
				"width": 250,
				"lineGap": 7,
				"max": 37
			},
			"fecha": {
				"x": 455,
				"y": 137,
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
				"content": "Un mensaje a mi patrocinador",
				"x": 40,
				"y": 57,
				"width": 520,
				"lineGap": 4,
				"max": 480
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
			"field-6": {
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
		"title": "Mis pasatiempos y mascotas",
		"copy": []
	}
}; 

 module.exports = config;