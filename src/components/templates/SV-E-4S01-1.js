import React, { useState, useEffect, useMemo } from "react";
import { handleImg, handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import TextArea from "../shared/TextArea";
import templateConfig from "../../configs/SV-E-4S01-1.config";

function SVE4S011Template({ id }) {
  const TEMPLATE_ID = "SV-E-4S01-1";
  const CONFIG = useMemo(() => { return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }}, []);
  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
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
        <label htmlFor="field-1" className="mb-2">1. Escribe algo especial o agradecimiento</label> 
        <TextArea id="field-1" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="img" className="mb-2">2. Adjunta un dibujo</label><br/>
        <input type="text" onClick={handleImg(setImg)} value={img} id="img" name="img"  className="form-control" readOnly />
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVE4S011Template;
