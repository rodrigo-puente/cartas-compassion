import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { sendAsync } from '../../message-control/renderer';
import { CARD_STATES } from '../../lib/constants';

function Table({ state }) {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    async function getData() {
      console.log(`SELECT * FROM cartas WHERE estado = "${CARD_STATES[state]}"`);
      const data = await sendAsync(`SELECT * FROM cartas WHERE estado = "${CARD_STATES[state]}"`);
      setCartas(data);
    }
    
    getData();
  }, [state]);

  return (
    <div className="mb-3">
      <div className="table-responsive mb-3">
        <table className="table">
          <thead>
            <tr>
              <th>Acciones</th>
              <th className="text-center" scope="col">ID Template</th>
              <th className="text-center" scope="col">Proyecto</th>
              <th className="text-center" scope="col">Código</th>
              <th className="text-center" scope="col">Beneficiario nombre preferido</th>
              <th className="text-center" scope="col">Sexo</th>
              <th className="text-center" scope="col">Edad</th>
              <th className="text-center" scope="col">C0</th>
              <th className="text-center" scope="col">Socio nombre preferido</th>
              <th className="text-center" scope="col">Sexo</th>
              <th className="text-center" scope="col">País</th>
            </tr>
          </thead>
          <tbody>
            { 
              cartas.map((x) => 
                <tr key={x.id}>
                  <td><Link to={`/template/${x.id_plantilla.toUpperCase()}/${x.id}`}>{x.id_plantilla.toUpperCase()}</Link></td>
                  <td>{x.id_plantilla}</td>
                  <td>{x.beneficiario_iglesia}</td>
                  <td>{x.beneficiario_id}</td>
                  <td>{x.beneficiario_preferido}</td>
                  <td>{x.beneficiario_sexo}</td>
                  <td>{x.beneficiario_edad}</td>
                  <td>{x.comunicacion_id_global}</td>
                  <td>{x.supporter_favorito}</td>
                  <td>{x.supporter_sexo}</td>
                  <td>{x.supporter_country}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      { cartas.length === 0 && 
          <p className="text-center text-white">No se encontraron cartas.</p>
        }
    </div>
  );
}

export default Table;
