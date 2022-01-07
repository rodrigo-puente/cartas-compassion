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
      <div className="col-sm-12 text-center mb-3">
        
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Beneficiario</th>
              <th scope="col">Código</th>
              <th scope="col">Edad</th>
              <th scope="col">Sexo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{vineta.beneficiario_preferido}</td>
              <td>{vineta.beneficiario_id}</td>
              <td>{vineta.beneficiario_edad}</td>
              <td>{vineta.beneficiario_sexo}</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Patrocinador</th>
              <th scope="col">Sexo</th>
              <th scope="col">País</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{vineta.supporter_favorito}</td>
              <td>{vineta.supporter_sexo || "n/a"}</td>
              <td>{vineta.supporter_country || "n/a"}</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">C0</th>
              <th scope="col">Tipo de comunicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{vineta.comunicacion_id_global}</td>
              <td>{vineta.comunicacion_tipo}</td>
            </tr>
          </tbody>
        </table>

      </div>
      <div className="col-sm-12 text-center mb-5">
        Preguntas:<br/>
        <strong className="text-black">{vineta.preguntas}</strong>
      </div>
      <hr/>
    </div>
  );
}

export default Vineta;
