const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"input": true,
				"content": "1. Mi estatura es",
				"cols": "col-sm-12 col-md-6",
				"x": 60,
				"y": 252,
				"width": 235,
				"lineGap": 0,
				"max": 14
			},
			"field-2": {
				"input": true,
				"content": "2. Mi peso es",
				"cols": "col-sm-12 col-md-6",
				"x": 60,
				"y": 332,
				"width": 235,
				"lineGap": 0,
				"max": 14
			},
			"field-3": {
				"is_checkbox": true,
				"content": "3. Aquí hay más cosas de las que puedo hacer ahora",
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
						"content": "Tirar una pelota"
					},
					"field-3-5": {
						"content": "Dibujar"
					},
					"field-3-6": {
						"content": "Decir unas palabras"
					},
					"field-3-7": {
						"content": "Cantar"
					}
				}
			},
			"field-3-1": {
				"checkbox": true,
				"x": 65,
				"y": 504
			},
			"field-3-2": {
				"checkbox": true,
				"x": 65,
				"y": 527
			},
			"field-3-3": {
				"checkbox": true,
				"x": 65,
				"y": 548
			},
			"field-3-4": {
				"checkbox": true,
				"x": 65,
				"y": 572
			},
			"field-3-5": {
				"checkbox": true,
				"x": 65,
				"y": 594
			},
			"field-3-6": {
				"checkbox": true,
				"x": 65,
				"y": 615
			},
			"field-3-7": {
				"checkbox": true,
				"x": 65,
				"y": 638
			},
			"field-4": {
				"input": true,
				"cols": "col-sm-12 col-md-6",
				"content": "4. En la iglesia me gusta (escuchar historias bíblicas, jugar con amigos, jugar juegos)",
				"x": 377,
				"y": 337,
				"width": 175,
				"lineGap": 4,
				"max": 46
			},
			"field-5": {
				"input": true,
				"cols": "col-sm-12 col-md-6",
				"content": "5. Mi mejor amigo/amiga se llama",
				"x": 320,
				"y": 481,
				"width": 200,
				"lineGap": 2,
				"max": 25
			},
			"fecha": {
				"x": 450,
				"y": 173,
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
				"content": "Nombre y parentesco con quien escribe la carta",
				"x": 215,
				"y": 767,
				"width": 320,
				"lineGap": 2,
				"max": 32
			}
		}
	},
	"extras": {
		"title": "Estoy creciendo",
		"copy": []
	}
}; 

 module.exports = config;