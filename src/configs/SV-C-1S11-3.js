const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"field-1": {
					"input": true,
					"content": "1. Mi comida favorita es",
					"cols": "col-sm-12 col-md-6",
					"x": 60,
					"y": 237,
					"width": 200,
					"lineGap": 6,
					"max": 50
				},
				"field-2": {
					"input": true,
					"content": "2. Mi color favorito es",
					"cols": "col-sm-12 col-md-6",
					"x": 60,
					"y": 453,
					"width": 200,
					"lineGap": 6,
					"max": 50
				},
				"field-3": {
					"input": true,
					"content": "3. Mi amigo favorito es",
					"cols": "col-sm-12 col-md-6",
					"x": 110,
					"y": 599,
					"width": 160,
					"lineGap": 6,
					"max": 43
				},
				"field-4": {
					"input": true,
					"content": "4. Mi animal favorito es",
					"cols": "col-sm-12 col-md-6",
					"x": 310,
					"y": 257,
					"width": 115,
					"lineGap": 6,
					"max": 28
				},
				"field-5": {
					"input": true,
					"content": "5. Mi cuento favorito es",
					"x": 400,
					"y": 392,
					"width": 110,
					"lineGap": 6,
					"max": 37
				},
				"fecha": {
					"x": 440,
					"y": 152,
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
					"y": 57,
					"width": 490,
					"lineGap": 4,
					"max": 480
				},
				"img": {
					"content": "7. Adjunta un dibujo elaborado por el participante (no colocar imágenes de internet)",
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
					"content": "Nombre y parentesco con quien escribe la carta",
					"input": true,
					"x": 230,
					"y": 767,
					"width": 320,
					"lineGap": 2,
					"max": 14
				}
			}
		}
	],
	"extras": {
		"title": "Mis favoritos",
		"copy": []
	}
}; 

 module.exports = config;