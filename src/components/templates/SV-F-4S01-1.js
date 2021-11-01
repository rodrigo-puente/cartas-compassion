import React, { useState, useEffect, useMemo } from "react";
import { getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import TextArea from "../shared/TextArea";
import templateConfig from "../../configs/SV-F-4S01-1.config";

function SVF4S011Template({ id }) {
  const TEMPLATE_ID = "SV-F-4S01-1";
  const CONFIG = useMemo(() => { return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }}, []);
  const [route, setRoute] = useState("");
  const [img] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    getData(id, CONFIG, setCarta, setForm);
  }, [id, CONFIG]);

  return (
    <form onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)}>
      <div className="form-group mb-3">
        <label htmlFor="field-1" className="mb-2">1. Un mensaje de agradecimiento a mi patrocinador</label> 
        <TextArea id="field-1" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-2" className="mb-2">2. ¿Qué beneficios he recibido del proyecto?</label> 
        <TextArea id="field-2" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-3" className="mb-2">3. Mis planes para el futuro</label> 
        <TextArea id="field-3" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-4" className="mb-2">4. Mis peticiones de oración</label> 
        <TextArea id="field-4" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-5" className="mb-2">5. Un saludo final para mi patrocinador</label> 
        <TextArea id="field-5" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVF4S011Template;
