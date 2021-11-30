const config = {
	"page1": {
		"bg": "1.jpg",
		"items": {
			"code": {
				"input": true,
				"content": "Código del beneficiario (11 dígitos)",
				"x": 40,
				"y": 82,
				"width": 490,
				"lineGap": 4,
				"characterSpacing": 8,
				"max": 7
			},
			"field-1": {
				"input": true,
				"content": "Persona que escribe (si no fue el niño/niña)",
				"x": 270,
				"y": 259,
				"width": 490,
				"lineGap": 7,
				"max": 32
			},
			"field-2": {
				"input": true,
				"content": "Su relación con el niño/niña",
				"x": 300,
				"y": 278,
				"width": 490,
				"lineGap": 7,
				"max": 25,
				"required": false
			},
			"field-3": {
				"textarea": true,
				"content": "Mensaje de agradecimiento",
				"x": 65,
				"y": 332,
				"width": 490,
				"lineGap": 3,
				"max": 165
			},
			"field-4": {
				"textarea": true,
				"content": "Razón de la salida",
				"x": 65,
				"y": 417,
				"width": 490,
				"lineGap": 3,
				"max": 165
			},
			"field-5": {
				"textarea": true,
				"content": "¿Qué beneficios recibió en el proyecto?",
				"x": 65,
				"y": 507,
				"width": 490,
				"lineGap": 3,
				"max": 165
			},
			"field-6": {
				"textarea": true,
				"content": "Te invitamos a orar por tu niño para",
				"x": 65,
				"y": 597,
				"width": 490,
				"lineGap": 3,
				"max": 165
			},
			"field-7": {
				"textarea": true,
				"content": "Saludo final al patrocinador",
				"x": 65,
				"y": 687,
				"width": 490,
				"lineGap": 3,
				"max": 165
			},
			"fecha": {
				"x": 112,
				"y": 218,
				"width": 220,
				"lineGap": 11
			}
		}
	},
	"page2": {
		"bg": "2.jpg",
		"items": {}
	},
	"extras": {
		"title": "Carta final a mi patrocinador",
		"copy": []
	}
}; 

 module.exports = config;