import React, { useState, useEffect } from "react";
import { sendAsync } from '../../message-control/renderer';
import '../../styles/_vineta.scss';

function Vineta({ id }) {
  const [vineta, setVineta] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await sendAsync(`SELECT * FROM cartas WHERE id = ${id}`);
      setVineta(data[0]);
    }
    
    getData();
  }, [id]);

  return (
    <div className="row" id="vineta">
      <div className="col-sm-6 text-center mb-2">
        <h5>Beneficiario</h5>
        <div className="mb-2">
          ID local:<br/>
          <strong>{vineta.beneficiario_id}</strong>
        </div>
        <div className="mb-2">
          Nombre:<br/>
          <strong>{vineta.beneficiario_preferido}</strong>
        </div>
        <div className="mb-2">
          Edad:<br/>
          <strong>{vineta.edad}</strong>
        </div>
      </div>
      <div className="col-sm-6 text-center mb-2"> 
        <h5>Socio</h5>
        <div className="mb-2">
          Nombre:<br/>
          <strong>{vineta.supporter_favorito}</strong>
        </div>
        <div className="mb-2">
          País:<br/>
          <strong>{vineta.supporter_country}</strong>
        </div>
      </div>
      <hr/>
      <div className="col-sm-12 text-center">
        <div>
          Tipo de comunicación:<br/>
          <strong>{vineta.comunicacion_tipo}</strong>
        </div>
      </div>
      <div className="col-sm-12 text-center">
        <div>
          Preguntas:<br/>
          <strong>{vineta.preguntas}</strong>
        </div>
      </div>
    </div>
  );
}

export default Vineta;
