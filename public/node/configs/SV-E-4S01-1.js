const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"field-1": {
					"textarea": true,
					"content": "1. Escribe algo especial o agradecimiento (Colocar el nombre correcto del patrocinador en el saludo) - Escribir mínimo 1200 caracteres",
					"x": 45,
					"y": 206,
					"width": 500,
					"lineGap": 7,
					"min": 1200,
					"max": 1700
				},
				"field-2": {
                    "especial_radio": true,
                    "options": {
                        "Esta carta esta escrita por el participante ": {
                            "content": "Carta escrita por el participante",
                            "x": 45,
                            "y": 720
                        },
                        "Esta carta está escrita en tercera persona por ": {
                            "content": "Carta escrita en tercera persona por (Escribe nombre sin apellido y el cargo o parentesco de quién escribe la carta)",
                            "x": 45,
                            "y": 720
                        },
                    }
                },
                "field-3": {
                    "input": true,
                    "max": 31,
                    "required":false
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
					"content": "2. Adjunta un dibujo elaborado por el participante (no colocar imágenes de internet)",
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
