import React, { useState, useEffect } from "react";
import moment from 'moment';
import { sendAsync, sendInsert, generatePDF } from '../../message-control/renderer';
import { handleImg, handleInputChange } from '../../lib/fileInteractions';
import { CARD_STATES, CARDS_SIN_COMENZAR } from '../../lib/constants';
import SharedSelectors from "../shared/SharedSelectors";

function SVD1S1116Template({ id }) {
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

    console.dir(form);

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
      <div className="form-group mb-4">
        <label className="mb-2">1. Mi comida favorita es</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-1" name="field-1-1" />Frutas</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-2" name="field-1-2" />Vegetales</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-3" name="field-1-3" />Carnes</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-4" name="field-1-4" />Sopas</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-5" name="field-1-5" />Pollo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-6" name="field-1-6" />Frijoles</label></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-sm-12 col-md-4">
          <label htmlFor="field-1-7" className="mb-2 me-2">Otro:</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-1-7" name="field-1-7" className="form-control d-inline w-auto" maxLength="20" />
          <br/><small>Máximo de caracteres {form["field-1-7"]?.length}/20</small>
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">2. Mi deporte favorito es</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-1" name="field-2-1" />Baloncesto</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-2" name="field-2-2" />Baseball</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-3" name="field-2-3" />Natación</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-4" name="field-2-4" />Futbol</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-5" name="field-2-5" />Voleibol</label></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-sm-12 col-md-4">
          <label htmlFor="field-2-6" className="mb-2 me-2">Otro:</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-2-6" name="field-2-6" className="form-control d-inline w-auto" maxLength="20" />
          <br/><small>Máximo de caracteres {form["field-2-6"]?.length}/20</small>
        </div>
      </div>
      <div className="form-group">
        <label className="mb-2">3. Mis versículos favoritos de la biblia son:</label> 
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-3-1" className="mb-2">Antiguo testamento</label><br/>
            <textarea onChange={handleInputChange(form, setForm)} id="field-3-1" name="field-3-1" cols="30" rows="3" className="form-control" maxLength="120"></textarea>
            <small>Máximo de caracteres {form["field-3-1"]?.length}/120</small>
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-3-2" className="mb-2">Nuevo testamento</label><br/>
            <textarea onChange={handleInputChange(form, setForm)} id="field-3-2" name="field-3-2" cols="30" rows="3" className="form-control" maxLength="100" required></textarea>
            <small>Máximo de caracteres {form["field-3-2"]?.length}/100</small>
          </div>
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">4. Mis animales favoritos son</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-1" name="field-4-1" />Vaca</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-2" name="field-4-2" />Caballo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-3" name="field-4-3" />Pollo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-4" name="field-4-4" />Perro</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-5" name="field-4-5" />Gato</label></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-sm-12 col-md-4">
          <label htmlFor="field-4-6" className="mb-2 me-2">Otro:</label>
          <input type="text" onChange={handleInputChange(form, setForm)} id="field-4-6" name="field-4-6" className="form-control d-inline w-auto" maxLength="20" />
          <br/><small>Máximo de caracteres {form["field-4-6"]?.length}/20</small>
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-5" className="mb-2">5. Un mensaje a mi patrocinador</label><br/>
        <textarea onChange={handleInputChange(form, setForm)} id="field-5" name="field-5" cols="30" rows="3" className="form-control" maxLength="480" required></textarea>
        <small>Máximo de caracteres {form["field-5"]?.length}/480</small>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="img" className="mb-2">6. Adjunta un dibujo</label><br/>
        <input type="text" onClick={handleImg(setImg)} value={img} id="img" name="img"  className="form-control" readOnly />
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-6" name="field-6" />Esta carta está escrita en tercera persona ya que el niño no puede escribir</label>
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7" name="field-7" />Esta carta está escrita por el niño</label>
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={(e)=> {e.preventDefault(); handleSubmit()}} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVD1S1116Template;
