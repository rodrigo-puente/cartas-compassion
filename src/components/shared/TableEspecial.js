import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { sendAsync } from '../../message-control/renderer';

function Table({ state, setNumCartas }) {
  const [cartas, setCartas] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    async function getData() {
      const dateOffset = (24*60*60*1000) * 90; 
      const date = new Date(); 
      date.setTime(date.getTime() - dateOffset);

      const data = await sendAsync(`SELECT * FROM cartas_especiales`);
      const filteredData = data.filter((item) => new Date(item.fecha * 1000) >= date);

      setCartas(filteredData);
      setNumCartas(`(${filteredData.length})`);
    }
    
    getData();
  }, [state, setNumCartas]);

  const deleteRow = async (id) => {
    if(window.confirm("¿Estás seguro que quieres borrar este registro?")) {
      await sendAsync(`DELETE FROM cartas_especiales WHERE id = "${id}"`);
      let filteredCartas = cartas.filter(item => item.id !== id);
      setCartas(filteredCartas);
      setNumCartas(`(${filteredCartas.length})`);
      alert.show("Registro borrado con éxito");      
    }
  }

  return (
    <div className="mb-3 w-100">
      <div className="table-responsive mb-3">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Plantilla</th>
              <th className="text-center" scope="col">Código del participante</th>
              <th className="text-center" scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            { 
              // eslint-disable-next-line array-callback-return
              cartas.map((x) => {
                return ( 
                  <tr key={x.id}>
                    <td className="text-center"><Link to={`/especiales/${x.id_plantilla.toUpperCase()}/${x.id}`}>{x.id_plantilla.toUpperCase()}</Link></td>
                    <td className="text-center">{x.beneficiario}</td>
                    <td className="text-center"><button onClick={() => deleteRow(x.id)} className="btn btn-danger btn-sm">Eliminar</button></td>
                  </tr>
                )
              })
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
