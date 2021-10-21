import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { sendAsync, sendInsert, generatePDF } from '../../message-control/renderer';

function SVD1S1112Template({ id }) {
  const [data, setData] = useState({});
  const [link, setLink] = useState({
    url: "/",
    texto: "Regresar a cartas por realizar",
  });

  const [disabled, setDisabled] = useState(false);
  const [datos, setDatos] = useState({
    'field-1': '',
    'field-2': '',
    'field-3': '',
    'field-4': '',
    'field-5': '',
    'field-6': '',
    'field-7': '',
    'field-8': '',
  });

  useEffect(() => {
    async function getData() {
      const result = await sendAsync(`SELECT * FROM cartas WHERE id = ${id}`);
      setData(result[0]);
      if(result.length !== 0 && result[0].estado !== "Sin comenzar") {
        const newDatos = JSON.parse(result[0].formulario);
        setDatos(newDatos);
        setDisabled(true);
        setLink({
          url: '/realizadas',
          texto: 'Regresar a cartas realizadas'
        })

        Object.keys(newDatos).forEach((key) => {
          if (key ==='fecha') return;
          document.getElementById(key).value = newDatos[key];
        })
      }
    }
    
    getData();
  }, [id]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const info = {...datos, fecha: moment().format('M-d-yyyy')};
    const response = await sendInsert([JSON.stringify(info), id]);
    const pdf = await generatePDF(data, info);
    if (response && pdf) {
      alert("Formulario guardado con éxito");
      setDisabled(true);
    }
  }

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="field-1" className="mb-1">1. La persona de las que más aprendo de Dios es...</label> 
        <input onChange={handleInputChange} id="field-1" name="field-1" type="text" className="form-control" required />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-2" className="mb-1">2. En mi proyecto las cosas que estoy aprendiendo sobre Dios son...</label> 
        <textarea onChange={handleInputChange} id="field-2" name="field-2" cols="40" rows="3" className="form-control" required></textarea>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-3" className="mb-1">3. En mi proyecto las cosas que estoy aprendiendo sobre la Biblia son...</label> 
        <textarea onChange={handleInputChange} id="field-3" name="field-3" cols="40" rows="3" className="form-control" required></textarea>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-4" className="mb-1">4. Lo que más me ha gustado aprender sobre Jesús es...</label> 
        <textarea onChange={handleInputChange} id="field-4" name="field-4" cols="40" rows="3" className="form-control" required></textarea>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-5" className="mb-1">5. Mi canción favorita que canto en el proyecto es...</label> 
        <textarea onChange={handleInputChange} id="field-5" name="field-5" cols="40" rows="3" className="form-control" required></textarea>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-6" className="mb-1">6. Cuando le pido a Jesús, yo oro por...</label> 
        <textarea onChange={handleInputChange} id="field-6" name="field-6" cols="40" rows="3" className="form-control" required></textarea>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-7" className="mb-1">7. Mi historia favorita de la Biblia es...</label> 
        <textarea onChange={handleInputChange} id="field-7" name="field-7" cols="40" rows="3" className="form-control" required></textarea>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-8" className="mb-1">8. Mi versículo favorito de la Biblia es...</label> 
        <textarea onChange={handleInputChange} id="field-8" name="field-8" cols="40" rows="3" className="form-control" required></textarea>
      </div> 
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
      <div className="text-center mb-3">
        { disabled &&
          <Link to={link.url} className="text-white">{link.texto}</Link>
        }
      </div>
    </form>
  );
}

export default SVD1S1112Template;
