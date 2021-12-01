const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"label": {
				"is_label": true,
				"content": "1. Escribe 2 cosas principales que aprendes de cada una de estas áreas"
			},
			"field-1-1": {
				"input": true,
				"content": "En mi proyecto, sobre al área socio-emocional yo aprendo",
				"x": 205,
				"y": 216,
				"width": 400,
				"lineGap": 7,
				"max": 53
			},
			"field-1-2": {
				"input": true,
				"content": "En mi proyecto, sobre al área espiritual yo aprendo",
				"x": 166,
				"y": 232,
				"width": 400,
				"lineGap": 7,
				"max": 57
			},
			"field-1-3": {
				"input": true,
				"content": "En mi proyecto, sobre al área cognitiva yo aprendo",
				"x": 170,
				"y": 247,
				"width": 400,
				"lineGap": 7,
				"max": 57
			},
			"field-1-4": {
				"input": true,
				"content": "En mi proyecto, sobre al área física yo aprendo",
				"x": 148,
				"y": 262,
				"width": 400,
				"lineGap": 7,
				"max": 60
			},
			"field-2": {
				"is_checkbox": true,
				"content": "2. ¿Qué actitudes has aprendido al ser un niño amable?",
				"options": {
					"field-2-1": {
						"content": "Ayudo a las personas adultas cuando llevan varias cosas al mismo tiempo"
					},
					"field-2-2": {
						"content": "Agradezco cuando alguien me regala algo"
					},
					"field-2-3": {
						"content": "Ayudo a recoger las cosas que se caen"
					},
					"field-2-4": {
						"content": "Comparto mis juguetes con otras personas"
					},
					"field-2-5": {
						"content": "Saludo a las personas cuando las veo"
					}
				}
			},
			"field-2-1": {
				"checkbox": true,
				"x": 270,
				"y": 319
			},
			"field-2-2": {
				"checkbox": true,
				"x": 270,
				"y": 346
			},
			"field-2-3": {
				"checkbox": true,
				"x": 270,
				"y": 372
			},
			"field-2-4": {
				"checkbox": true,
				"x": 270,
				"y": 392
			},
			"field-2-5": {
				"checkbox": true,
				"x": 270,
				"y": 411
			},
			"field-3": {
				"textarea": true,
				"content": "3. Lo que más me gusta aprender en mi proyecto es",
				"x": 288,
				"y": 436,
				"width": 190,
				"lineGap": -3.2,
				"max": 102
			},
			"field-4": {
				"is_checkbox": true,
				"content": "4. Marca hasta 3 cosas que debes hacer para cuidar tu cuerpo",
				"options": {
					"field-4-1": {
						"content": "Dejarme crecer las uñas"
					},
					"field-4-2": {
						"content": "Debo bañarme todos los días"
					},
					"field-4-3": {
						"content": "Puedo pasar muchos días sin lavarme el cabello"
					},
					"field-4-4": {
						"content": "Debo limpiar mis oídos"
					},
					"field-4-5": {
						"content": "Lavarme los dientes"
					}
				}
			},
			"field-4-1": {
				"checkbox": true,
				"x": 46,
				"y": 538
			},
			"field-4-2": {
				"checkbox": true,
				"x": 125,
				"y": 568
			},
			"field-4-3": {
				"checkbox": true,
				"x": 46,
				"y": 598
			},
			"field-4-4": {
				"checkbox": true,
				"x": 166,
				"y": 629
			},
			"field-4-5": {
				"checkbox": true,
				"x": 46,
				"y": 651
			},
			"label-2": {
				"is_label": true,
				"content": "5. Escribe qué te ha enseñado el proyecto sobre"
			},
			"field-5-1": {
				"input": true,
				"content": "Jesús",
				"x": 91,
				"y": 709,
				"width": 250,
				"lineGap": 7,
				"max": 27
			},
			"field-5-2": {
				"input": true,
				"content": "La iglesia",
				"x": 100,
				"y": 726,
				"width": 250,
				"lineGap": 7,
				"max": 27
			},
			"field-5-3": {
				"input": true,
				"content": "La familia",
				"x": 100,
				"y": 742,
				"width": 250,
				"lineGap": 7,
				"max": 27
			},
			"fecha": {
				"x": 350,
				"y": 160,
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
				"max": 482
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
		"title": "Mi aprendizaje en el proyecto",
		"copy": []
	}
}; 

 module.exports = config;