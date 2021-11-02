import React, { useState, useEffect, useMemo } from "react";
import { getData, handleSubmit, handleInputChange } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";
import templateConfig from "../../configs/SV-J-1S11-1.config";

function SVJ1S111Template({ id }) {
  const TEMPLATE_ID = "SV-J-1S11-1";
  const CONFIG = useMemo(() => { return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }}, []);
  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});
  const copy = ["field-3"];

  useEffect(() => {
    getData(id, CONFIG, setCarta, setForm);
  }, [id, CONFIG]);

  return (
    <form onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)}>
      <div className="form-group mb-4">
        <label className="mb-2">1. La zona en la que vivo es</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-1" name="field-1-1" />En una ciudad</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-2" name="field-1-2" />En la costa</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-3" name="field-1-3" />En las tierras altas</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-3">
          <label className="mb-2">2. Vivo aquí</label> 
          <select className="form-control" id="field-2" name="field-2" onChange={handleInputChange(form, setForm)}>
            <option value="Ahuachapán">Ahuachapán</option>
            <option value="Cabañas">Cabañas</option>
            <option value="Chalatenango">Chalatenango</option>
            <option value="Cuscatlán">Cuscatlán</option>
            <option value="La Libertad">La Libertad</option>
            <option value="La Paz">La Paz</option>
            <option value="La Unión">La Unión</option>
            <option value="Morazán">Morazán</option>
            <option value="Santa Ana">Santa Ana</option>
            <option value="San Miguel">San Miguel</option>
            <option value="San Salvador">San Salvador</option>
            <option value="San Vicente">San Vicente</option>
            <option value="Sonsonate">Sonsonate</option>
            <option value="Usulután">Usulután</option>
          </select>
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-3">
          <label htmlFor="field-3" className="mb-2">3.1 ¿Cuántas personas viven en mi casa?</label> 
          <Input id="field-3" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row">
          <label className="mb-2">3.2 ¿Quiénes son esas personas y qué relación tienen contigo?</label> 
          {
            Array(7   ).fill(0).map((item, idx) => {
              idx = idx + 1
              return (
                <div className="col-sm-3 col-md-6 mb-4" key={idx}>
                  <div style={ {padding: '10px', backgroundColor: '#005DAA', borderRadius: '5px'} }>
                    <div className="form-group mb-3">
                      <label htmlFor={`field-3-${idx}-A`} className="mb-2">Nombre</label><br/>
                      <input type="text" onChange={handleInputChange(form, setForm)} id={`field-3-${idx}-A`} name={`field-3-${idx}-A`} className="form-control mb-3" maxLength="20"/>
                      <label htmlFor={`field-3-${idx}-B`} className="mb-2">Relación</label> 
                      <input type="text" onChange={handleInputChange(form, setForm)} id={`field-3-${idx}-B`} name={`field-3-${idx}-B`} className="form-control" maxLength="12" />
                    </div>
                  </div>
                </div>
              )
            })
          } 
        </div>      
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-3">
          <label htmlFor="field-4" className="mb-2">4. ¿Cuando crezca, quiero ser?</label> 
          <TextArea id="field-4" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-3">
          <label htmlFor="field-5" className="mb-2">5. Una pregunta que tengo para ti</label> 
          <TextArea id="field-5" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-3">
          <label htmlFor="img" className="mb-2">6. Este es un dibujo que hice para ti</label><br/>
          <ImageSelector img={img} setImg={setImg} />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-3">
          <label htmlFor="field-6" className="mb-2">Escritura individual, sino el niño</label> 
          <Input id="field-6" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVJ1S111Template;
