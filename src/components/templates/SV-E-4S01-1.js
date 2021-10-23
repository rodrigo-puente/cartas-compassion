import React, { useState, useEffect } from "react";
import moment from 'moment';
import { sendAsync, sendInsert, generatePDF } from '../../message-control/renderer';
import { handleImgsMsg, handleImgsImg, handleDir, handleImg, handleInputChange } from '../../lib/fileInteractions';
import { CARD_STATES, CARDS_SIN_COMENZAR } from '../../lib/constants';

function SVE4S011Template({ id }) {
  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    'field-1': ''
  });

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

    const data = { ...form, route, img, imgs, fecha: moment().format('DD-MMM-YYYY') };

    sendInsert([JSON.stringify(data), id]).then((response) => {
      return generatePDF(carta, data, "SV-E-4S01-1");
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
        <label htmlFor="field-1" className="mb-2">1. Escribe algo especial o agradecimiento</label> 
        <textarea onChange={handleInputChange(form, setForm)} id="field-1" name="field-1" cols="40" rows="10" className="form-control" maxLength="1850" required></textarea>
        <small>Máximo de caracteres {form["field-1"].length}/1850</small>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="img" className="mb-2">2. Adjunta un dibujo</label><br/>
        <input type="text" onClick={handleImg(setImg)} value={img} id="img" name="img"  className="form-control" readOnly />
      </div>
      <br/>
      <div className="row mb-3">
        <h6 className='text-white mb-3'>Agrega Imágenes extra</h6>
        {
          imgs.map((item, idx) => {
            return (
              <div className="col-sm-3 col-md-6 mb-4" key={idx}>
                <div style={ {padding: '10px', backgroundColor: '#005DAA', borderRadius: '5px'} }>
                  <div className="form-group mb-3" key={idx}>
                    <label htmlFor={`imgs[${idx}][img]`} className="mb-2">Agrega una imagen del niño o joven</label><br/>
                    <input type="text" onClick={handleImgsImg(idx, imgs, setImgs)} value={item.img} id={`imgs[${idx}][img]`} name={`imgs[${idx}][img]`} className="form-control mb-3" readOnly />
                    <label htmlFor={`imgs[${idx}][copy]`} className="mb-2">Agrega un texto a la imagen</label> 
                    <input type="text" onChange={handleImgsMsg(idx, imgs, setImgs)} value={item.msg} id={`imgs[${idx}][msg]`} name={`imgs[${idx}][msg]`} className="form-control" />
                  </div>
                </div>
              </div>
            )
          })
        }      
      </div>
      <div className="form-group mb-5">
        <label htmlFor="route" className="mb-2">Dónde quieres guardar el PDF</label><br/>
        <input type="text" onClick={handleDir(setRoute)} value={route} id="route" name="route"  className="form-control" readOnly required />
      </div>
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={(e)=> {e.preventDefault(); handleSubmit()}} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVE4S011Template;
