import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { sendAsync } from '../../message-control/renderer';
import { CARD_STATES } from '../../lib/constants';

function Table({ state, setNumCartas }) {
  const [cartas, setCartas] = useState([]);
  const [cartasBackup, setCartasBackup] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    async function getData() {        
      const dateOffset = (24*60*60*1000) * 90; 
      const date = new Date(); 
      date.setTime(date.getTime() - dateOffset);

      const data = await sendAsync(`SELECT * FROM cartas WHERE estado = "${CARD_STATES[state]}"`);
      const filteredData = data.filter((item) => new Date(item.fecha * 1000) >= date);

      setCartas(filteredData);
      setCartasBackup(filteredData);
      setNumCartas(`(${filteredData.length})`);
    }
    
    getData();
  }, [state, setNumCartas]);

  const deleteRow = async (id) => {
    if(window.confirm("¿Estás seguro que quieres borrar este registro?")) {
      await sendAsync(`DELETE FROM cartas WHERE id = "${id}"`);
      const filteredCartas = cartas.filter(item => item.id !== id);
      setCartas(filteredCartas);
      setNumCartas(`(${filteredCartas.length})`)
      alert.show("Registro borrado con éxito");
    }
  }

  const deleteAll = async () => { 
    if(window.confirm("¿Estás seguro que quieres borrar TODOS los registros?")) {
      await sendAsync(`DELETE FROM cartas WHERE estado = "${CARD_STATES[state]}"`);
      setCartas([]);
      setNumCartas(`(0)`);
      alert.show("Registros borrados con éxito.");
    }
  }

  const filterList = (event) => {
    let updatedList = cartasBackup;
    updatedList = updatedList.filter((list) => {
      return (
        list.beneficiario_id.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });

    setCartas(updatedList);
  };

  return (
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="Buscar por código de beneficiario" onChange={ (e) => filterList(e) } />
      <div className="table-responsive mb-3">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Plantilla</th>
              <th className="text-center" scope="col">Tutor</th>
              <th className="text-center" scope="col">Tipo de comunicación</th>
              <th className="text-center" scope="col">Proyecto</th>
              <th className="text-center" scope="col">Código</th>
              <th className="text-center" scope="col">Beneficiario nombre preferido</th>
              <th className="text-center" scope="col">Sexo</th>
              <th className="text-center" scope="col">Edad</th>
              <th className="text-center" scope="col">C0</th>
              <th className="text-center" scope="col">Patrocinador nombre preferido</th>
              <th className="text-center" scope="col">Sexo</th>
              <th className="text-center" scope="col">País</th>
              <th className="text-center" scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            { 
              // eslint-disable-next-line array-callback-return
              cartas.map((x) => {
                if (new Date(x.fecha * 1000) >= date) {
                  return ( 
                    <tr key={x.id}>
                      <td><Link to={`/template/${state}/${x.id_plantilla.toUpperCase()}/${x.id}`}>{x.id_plantilla.toUpperCase()}</Link></td>
                      <td className="text-center">{x.tutor}</td>
                      <td className="text-center">{x.comunicacion_tipo}</td>
                      <td className="text-center">{x.beneficiario_iglesia}</td>
                      <td className="text-center">{x.beneficiario_id}</td>
                      <td className="text-center">{x.beneficiario_preferido}</td>
                      <td className="text-center">{x.beneficiario_sexo}</td>
                      <td className="text-center">{x.beneficiario_edad}</td>
                      <td className="text-center">{x.comunicacion_id_global}</td>
                      <td className="text-center">{x.supporter_favorito}</td>
                      <td className="text-center">{x.supporter_sexo}</td>
                      <td className="text-center">{x.supporter_country}</td>
                      <td className="text-center"><button onClick={() => deleteRow(x.id)} className="btn btn-danger btn-sm">Eliminar</button></td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </table>
      </div>
      
      { cartas.length &&
        <div className="text-center">
          <button onClick={() => deleteAll()} className="btn btn-danger btn-lg">ELIMINAR TODOS LOS REGISTROS</button>
        </div>
      }

      { cartas.length === 0 && 
         <p className="text-center text-white">No se encontraron cartas.</p>
      }

    </div>
  );
}

export default Table;
