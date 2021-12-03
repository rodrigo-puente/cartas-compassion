const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"field-1": {
				"input": true,
				"content": "1. Mi casa está hecha de (adobe, concreto, madera, lámina ...)",
				"cols": "col-sm-12 col-md-6",
				"x": 157,
				"y": 369,
				"width": 125,
				"lineGap": 6,
				"max": 18
			},
			"field-2": {
				"input": true,
				"content": "2. Mi casa está cerca de (rio, mar, montaña, ciudad ...)",
				"cols": "col-sm-12 col-md-6",
				"x": 160,
				"y": 486,
				"width": 130,
				"lineGap": 6,
				"max": 18
			},
			"field-3": {
				"input": true,
				"content": "3. Cuántas personas viven en mi casa",
				"cols": "col-sm-12 col-md-6",
				"x": 80,
				"y": 638,
				"width": 35,
				"lineGap": 6,
				"max": 1
			},
			"field-4": {
				"input": true,
				"content": "4. Cuántas casas vecinas hay cerca de mi casa (muchas, pocas, cero ...)",
				"cols": "col-sm-12 col-md-6",
				"x": 370,
				"y": 264,
				"width": 65,
				"lineGap": 6,
				"max": 4
			},
			"field-5": {
				"input": true,
				"content": "5. Mi comunidad se llama",
				"cols": "col-sm-12 col-md-6",
				"x": 330,
				"y": 461,
				"width": 240,
				"lineGap": 6,
				"max": 36
			},
			"fecha": {
				"x": 440,
				"y": 166,
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
				"x": 100,
				"y": 59,
				"width": 440,
				"lineGap": 4,
				"max": 480
			},
			"img": {
				"content": "7. Adjunta un dibujo",
				"image": true,
				"x": 130,
				"y": 260,
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
				"x": 185,
				"y": 772,
				"width": 490,
				"lineGap": 4,
				"max": 36
			}
		}
	},
	"extras": {
		"title": "Dónde vivo",
		"copy": []
	}
}; 

 module.exports = config;