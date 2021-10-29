import React, { useState, useEffect, useMemo } from "react";
import { handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import templateConfig from "../../configs/SV-D-1S11-12.config";

function SVD1S1112Template({ id }) {
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
        <label htmlFor="field-1" className="mb-1">1. La persona de las que más aprendo de Dios es...</label> 
        <Input id="field-1" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-2" className="mb-1">2. En mi proyecto las cosas que estoy aprendiendo sobre Dios son...</label> 
        <TextArea id="field-2" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-3" className="mb-1">3. En mi proyecto las cosas que estoy aprendiendo sobre la Biblia son...</label> 
        <TextArea id="field-3" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-4" className="mb-1">4. Lo que más me ha gustado aprender sobre Jesús es...</label> 
        <TextArea id="field-4" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-5" className="mb-1">5. Mi canción favorita que canto en el proyecto es...</label> 
        <TextArea id="field-5" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-6" className="mb-1">6. Cuando le pido a Jesús, yo oro por...</label> 
        <TextArea id="field-6" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-7" className="mb-1">7. Mi historia favorita de la Biblia es...</label> 
        <TextArea id="field-7" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-8" className="mb-1">8. Mi versículo favorito de la Biblia es...</label> 
        <TextArea id="field-8" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div> 
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVD1S1112Template;
