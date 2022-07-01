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
                    "max": 1650
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
                            "content": "Carta escrita en tercera persona por",
                            "x": 45,
                            "y": 720
                        },
                    }
                },
                "field-3": {
                    "input": true,
                    "content": "Nombre sin apellidos y cargo o parentesco",
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
