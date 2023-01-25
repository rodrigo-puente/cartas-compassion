import React from "react";
import { handleImgsMsg, handleImgsImg, handleDir, cleanImgs } from '../../lib/fileInteractions';

function SharedSelectors({ imgs, setImgs, route, setRoute }) {

  return (
    <div>
      <div className="row mb-3">
        <h6 className='mb-3'>Agrega Imágenes extra</h6>
        {
          imgs.map((item, idx) => {
            return (
              <div className="col-sm-3 col-md-6 mb-4" key={idx}>
                <div style={ {padding: '10px', backgroundColor: '#005DAA', borderRadius: '5px'} }>
                  <div className="form-group mb-3" key={idx}>
                    <label htmlFor={`imgs[${idx}][img]`} className="mb-2 text-white">Agrega una imagen del beneficiario</label><br/>
                    <input type="text" onClick={handleImgsImg(idx, imgs, setImgs)} value={item.img} id={`imgs[${idx}][img]`} name={`imgs[${idx}][img]`} className="form-control mb-3" readOnly />
                    <label htmlFor={`imgs[${idx}][copy]`} className="mb-2 text-white ">Agrega un texto a la imagen</label> 
                    <input type="text" onChange={handleImgsMsg(idx, imgs, setImgs)} value={item.msg} id={`imgs[${idx}][msg]`} name={`imgs[${idx}][msg]`} className="form-control" maxLength="120" />
                    <small className="text-white">Máximo de caracteres {item.msg.length}/120</small>
                    <button onClick={cleanImgs(idx, imgs, setImgs)} type="button" className="btn btn-link text-white">Limpiar</button>
                  </div>
                </div>
              </div>
            )
          })
        }      
      </div>
      <div className="form-group mb-5">
        <label htmlFor="route" className="mb-2">Dónde quieres guardar el PDF</label><br/>
        <input type="text" onClick={handleDir(setRoute)} value={route} id="route" name="route"  className="form-control" readOnly required />
      </div>
    </div>
  );
}

export default SharedSelectors;
