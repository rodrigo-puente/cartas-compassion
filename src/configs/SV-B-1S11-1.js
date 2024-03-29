const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"field-1": {
					"textarea": true,
					"content": "1. Mis padres o encargados son",
					"cols": "col-sm-12 col-md-6",
					"x": 50,
					"y": 241,
					"width": 165,
					"lineGap": 6,
					"max": 46
				},
				"field-2": {
					"textarea": true,
					"content": "2. Mi juego favorito",
					"cols": "col-sm-12 col-md-6",
					"x": 50,
					"y": 329,
					"width": 230,
					"lineGap": 6,
					"max": 57
				},
				"field-3": {
					"radio": true,
					"content": "3. El color de mi cabello es",
					"options": {
						"field-3-1": {
							"content": "Rubio",
							"checkbox": true,
							"x": 95,
							"y": 457
						},
						"field-3-2": {
							"content": "Café claro",
							"checkbox": true,
							"x": 125,
							"y": 457
						},
						"field-3-3": {
							"content": "Café medio",
							"checkbox": true,
							"x": 155,
							"y": 457
						},
						"field-3-4": {
							"content": "Café oscuro",
							"checkbox": true,
							"x": 185,
							"y": 457
						},
						"field-3-5": {
							"content": "Negro",
							"checkbox": true,
							"x": 215,
							"y": 457
						}
					}
				},
				"field-4-1": {
					"input": true,
					"cols": "col-sm-12 col-md-4",
					"content": "4. Mi día de nacimiento:",
					"x": 66,
					"y": 543,
					"width": 230,
					"lineGap": 6,
					"max": 2
				},
				"field-4-2": {
					"input": true,
					"cols": "col-sm-12 col-md-4",
					"content": "Mi mes de nacimiento",
					"x": 119,
					"y": 543,
					"width": 230,
					"lineGap": 6,
					"max": 2
				},
				"field-4-3": {
					"input": true,
					"cols": "col-sm-12 col-md-4",
					"content": "Mi año de nacimiento",
					"x": 168,
					"y": 543,
					"width": 230,
					"lineGap": 6,
					"max": 4
				},
				"field-5": {
					"textarea": true,
					"content": "5. Mis hermanos y hermanas son",
					"x": 50,
					"y": 631,
					"width": 230,
					"lineGap": 6,
					"max": 57
				},
				"field-6": {
					"textarea": true,
					"content": "6. Mis cosas favoritas",
					"x": 335,
					"y": 214,
					"width": 230,
					"lineGap": 6,
					"max": 57
				},
				"field-7": {
					"radio": true,
					"content": "7. Mi hogar se encuentra",
					"options": {
						"field-7-1": {
							"checkbox": true,
							"content": "Cerca del mar",
							"x": 358,
							"y": 310
						},
						"field-7-2": {
							"checkbox": true,
							"content": "En el campo",
							"x": 443,
							"y": 310
						},
						"field-7-3": {
							"checkbox": true,
							"content": "En la ciudad",
							"x": 534,
							"y": 310
						}
					}
				},
				"field-8": {
					"input": true,
					"cols": "col-sm-12 col-md-6",
					"content": "8. Mi comida favorita es",
					"x": 335,
					"y": 435,
					"width": 230,
					"lineGap": 6,
					"max": 32
				},
				"field-9": {
					"input": true,
					"cols": "col-sm-12 col-md-6",
					"content": "9. Mi color favorito es",
					"x": 335,
					"y": 492,
					"width": 230,
					"lineGap": 6,
					"max": 32
				}
			}
		},
		{
			"bg": "2.jpg",
			"items": {
				"field-10": {
					"textarea": true,
					"content": "10. Mensaje a mi patrocinador (Saludo y agradecimiento por el patrocinio, contarle lo qué quiere ser cuando sea grande, materia favorita (si aplica), historia bíblica favorita, petición de oración y una despedida)",
					"x": 50,
					"y": 58,
					"width": 490,
					"lineGap": 4,
					"max": 480
				},
				"img": {
					"content": "11. Adjunta un dibujo elaborado por el participante (no colocar imágenes de internet)",
					"image": true,
					"x": 120,
					"y": 290,
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
							"x": 50,
							"y": 203
						},
						"field-11-2": {
							"content": "Esta carta está escrita por el niño",
							"x": 50,
							"y": 215
						}
					}
				}
			}
		}
	],
	"extras": {
		"title": "Todo sobre mí",
		"copy": []
	}
}; 

 module.exports = config;