import React, { useState, useEffect } from "react";
import { handleDir } from '../lib/fileInteractions';
import { sendAsync, generateXLSX } from "../message-control/renderer";
import { CARD_STATES } from '../lib/constants';

function Exporter({ state }) {
  const [disabled, setDisabled] = useState(false);
  const [route, setRoute] = useState("");
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await sendAsync(`SELECT * FROM cartas WHERE estado = "${CARD_STATES[state]}"`);
      setCartas(data);
    }
    
    getData();
  }, [state]);

  const handleSubmit = async(e) => {
    if (!route.length) {
      alert("Debes elegir dónde quieres guardar el archivo");
      return;
    }

    setDisabled(true);
    const response = await generateXLSX(cartas, route, CARD_STATES[state]);
    if (response) alert("Archivo creado con éxito");
    setDisabled(false);
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <div className='offset-md-3 col-md-6'>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="form-group mb-5">
              <label htmlFor="route" className="mb-2 text-white">Dónde quieres guardar el archivo XLSX</label><br/>
              <input type="text" onClick={handleDir(setRoute)} value={route} id="route" name="route"  className="form-control" readOnly required />
            </div>
            <div className="form-group mb-4 text-center">
              <button name="submit" type="submit" onSubmit={handleSubmit} className="btn btn-primary" disabled={disabled}>Generar archivo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Exporter;
