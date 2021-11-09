import React, { useState, useEffect, useMemo } from "react";
import {handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";
import templateConfig from "../../configs/SV-C-1S11-6.config";

function SVC1S116Template({ id }) {
  const TEMPLATE_ID = "SV-C-1S11-6";
  const CONFIG = useMemo(() => { return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }}, []);
  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});
  const copy = ['field-1', 'field-2', 'field-3'];

  useEffect(() => {
    getData(id, CONFIG, setCarta, setForm);
  }, [id, CONFIG]);

  return (
    <form onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)}>
      <div className="form-group mb-4">
        <label htmlFor="field-1" className="mb-2 me-2">1. Cuántos centimetros de altura tengo</label>
        <Input id="field-1" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-2" className="mb-2 me-2">2. Cuántos kilogramos peso</label>
        <Input id="field-2" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-3" className="mb-2 me-2">3. Cuántos años de edad tengo ahora</label>
        <Input id="field-3" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">4. Estas son algunas de las cosas que puedo hacer</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-1" value="field-4-1" name="field-4-1" />Caminar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-2" value="field-4-2" name="field-4-2" />Correr</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-3" value="field-4-3" name="field-4-3" />Saltar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-4" value="field-4-4" name="field-4-4" />Tirar una pelota</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-5" className="mb-2 me-2">5. Mis peticiones de oración son</label>
        <Input id="field-5" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-6" className="mb-2">6. Un mensaje a mi patrocinador</label><br/>
        <TextArea id="field-6" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="img" className="mb-2">7. Adjunta un dibujo</label><br/>
          <ImageSelector img={img} setImg={setImg} />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-7" className="mb-2 me-2">Nombre y parentesco con quien escribe la carta</label>
          <Input id="field-7" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVC1S116Template;
