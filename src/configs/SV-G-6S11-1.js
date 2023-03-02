const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"code": {
					"input": true,
					"content": "Código del participante (11 dígitos)",
					"x": 42,
					"y": 82,
					"width": 490,
					"lineGap": 4,
					"characterSpacing": 7,
					"max": 11
				},
				"field-1": {
					"textarea": true,
					"content": "1. Escribe un mensaje especial o agradecimiento",
					"x": 50,
					"y": 226,
					"width": 490,
					"lineGap": 7,
					"min": 1150,
					"max": 1200
				},
				"fecha": {
					"x": 450,
					"y": 204,
					"width": 220,
					"lineGap": 11
				}
			}
		},
		{
			"bg": "2.jpg",
			"items": {}
		}
	],
	"extras": {
		"title": "Compartiendo algo especial o agradecimiento",
		"copy": []
	}
}; 

 module.exports = config;