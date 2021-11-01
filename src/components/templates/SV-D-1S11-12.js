import React, { useState, useEffect, useMemo } from "react";
import { handleImg, handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import templateConfig from "../../configs/SV-D-1S11-12.config";

function SVD1S1112Template({ id }) {
  const TEMPLATE_ID = "SV-D-1S11-12";
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
        <label htmlFor="field-1" className="mb-1">1. La persona de las que más aprendo de Dios es...</label> 
        <Input id="field-1" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-2" className="mb-1">2. En mi proyecto las cosas que estoy aprendiendo sobre Dios son...</label> 
            <TextArea id="field-2" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-3" className="mb-1">3. En mi proyecto las cosas que estoy aprendiendo sobre la Biblia son...</label> 
            <TextArea id="field-3" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-4" className="mb-1">4. Lo que más me ha gustado aprender sobre Jesús es...</label> 
            <TextArea id="field-4" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-5" className="mb-1">5. Mi canción favorita que canto en el proyecto es...</label> 
            <TextArea id="field-5" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-6" className="mb-1">6. Cuando le pido a Jesús, yo oro por...</label> 
            <TextArea id="field-6" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-7" className="mb-1">7. Mi historia favorita de la Biblia es...</label> 
            <TextArea id="field-7" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-8" className="mb-1">8. Mi versículo favorito de la Biblia es...</label> 
        <TextArea id="field-8" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div> 
      <div className="form-group mb-4">
        <label htmlFor="field-9" className="mb-2">9. Un mensaje a mi patrocinador</label><br/>
        <TextArea id="field-9" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="img" className="mb-2">10. Adjunta un dibujo</label><br/>
        <input type="text" onClick={handleImg(setImg)} value={img} id="img" name="img"  className="form-control" readOnly />
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-10" name="field-10" />Esta carta está escrita en tercera persona ya que el niño no puede escribir</label>
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-11" name="field-11" />Esta carta está escrita por el niño</label>
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
