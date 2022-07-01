const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"field-1": {
					"textarea": true,
					"content": "1. Escribe algo especial o agradecimiento",
					"x": 45,
					"y": 206,
					"width": 500,
					"lineGap": 7,
					"max": 1700
				},
				"field-2": {
					"input": true,
					"content": "Si la escritura de esta carta fue en tercera persona, coloca quien escribió la carta y cargo",
					"default": "La carta fue escrita por el niño",
					"x": 45,
					"y": 720,
					"width": 500,
					"lineGap": 7,
					"max": 60,
					"required": false
				},
				"fecha": {
					"x": 450,
					"y": 187,
					"width": 220,
					"lineGap": 11
				}
			}
		},
		{
			"bg": "2.jpg",
			"items": {
				"img": {
					"image": true,
					"content": "2. Adjunta un dibujo",
					"x": 100,
					"y": 460,
					"config": {
						"fit": [
							400,
							200
						],
						"align": "center"
					}
				},
			}
		}
	],
	"extras": {
		"title": "Compartiendo algo especial o agradecimiento",
		"copy": []
	}
}; 

 module.exports = config;
