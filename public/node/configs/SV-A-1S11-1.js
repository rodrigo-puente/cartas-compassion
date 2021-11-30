const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"textarea": true,
				"content": "1. Los nombres de quienes me cuidan son",
				"x": 50,
				"y": 227,
				"width": 185,
				"lineGap": 6,
				"max": 100
			},
			"field-2-1": {
				"input": true,
				"content": "2. Cuántos hermanos tengo",
				"cols": "col-sm-12 col-md-6",
				"x": 88,
				"y": 333,
				"width": 200,
				"lineGap": 6,
				"max": 1
			},
			"field-2-2": {
				"input": true,
				"content": "2. Cuántas hermanos tengo",
				"cols": "col-sm-12 col-md-6",
				"x": 160,
				"y": 333,
				"width": 200,
				"lineGap": 6,
				"max": 1
			},
			"field-2-1-copy": {
				"x": 85,
				"y": 348,
				"width": 200,
				"lineGap": 10,
				"max": 2
			},
			"field-2-2-copy": {
				"x": 146,
				"y": 348,
				"width": 200,
				"lineGap": 10,
				"max": 2
			},
			"field-3": {
				"is_checkbox": true,
				"content": "3. Algunas de las cosas que puedo hacer son",
				"options": {
					"field-3-1": {
						"content": "Caminar"
					},
					"field-3-2": {
						"content": "Correr"
					},
					"field-3-3": {
						"content": "Saltar"
					},
					"field-3-4": {
						"content": "Escalar"
					}
				}
			},
			"field-3-1": {
				"checkbox": true,
				"x": 69,
				"y": 427
			},
			"field-3-2": {
				"checkbox": true,
				"x": 69,
				"y": 448
			},
			"field-3-3": {
				"checkbox": true,
				"x": 69,
				"y": 469
			},
			"field-3-4": {
				"checkbox": true,
				"x": 69,
				"y": 490
			},
			"field-4": {
				"textarea": true,
				"content": "4. Mi comida favorita es",
				"x": 50,
				"y": 562,
				"width": 230,
				"lineGap": 6,
				"max": 144
			},
			"field-5-1": {
				"textarea": true,
				"content": "5. Mis peticiones de oración son",
				"cols": "col-sm-12 col-md-6",
				"x": 315,
				"y": 225,
				"width": 230,
				"lineGap": 6,
				"max": 180
			},
			"field-5-2": {
				"textarea": true,
				"content": "Continua con tu petición de oración",
				"cols": "col-sm-12 col-md-6",
				"x": 418,
				"y": 350,
				"width": 125,
				"lineGap": 6,
				"max": 100
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
				"image": true,
				"content": "7. Mi dibujo",
				"x": 120,
				"y": 250,
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
				"content": "Nombre y parentesco de quien escribe la carta",
				"x": 188,
				"y": 770,
				"width": 320,
				"lineGap": 2,
				"max": 14
			}
		}
	},
	"extras": {
		"copy": [
			"field-2-1",
			"field-2-2"
		],
		"title": "Mi primera carta"
	}
}; 

 module.exports = config;