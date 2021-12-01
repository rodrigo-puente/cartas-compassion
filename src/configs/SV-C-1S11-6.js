const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"input": true,
				"content": "1. Cuántos centimetros de altura tengo",
				"x": 237,
				"y": 211,
				"width": 188,
				"lineGap": 0,
				"max": 4
			},
			"field-1-copy": {
				"x": 220,
				"y": 236,
				"width": 188,
				"lineGap": 4,
				"max": 6
			},
			"field-2": {
				"input": true,
				"content": "2. Cuántos kilogramos peso",
				"x": 233,
				"y": 278,
				"width": 258,
				"lineGap": 6,
				"max": 5
			},
			"field-2-copy": {
				"x": 234,
				"y": 303,
				"width": 188,
				"lineGap": 4,
				"max": 7
			},
			"field-3": {
				"input": true,
				"content": "3. Cuántos años de edad tengo ahora",
				"x": 237,
				"y": 344,
				"width": 258,
				"lineGap": 6,
				"max": 2
			},
			"field-3-copy": {
				"x": 219,
				"y": 370,
				"width": 188,
				"lineGap": 4,
				"max": 3
			},
			"field-4": {
				"is_checkbox": true,
				"content": "4. Estas son algunas de las cosas que puedo hacer",
				"options": {
					"field-4-1": {
						"content": "Caminar"
					},
					"field-4-2": {
						"content": "Correr"
					},
					"field-4-3": {
						"content": "Saltar"
					},
					"field-4-4": {
						"content": "Tirar una pelota"
					}
				}
			},
			"field-4-1": {
				"checkbox": true,
				"x": 200,
				"y": 473
			},
			"field-4-2": {
				"checkbox": true,
				"x": 200,
				"y": 494
			},
			"field-4-3": {
				"checkbox": true,
				"x": 200,
				"y": 516
			},
			"field-4-4": {
				"checkbox": true,
				"x": 200,
				"y": 538
			},
			"field-5": {
				"input": true,
				"content": "5. Mis peticiones de oración son",
				"x": 407,
				"y": 246,
				"width": 159,
				"lineGap": 8,
				"max": 215
			},
			"fecha": {
				"x": 470,
				"y": 168,
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
				"content": "6. Un mensaje a mi patrocinador",
				"x": 50,
				"y": 57,
				"width": 490,
				"lineGap": 4,
				"max": 460
			},
			"img": {
				"content": "7. Adjunta un dibujo",
				"image": true,
				"x": 100,
				"y": 255,
				"config": {
					"fit": [
						400,
						200
					],
					"align": "center"
				}
			},
			"field-7": {
				"input": true,
				"content": "Nombre y parentesco con quien escribe la carta",
				"x": 186,
				"y": 770,
				"width": 330,
				"lineGap": 2,
				"max": 50
			}
		}
	},
	"extras": {
		"title": "Acerca de mí",
		"copy": [
			"field-1",
			"field-2",
			"field-3"
		]
	}
}; 

 module.exports = config;