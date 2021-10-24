import React, { useState, useEffect } from "react";
import moment from 'moment';
import { sendAsync, sendInsert, generatePDF } from '../../message-control/renderer';
import { handleImg, handleInputChange } from '../../lib/fileInteractions';
import { CARD_STATES, CARDS_SIN_COMENZAR } from '../../lib/constants';
import SharedSelectors from "../shared/SharedSelectors";

function SVC1S114Template({ id }) {
  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
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
            const val = newform[key];
            if(["on", "off"].includes(val)) {
              document.getElementById(key).checked = val === "on" ? "checked" : "" ;
            } else {
              document.getElementById(key).value = val;
            }
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

    const data = { ...form, route, img, imgs, fecha: moment().format('DD-MMM-YYYY') };

    sendInsert([JSON.stringify(data), id]).then((response) => {
      return generatePDF(carta, data, "SV-D-1S11-16");
    }).then((response) => {
      response ? alert("Formulario guardado con éxito") : alert("Hubo un error guardando el formulario...");
      setDisabled(false);
    }).catch((err) => {
      setDisabled(false);
    });
  }

  return (
    <form onSubmit={(e)=> {e.preventDefault(); handleSubmit()}}>
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-1" className="mb-2 me-2">1. Mi estatura es</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-1" name="field-1" className="form-control" maxLength="20" />
          <small>Máximo de caracteres {form["field-1"]?.length}/20</small>
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-2" className="mb-2 me-2">2. Mi peso es</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-2" name="field-2" className="form-control" maxLength="20" />
          <small>Máximo de caracteres {form["field-2"]?.length}/20</small>
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">3. Aquí hay más cosas de las que puedo hacer ahora</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-1" name="field-3-1" />Caminar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-2" name="field-3-2" />Correr</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-3" name="field-3-3" />Saltar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-4" name="field-3-4" />Tirar una pelota</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-5" name="field-3-5" />Dibujar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-6" name="field-3-6" />Decir unas palabras</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-7" name="field-3-7" />Cantar</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-4" className="mb-2 me-2">4. En la iglesia me gusta (escuchar historias bíblicas, jugar con amigos, jugar juegos)</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-4" name="field-4" className="form-control" maxLength="20" />
          <small>Máximo de caracteres {form["field-4"]?.length}/20</small>
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-5" className="mb-2 me-2">5. Mi mejor amigo/amiga se llama</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-5" name="field-5" className="form-control" maxLength="20" />
          <small>Máximo de caracteres {form["field-5"]?.length}/20</small>
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-6" className="mb-2">6. Un mensaje a mi patrocinador</label><br/>
        <textarea onChange={handleInputChange(form, setForm)} id="field-6" name="field-6" cols="30" rows="3" className="form-control" maxLength="480" required></textarea>
        <small>Máximo de caracteres {form["field-6"]?.length}/480</small>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="img" className="mb-2">7. Adjunta un dibujo</label><br/>
          <input type="text" onClick={handleImg(setImg)} value={img} id="img" name="img"  className="form-control" readOnly />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-7" className="mb-2 me-2">Nombre y parentesco con quien escribe la carta</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-7" name="field-7" className="form-control" maxLength="20" />
          <small>Máximo de caracteres {form["field-7"]?.length}/20</small>
        </div>
      </div>

      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={(e)=> {e.preventDefault(); handleSubmit()}} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVC1S114Template;
