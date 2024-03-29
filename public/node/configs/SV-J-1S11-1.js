// TO-DO: review this
const config = {
	"pages": [
		{
			"bg": "1.jpg",
			"items": {
				"field-1": {
					"radio": true,
					"content": "1. La zona en la que vivo es",
					"options": {
						"field-1-1": {
							"content": "En una ciudad",
							"checkbox": true,
							"x": 72,
							"y": 427
						},
						"field-1-2": {
							"content": "En la costa",
							"checkbox": true,
							"x": 146,
							"y": 427
						},
						"field-1-3": {
							"content": "En las tierras altas",
							"checkbox": true,
							"x": 230,
							"y": 427
						}
					}
				},
				"field-2": {
					"select": true,
					"content": "2. Selecciona el departamento donde vives",
					"x": 350,
					"y": 460,
					"width": 490,
					"lineGap": 11,
					"options": {
						"Ahuachapán": {
							"x": 345,
							"y": 400
						},
						"Cabañas": {
							"x": 450,
							"y": 400
						},
						"Chalatenango": {
							"x": 411,
							"y": 368
						},
						"Cuscatlán": {
							"x": 425,
							"y": 400
						},
						"La Libertad": {
							"x": 390,
							"y": 420
						},
						"La Paz": {
							"x": 431,
							"y": 435
						},
						"La Unión": {
							"x": 525,
							"y": 435
						},
						"Morazán": {
							"x": 510,
							"y": 415
						},
						"Santa Ana": {
							"x": 376,
							"y": 383
						},
						"San Miguel": {
							"x": 500,
							"y": 440
						},
						"San Salvador": {
							"x": 411,
							"y": 411
						},
						"San Vicente": {
							"x": 450,
							"y": 420
						},
						"Sonsonate": {
							"x": 366,
							"y": 420
						},
						"Usulután": {
							"x": 470,
							"y": 440
						}
					}
				},
				"field-3": {
					"input": true,
					"content": "3. ¿Cuántas personas viven en mi casa?",
					"x": 79,
					"y": 513,
					"width": 490,
					"lineGap": 7,
					"max": 2
				},
				"field-3-copy": {
					"x": 101,
					"y": 524,
					"width": 490,
					"lineGap": 11,
					"max": 2
				},
				"field-3-1": {
					"repeater": true,
					"content": "¿Quiénes son esas personas y qué relación tienen contigo?",
					"times": 7,
					"prefix": "field-3-",
					"fields": [
						{
							"content": "Nombre sin apellido",
							"max": 18,
							"sufix": "-A"
						},
						{
							"content": "Relación",
							"max": 12,
							"sufix": "-B"
						}
					]
				},
				"field-3-1-A": {
					"x": 60,
					"y": 565,
					"width": 220,
					"lineGap": 11,
					"max": 20
				},
				"field-3-1-B": {
					"x": 195,
					"y": 565,
					"width": 220,
					"lineGap": 11,
					"max": 15
				},
				"field-3-2-A": {
					"x": 60,
					"y": 583,
					"width": 220,
					"lineGap": 11,
					"max": 20
				},
				"field-3-2-B": {
					"x": 195,
					"y": 583,
					"width": 220,
					"lineGap": 11,
					"max": 15
				},
				"field-3-3-A": {
					"x": 60,
					"y": 600,
					"width": 220,
					"lineGap": 11,
					"max": 20
				},
				"field-3-3-B": {
					"x": 195,
					"y": 600,
					"width": 220,
					"lineGap": 11,
					"max": 15
				},
				"field-3-4-A": {
					"x": 60,
					"y": 619,
					"width": 220,
					"lineGap": 11,
					"max": 20
				},
				"field-3-4-B": {
					"x": 195,
					"y": 619,
					"width": 220,
					"lineGap": 11,
					"max": 15
				},
				"field-3-5-A": {
					"x": 60,
					"y": 638,
					"width": 220,
					"lineGap": 11,
					"max": 20
				},
				"field-3-5-B": {
					"x": 195,
					"y": 638,
					"width": 220,
					"lineGap": 11,
					"max": 15
				},
				"field-3-6-A": {
					"x": 60,
					"y": 657,
					"width": 220,
					"lineGap": 11,
					"max": 20
				},
				"field-3-6-B": {
					"x": 195,
					"y": 657,
					"width": 220,
					"lineGap": 11,
					"max": 15
				},
				"field-3-7-A": {
					"x": 60,
					"y": 676,
					"width": 220,
					"lineGap": 11,
					"max": 20
				},
				"field-3-7-B": {
					"x": 195,
					"y": 676,
					"width": 220,
					"lineGap": 11,
					"max": 15
				},
				"field-6": {
					"input": true,
					"content": "Si la carta fue escrita en tercera persona escribir nombre y cargo, sino solo escribir el nombre del participante",
					"x": 370,
					"y": 502,
					"width": 220,
					"lineGap": 7,
					"max": 20
				}
			}
		},
		{
			"bg": "2.jpg",
			"items": {
				"field-4": {
					"textarea": true,
					"content": "4. ¿Cuando crezca, quiero ser?",
					"cols": "col-sm-12 col-md-6",
					"x": 60,
					"y": 62,
					"width": 210,
					"lineGap": 2,
					"max": 180
				},
				"field-5": {
					"textarea": true,
					"content": "5. Una pregunta que tengo para ti",
					"cols": "col-sm-12 col-md-6",
					"x": 335,
					"y": 62,
					"width": 210,
					"lineGap": 2,
					"max": 180
				},
				"img": {
					"content": "6. Adjunta un dibujo elaborado por el participante (no colocar imágenes de internet)",
					"image": true,
					"x": 85,
					"y": 300,
					"config": {
						"fit": [
							400,
							200
						],
						"align": "center"
					}
				}
			}
		}
	],
	"extras": {
		"skipHeader": true,
		"title": "Mi primera carta a mi patrocinador",
		"copy": [
			"field-3"
		]
	}
}; 

 module.exports = config;