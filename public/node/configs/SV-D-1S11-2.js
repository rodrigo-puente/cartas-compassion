const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"input": true,
				"content": "1. La persona de las que más aprendo de Dios es",
				"x": 50,
				"y": 242,
				"width": 220,
				"lineGap": 7,
				"max": 32
			},
			"field-2": {
				"textarea": true,
				"cols": "col-sm-12 col-md-6",
				"content": "2. En mi proyecto las cosas que estoy aprendiendo sobre Dios son",
				"x": 50,
				"y": 310,
				"width": 220,
				"lineGap": 7,
				"max": 64
			},
			"field-3": {
				"textarea": true,
				"cols": "col-sm-12 col-md-6",
				"content": "3. En mi proyecto las cosas que estoy aprendiendo sobre la Biblia son",
				"x": 50,
				"y": 400,
				"width": 220,
				"lineGap": 7,
				"max": 57
			},
			"field-4": {
				"textarea": true,
				"content": "4. Lo que más me ha gustado aprender sobre Jesús es",
				"cols": "col-sm-12 col-md-6",
				"x": 50,
				"y": 490,
				"width": 220,
				"lineGap": 7,
				"max": 57
			},
			"field-5": {
				"textarea": true,
				"content": "5. Mi canción favorita que canto en el proyecto es",
				"cols": "col-sm-12 col-md-6",
				"x": 80,
				"y": 565,
				"width": 190,
				"lineGap": 7,
				"max": 72
			},
			"field-6": {
				"textarea": true,
				"content": "6. Cuando le pido a Jesús, yo oro por",
				"cols": "col-sm-12 col-md-6",
				"x": 125,
				"y": 662,
				"width": 145,
				"lineGap": 7,
				"max": 75
			},
			"field-7": {
				"textarea": true,
				"content": "7. Mi historia favorita de la Biblia es",
				"cols": "col-sm-12 col-md-6",
				"x": 335,
				"y": 265,
				"width": 210,
				"lineGap": 7,
				"max": 75
			},
			"field-8": {
				"textarea": true,
				"content": "8. Mi versículo favorito de la Biblia es",
				"x": 335,
				"y": 363,
				"width": 210,
				"lineGap": 7,
				"max": 104
			},
			"fecha": {
				"x": 370,
				"y": 137,
				"width": 220,
				"lineGap": 11
			}
		}
	},
	"page2": {
		"bg": "2.jpg",
		"items": {
			"field-9": {
				"textarea": true,
				"content": "9. Un mensaje a mi patrocinador",
				"x": 40,
				"y": 57,
				"width": 520,
				"lineGap": 4,
				"max": 500
			},
			"img": {
				"content": "10. Adjunta un dibujo",
				"image": true,
				"x": 120,
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
						"x": 40,
						"y": 765
					},
					"field-10-2": {
						"content": "Esta carta está escrita por el niño",
						"x": 40,
						"y": 778
					}
				}
			}
		}
	},
	"extras": {
		"title": "Mi aprendizaje cristiano",
		"copy": []
	}
}; 

 module.exports = config;