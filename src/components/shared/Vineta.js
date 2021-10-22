import React, { useState, useEffect } from "react";
import { sendAsync } from '../../message-control/renderer';
import '../../styles/_vineta.scss';

function Vineta({ id }) {
  const spanStyle = { paddingRight: '20px' };
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
      <div className="col-sm-12 text-center mb-3">
        <p>
          <span style={spanStyle}><strong>Beneficiario:</strong> {vineta.beneficiario_preferido}</span>
          <span style={spanStyle}><strong>Código:</strong> {vineta.beneficiario_id}</span>
          <span style={spanStyle}><strong>Edad:</strong> {vineta.beneficiario_edad}</span>
          <span style={spanStyle}><strong>Sexo:</strong> {vineta.beneficiario_sexo}</span>
        </p>
        <p>
          <span style={spanStyle}><strong>Patrocinador:</strong> {vineta.supporter_favorito}</span>
          <span style={spanStyle}><strong>Sexo:</strong> {vineta.supporter_sexo || "n/a"}</span>
          <span style={spanStyle}><strong>País:</strong> {vineta.supporter_country || "n/a"}</span>
        </p>
        <p>
          <span style={spanStyle}><strong>C0:</strong> {vineta.comunicacion_id_global}</span>
        </p>
      </div>
      <div className="col-sm-6 text-center mb-3">
          Tipo de comunicación:<br/>
          <strong>{vineta.comunicacion_tipo}</strong>
      </div>
      <div className="col-sm-6 text-center mb-5">
        Preguntas:<br/>
        <strong>{vineta.preguntas}</strong>
      </div>
      <hr/>
    </div>
  );
}

export default Vineta;
