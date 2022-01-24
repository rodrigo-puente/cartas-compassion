import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAlert } from 'react-alert';
import { handleDir } from '../lib/fileInteractions';
import { sendAsync, generateXLSX } from "../message-control/renderer";
import { CARD_STATES } from '../lib/constants';

function Exporter({ state }) {
  const { handleSubmit } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [route, setRoute] = useState("");
  const [cartas, setCartas] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    async function getData() {
      const data = await sendAsync(`SELECT * FROM cartas WHERE estado = "${CARD_STATES[state]}"`);
      setCartas(data);
    }
    
    getData();
  }, [state]);

  const onSubmit = () => {
    if (!route.length) {
      alert.show("Debes elegir dónde quieres guardar el archivo");
      return;
    }

    setDisabled(true);
    generateXLSX(cartas, route, CARD_STATES[state]).then((response) => {
      if (response) {
        alert.show("Reporte guardado con éxito");
      } else {
        alert.show("Hubo un error guardando el reporte...");
      }
      setDisabled(false);
    }).catch((err) => {
      console.dir("HANDLE SUBMIT ERROR: ", err);
      setDisabled(false);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className='offset-md-3 col-md-6'>
          <form className="text-center" onSubmit={handleSubmit(onSubmit) }>
            <div className="form-group mb-5">
              <label htmlFor="route" className="mb-2 text-white">Dónde quieres guardar el archivo XLSX</label><br/>
              <input type="text" onClick={handleDir(setRoute)} value={route} id="route" name="route"  className="form-control" readOnly required />
            </div>
            <div className="form-group mb-4 text-center">
              <button name="submit" type="submit" onSubmit={handleSubmit(onSubmit)} className="btn btn-primary" disabled={disabled}>Generar archivo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Exporter;
