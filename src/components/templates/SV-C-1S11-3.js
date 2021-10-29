import React, { useState, useEffect, useMemo } from "react";
import { handleImg, handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import templateConfig from "../../configs/SV-C-1S11-3.config";

function SVC1S113Template({ id }) {
  const TEMPLATE_ID = "SV-C-1S11-3";
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
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-1" className="mb-2 me-2">1. Mi comida favorita es</label>
          <Input id="field-1" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-2" className="mb-2 me-2">2. Mi color favorito es</label>
          <Input id="field-2" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-3" className="mb-2 me-2">3. Mi amigo favorito es</label>
          <Input id="field-3" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-4" className="mb-2 me-2">4. Mi animal favorito es</label>
          <Input id="field-4" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-5" className="mb-2 me-2">5. Mi cuento favorito es</label>
          <Input id="field-5" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-6" className="mb-2">6. Un mensaje a mi patrocinador</label><br/>
        <TextArea id="field-6" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="img" className="mb-2">7. Adjunta un dibujo</label><br/>
          <input type="text" onClick={handleImg(setImg)} value={img} id="img" name="img"  className="form-control" readOnly />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-7" className="mb-2 me-2">Nombre y parentesco con quien escribe la carta</label>
          <Input id="field-7" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVC1S113Template;
