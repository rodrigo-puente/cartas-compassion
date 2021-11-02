import React, { useState, useEffect, useMemo } from "react";
import { handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";
import templateConfig from "../../configs/SV-B-1S11-1.config";

function SVB1S111Template({ id }) {
  const TEMPLATE_ID = "SV-B-1S11-1";
  const CONFIG = useMemo(() => { return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }}, []);
  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});
  const copy = ['field-2-1', 'field-2-2'];

  useEffect(() => {
    getData(id, CONFIG, setCarta, setForm);
  }, [id, CONFIG]);

  return (
    <form onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)}>
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-1" className="mb-2 me-2">1. Mis padres o encargados son:</label>
          <Input id="field-1" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-2" className="mb-2 me-2">2. Mi juego favorito es</label>
          <Input id="field-2" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">3. Mi color de cabello es</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-1" name="field-3-1" />Amarillo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-2" name="field-3-2" />Café claro</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-3" name="field-3-3" />Café medio</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-4" name="field-3-4" />Cafe oscuro</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-5" name="field-3-5" />Negro</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4 form-group mb-4">
          <label htmlFor="field-4-1" className="mb-2 me-2">4. Mi día de nacimiento:</label>
          <Input id="field-4-1" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-12 col-md-4 form-group mb-4">
          <label htmlFor="field-4-2" className="mb-2 me-2">Mi mes de nacimiento:</label>
          <Input id="field-4-2" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-12 col-md-4 form-group mb-4">
          <label htmlFor="field-4-3" className="mb-2 me-2">Mi año de nacimiento:</label>
          <Input id="field-4-3" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-5" className="mb-2 me-2">5. Mis hermanos y hermanas son:</label>
          <TextArea id="field-5" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-6" className="mb-2 me-2">6. Mis cosas favoritas son:</label>
          <TextArea id="field-6" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">7. Vivo en</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7-1" name="field-7-1" />Cerca del mar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7-2" name="field-7-2" />Campo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7-3" name="field-7-3" />Ciudad</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-8" className="mb-2 me-2">8. Mi comida favorita es:</label>
          <Input id="field-8" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-9" className="mb-2 me-2">9. Mi color favorito es:</label>
          <Input id="field-9" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-10" className="mb-2">10. Un mensaje a mi patrocinador</label><br/>
        <TextArea id="field-10" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="img" className="mb-2">10. Adjunta un dibujo</label><br/>
        <ImageSelector img={img} setImg={setImg} />
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-11" name="field-11" />Esta carta está escrita en tercera persona ya que el niño no puede escribir</label>
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-12" name="field-12" />Esta carta está escrita por el niño</label>
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVB1S111Template;
