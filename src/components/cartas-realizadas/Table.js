import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { sendAsync } from '../../message-control/renderer';

function Table() {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await sendAsync('SELECT * FROM cartas WHERE estado = "Impreso y enviado a la ICP"');
      setCartas(data);
    }
    
    getData();
  }, []);

  return (
    <div className="mb-3">
      <div className="table-responsive mb-3">
        <table className="table">
          <thead>
            <tr>
              <th>Acciones</th>
              <th className="text-center" scope="col">ID Template</th>
              <th className="text-center" scope="col">Beneficiario ID iglesia</th>
              <th className="text-center" scope="col">Beneficiario ID local</th>
              <th className="text-center" scope="col">Beneficiario nombre preferido</th>
              <th className="text-center" scope="col">Benificiario ID global</th>
              <th className="text-center" scope="col">Beneficiario sexo</th>
              <th className="text-center" scope="col">Beneficiario edad</th>
              <th className="text-center" scope="col">Estado</th>
              <th className="text-center" scope="col">Tipo de comunicación</th>
              <th className="text-center" scope="col">Comunicación ID global</th>
              <th className="text-center" scope="col">Socio nombre preferido</th>
              <th className="text-center" scope="col">Socio tipo de relación</th>
              <th className="text-center" scope="col">Socio sexo</th>
              <th className="text-center" scope="col">Socio ID global</th>
              <th className="text-center" scope="col">Socio país</th>
              <th className="text-center" scope="col">Target lang</th>
            </tr>
          </thead>
          <tbody>
            { 
              cartas.map((x) => 
                <tr key={x.id}>
                  <td><Link to={`/template/${x.id_plantilla.toUpperCase()}/${x.id}`}>Ver respuestas</Link></td>
                  <td>{x.id_plantilla}</td>
                  <td>{x.beneficiario_iglesia}</td>
                  <td>{x.beneficiario_id}</td>
                  <td>{x.beneficiario_preferido}</td>
                  <td>{x.beneficiario_id_global}</td>
                  <td>{x.beneficiario_sexo}</td>
                  <td>{x.beneficiario_edad}</td>
                  <td>{x.estado}</td>
                  <td>{x.comunicacion_tipo}</td>
                  <td>{x.comunicacion_id_global}</td>
                  <td>{x.supporter_favorito}</td>
                  <td>{x.supporter_tipo_relacion}</td>
                  <td>{x.supporter_sexo}</td>
                  <td>{x.supporter_id_global}</td>
                  <td>{x.supporter_country}</td>
                  <td>{x.target_lang}</td>
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
