import React, { useState, useEffect } from "react";
import moment from 'moment';
import { sendAsync, sendInsert, generatePDF } from '../../message-control/renderer';
import { handleInputChange } from '../../lib/fileInteractions';
import { CARD_STATES, CARDS_SIN_COMENZAR } from '../../lib/constants';
import SharedSelectors from "../shared/SharedSelectors";

function SVF4S011Template({ id }) {
  const [route, setRoute] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    async function getData() {
      const result = await sendAsync(`SELECT * FROM cartas WHERE id = ${id}`);
      setCarta(result[0]);

      if(result.length && result[0].estado !== CARD_STATES[CARDS_SIN_COMENZAR]) {
        const newform = JSON.parse(result[0].formulario);
        setForm(newform);

        const skipKeys = ["fecha", "imgs", "img", "route"];
        Object.keys(newform).forEach((key) => {
          if (skipKeys.includes(key)) return;
          try {
            document.getElementById(key).value = newform[key];
          } catch(err) {
            console.log("Propiedad no existe: ", key);
          }
        })
      }
    }
    
    getData();
  }, [id]);

  function handleSubmit() {
    if (!route.length) {
      alert("Debes elegir dónde quieres guardar el archivo");
      return;
    }

    const data = { ...form, route, imgs, fecha: moment().format('DD-MMM-YYYY') };

    sendInsert([JSON.stringify(data), id]).then((response) => {
      return generatePDF(carta, data, "SV-F-4S01-1");
    }).then((response) => {
      response ? alert("Formulario guardado con éxito") : alert("Hubo un error guardando el formulario...");
      setDisabled(false);
    }).catch((err) => {
      setDisabled(false);
    });
  }

  return (
    <form onSubmit={(e)=> {e.preventDefault(); handleSubmit()}}>
      <div className="form-group mb-3">
        <label htmlFor="field-1" className="mb-2">1. Un mensaje de agradecimiento a mi patrocinador</label> 
        <textarea onChange={handleInputChange(form, setForm)} id="field-1" name="field-1" cols="40" rows="10" className="form-control" maxLength="380" required></textarea>
        <small>Máximo de caracteres {form["field-1"]?.length}/380</small>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-2" className="mb-2">2. ¿Qué beneficios he recibido del proyecto?</label> 
        <textarea onChange={handleInputChange(form, setForm)} id="field-2" name="field-2" cols="40" rows="10" className="form-control" maxLength="380" required></textarea>
        <small>Máximo de caracteres {form["field-2"]?.length}/380</small>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-3" className="mb-2">3. Mis planes para el futuro</label> 
        <textarea onChange={handleInputChange(form, setForm)} id="field-3" name="field-3" cols="40" rows="10" className="form-control" maxLength="380" required></textarea>
        <small>Máximo de caracteres {form["field-3"]?.length}/380</small>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-4" className="mb-2">4. Mis peticiones de oración</label> 
        <textarea onChange={handleInputChange(form, setForm)} id="field-4" name="field-4" cols="40" rows="10" className="form-control" maxLength="290" required></textarea>
        <small>Máximo de caracteres {form["field-4"]?.length}/290</small>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-5" className="mb-2">5. Un saludo final para mi patrocinador</label> 
        <textarea onChange={handleInputChange(form, setForm)} id="field-5" name="field-5" cols="40" rows="10" className="form-control" maxLength="290" required></textarea>
        <small>Máximo de caracteres {form["field-5"]?.length}/290</small>
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={(e)=> {e.preventDefault(); handleSubmit()}} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVF4S011Template;
