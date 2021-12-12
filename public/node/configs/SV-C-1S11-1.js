const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"field-1": {
					"textarea": true,
					"content": "1. Mis hermanos de mayor a menor edad son",
					"x": 53,
					"y": 227,
					"width": 210,
					"lineGap": 7,
					"max": 190
				},
				"field-2": {
					"radio": true,
					"content": "2. Mi familia vive en el área",
					"options": {
						"field-2-1": {
							"content": "Rural",
							"checkbox": true,
							"x": 83,
							"y": 438
						},
						"field-2-2": {
							"content": "Urbana",
							"checkbox": true,
							"x": 140,
							"y": 438
						}
					}
				},
				"field-3": {
					"input": true,
					"cols": "col-sm-12 col-md-6",
					"content": "3. Nosotros obtenemos agua de",
					"x": 160,
					"y": 547,
					"width": 150,
					"lineGap": 8,
					"max": 36
				},
				"field-4": {
					"input": true,
					"cols": "col-sm-12 col-md-6",
					"content": "4. Lo que más me gusta hacer con mi familia es:",
					"x": 60,
					"y": 678,
					"width": 230,
					"lineGap": 6,
					"max": 32
				},
				"field-5-1": {
					"textarea": true,
					"content": "5. Mis peticiones de oración para mi familia son",
					"x": 319,
					"y": 227,
					"width": 250,
					"lineGap": 7,
					"max": 100
				},
				"field-5-2": {
					"textarea": true,
					"content": "Sigue tu petición",
					"x": 410,
					"y": 292,
					"width": 140,
					"lineGap": 6,
					"max": 154
				},
				"fecha": {
					"x": 460,
					"y": 157,
					"width": 220,
					"lineGap": 11
				}
			}
		},
		{
			"bg": "2.jpg",
			"items": {
				"field-6": {
					"textarea": true,
					"content": "6. Un mensaje a mi patrocinador",
					"x": 50,
					"y": 58,
					"width": 490,
					"lineGap": 4,
					"max": 480
				},
				"img": {
					"content": "7. Adjunta un dibujo",
					"image": true,
					"x": 95,
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
					"x": 188,
					"y": 771,
					"width": 490,
					"lineGap": 4,
					"max": 36
				}
			}
		}
	],
	"extras": {
		"title": "Mi familia",
		"copy": []
	}
}; 

 module.exports = config;