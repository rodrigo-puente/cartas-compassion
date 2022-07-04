const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"field-1": {
					"input": true,
					"content": "Fecha de ingreso de salida a Connect (día, mes, año)",
					"x": -300,
					"y":-300,
					"max": 35
				},
				"field-2": {
					"textarea": true,
					"content": "1. Un mensaje de agradecimiento a mi patrocinador",
					"x": 65,
					"y": 275,
					"width": 490,
					"lineGap": 7,
					"max": 273
				},
				"field-3": {
					"textarea": true,
					"content": "2. ¿Qué beneficios he recibido del proyecto?",
					"x": 65,
					"y": 381,
					"width": 490,
					"lineGap": 7,
					"max": 273
				},
				"field-4": {
					"textarea": true,
					"content": "3. Mis planes para el futuro",
					"x": 65,
					"y": 490,
					"width": 490,
					"lineGap": 7,
					"max": 273
				},
				"field-5": {
					"textarea": true,
					"content": "4. Mis peticiones de oración",
					"x": 65,
					"y": 597,
					"width": 490,
					"lineGap": 7,
					"max": 208
				},
				"field-6": {
					"textarea": true,
					"content": "5. Un saludo final para mi patrocinador",
					"x": 65,
					"y": 685,
					"width": 490,
					"lineGap": 7,
					"max": 208
				},
				"fecha": {
					"x": 112,
					"y": 215,
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
		"title": "Carta final a mi patrocinador",
		"copy": []
	}
}; 

 module.exports = config;