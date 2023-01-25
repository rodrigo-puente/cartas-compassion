const config = {
	pages: [
		{
			"bg": "1.jpg",
			"items": {
				"label-1": {
					"is_label": true,
					"content": "Para niños en la escuela"
				},
				"field-1": {
					"input": true,
					"content": "1. En qué grado estoy",
					"x": 125,
					"y": 250,
					"width": 50,
					"lineGap": 7,
					"max": 7,
					"required": false
				},
				"field-2": {
					"input": true,
					"content": "2. El nombre de mi maestro en la escuela es",
					"x": 84,
					"y": 318,
					"width": 230,
					"lineGap": 7,
					"max": 29,
					"required": false
				},
				"field-3": {
					"input": true,
					"content": "3. Mi escuela está a cuántos minutos de mi casa",
					"x": 137,
					"y": 363,
					"width": 220,
					"lineGap": 7,
					"max": 4,
					"required": false
				},
				"field-3-copy": {
					"x": 110,
					"y": 382,
					"width": 200,
					"lineGap": 10,
					"max": 14
				},
				"label-2": {
					"is_label": true,
					"content": "Para niños que aún no están en la escuela"
				},
				"field-4": {
					"radio": true,
					"content": "4. Yo planeo empezar ir a la escuela cuando tenga",
					"options": {
						"field-4-1": {
							"content": "3 años",
							"checkbox": true,
							"x": 255,
							"y": 470
						},
						"field-4-2": {
							"content": "4 años",
							"checkbox": true,
							"x": 282,
							"y": 493
						},
						"field-4-3": {
							"content": "5 años",
							"checkbox": true,
							"x": 273,
							"y": 535
						},
						"field-4-4": {
							"content": "6 años",
							"checkbox": true,
							"x": 235,
							"y": 553
						}
					}
				},
				"field-5": {
					"input": true,
					"content": "5. Quiero ir a la escuela porque",
					"x": 47,
					"y": 613,
					"width": 240,
					"lineGap": 7,
					"max": 64,
					"required": false
				},
				"field-6": {
					"input": true,
					"content": "6. En la escuela quisiera aprender acerca de",
					"x": 47,
					"y": 684,
					"width": 220,
					"lineGap": 7,
					"max": 76,
					"required": false
				},
				"label-3": {
					"is_label": true,
					"content": "Para todos los niños"
				},
				"field-7": {
					"is_checkbox": true,
					"content": "7. Llego a la escuela en / Iré a mi escuela por medio de",
					"options": {
						"field-7-1": {
							"content": "Moto taxi"
						},
						"field-7-2": {
							"content": "Caminando"
						},
						"field-7-3": {
							"content": "Bicicleta"
						},
						"field-7-4": {
							"content": "Bus"
						}
					}
				},
				"field-7-1": {
					"checkbox": true,
					"x": 373,
					"y": 214
				},
				"field-7-2": {
					"checkbox": true,
					"x": 443,
					"y": 219
				},
				"field-7-3": {
					"checkbox": true,
					"x": 333,
					"y": 258
				},
				"field-7-4": {
					"checkbox": true,
					"x": 502,
					"y": 253
				},
				"field-7-5": {
					"input": true,
					"content": "Otro",
					"cols": "col-sm-12 col-md-4",
					"x": 395,
					"y": 293,
					"width": 500,
					"lineGap": 4,
					"max": 21,
					"required": false
				},
				"field-8": {
					"input": true,
					"content": "8. El uniforme de mi escuela es de color / El color que me gustaría tener de uniforme es",
					"x": 494,
					"y": 352,
					"width": 200,
					"lineGap": 4,
					"max": 7
				},
				"fecha": {
					"x": 100,
					"y": 180,
					"width": 220,
					"lineGap": 11
				}
			}
		},
		{
			"bg": "2.jpg",
			"items": {
				"field-9": {
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
				"field-10": {
					"special_radio": true,
					"options": {
						"field-10-1": {
							"content": "Esta carta está escrita en tercera persona ya que el niño no puede escribir",
							"x": 37,
							"y": 763
						},
						"field-10-2": {
							"content": "Esta carta está escrita por el niño",
							"x": 37,
							"y": 775
						}
					}
				}
			}
		}
	],
	"extras": {
		"title": "Mi escuela",
		"copy": [
			"field-3"
		]
	}
}; 

 module.exports = config;