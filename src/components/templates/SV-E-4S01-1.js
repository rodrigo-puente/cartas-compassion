import React, { useState, useEffect } from "react";
import moment from 'moment';
import { sendAsync, sendInsert, generatePDF, selectFile, selectDir } from '../../message-control/renderer';

function SVE4S011Template({ id }) {
  const [route, setRoute] = useState([]);
  const [imagen, setImagen] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [datos, setDatos] = useState({
    'field-1': '',
    'img': [],
    'imgs': [],
    'imgs-texto': '',
    'route': []
  });

  useEffect(() => {
    async function getData() {
      const result = await sendAsync(`SELECT * FROM cartas WHERE id = ${id}`);
      setData(result[0]);

      if(result.length && result[0].estado !== "Sin comenzar") {
        const newDatos = JSON.parse(result[0].formulario);

        setDatos(newDatos);

        Object.keys(newDatos).forEach((key) => {
          if (key === 'fecha' || key === 'imgs' || key === 'img' || key === 'route') return;
          try {
            document.getElementById(key).value = newDatos[key];
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

    setDisabled(true);
    const info = {...datos, fecha: moment().format('M-d-yyyy')};
    sendInsert([JSON.stringify(info), id]).then((response) => {
      return generatePDF(data, info, "SV-E-4S01-1");
    }).then((response) => {
      if (response) {
        alert("Formulario guardado con éxito");
      } else {
        alert("Hubo un error guardando el formulario...");
      }
      setDisabled(false);
    }).catch((err) => {
      console.dir(err);
      setDisabled(false);
    });
  }

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const imageResults = (stateKey, result, setter) => {
    const newDatos = {}
    if (!result.canceled) {
      setter(result.filePaths)
      newDatos[`${stateKey}`] = result.filePaths
      setDatos({...datos, ...newDatos})
    }
  }

  const selectOneImageFile = async(stateKey, setter) => {
    const result = await selectFile();
    imageResults(stateKey, result, setter);
  }

  const selectMultipleImageFile = async(stateKey, setter) => {
    const result = await selectFile({ multiple: true });
    imageResults(stateKey, result, setter);
  }

  const selectFolder = async(stateKey, setter) => {
    const result = await selectDir();
    imageResults(stateKey, result, setter);
  }

  const PrintFiles = ({ data }) => {
    const listItems = data.map((value, idx) => <li key={idx}>{value}</li>)
    return (
      <ul className="text-white">
        {listItems}
      </ul>
    )
  }

  return (
    <form onSubmit={(e)=> {e.preventDefault(); handleSubmit()}}>
      <div className="form-group mb-3">
        <label htmlFor="field-1" className="mb-1">1. Escribe algo especial o agradecimiento</label> 
        <textarea onChange={handleInputChange} id="field-1" name="field-1" cols="40" rows="10" className="form-control" maxLength="2000" required></textarea>
        <small>Máximo de caracteres {datos["field-1"].length}/2000</small>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="img" className="mb-1">2. Adjunta un dibujo</label><br/>
        <PrintFiles data={imagen}/>
        <button type="button" className="btn btn-success" onClick={() => selectOneImageFile('img', setImagen)}>Elige una imagen</button>
        <input type="hidden" onChange={handleInputChange} id="img" name="img"  className="form-control" />
      </div>
      <hr/>
      <div className="form-group mb-3">
        <label htmlFor="imgs" className="mb-1">3. Agrega hasta 4 imágenes del niño o joven</label><br/>
        <PrintFiles data={imagenes}/>
        <button type="button" className="btn btn-success" onClick={() => selectMultipleImageFile('imgs', setImagenes)}>Elige hasta 4 imágenes</button>
        <input type="hidden" onChange={handleInputChange} id="imgs" name="imgs"  className="form-control" readOnly />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="imgs-texto" className="mb-1">4. Algún texto que quieras agregar a las imágenes</label> 
        <input type="text" onChange={handleInputChange} id="imgs-texto" name="imgs-texto" className="form-control" />
      </div>
      <div className="form-group mb-5">
        <label htmlFor="route" className="mb-1">5. Dónde quieres guardar el PDF</label><br/>
        <PrintFiles data={route}/>
        <input type="hidden" onChange={handleInputChange} id="route" name="route"  className="form-control" readOnly required />
        <button type="button" className="btn btn-success" onClick={() => selectFolder('route', setRoute)}>Elige el folder</button>
      </div>
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={(e)=> {e.preventDefault(); handleSubmit()}} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVE4S011Template;
