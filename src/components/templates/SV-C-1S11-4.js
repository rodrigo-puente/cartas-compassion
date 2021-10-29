import React, { useState, useEffect, useMemo } from "react";
import { handleImg, handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import templateConfig from "../../configs/SV-C-1S11-4.config";

function SVC1S114Template({ id }) {
  const TEMPLATE_ID = "SV-C-1S11-4";
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
          <label htmlFor="field-1" className="mb-2 me-2">1. Mi estatura es</label>
          <Input id="field-1" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-2" className="mb-2 me-2">2. Mi peso es</label>
          <Input id="field-2" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">3. Aquí hay más cosas de las que puedo hacer ahora</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-1" name="field-3-1" />Caminar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-2" name="field-3-2" />Correr</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-3" name="field-3-3" />Saltar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-4" name="field-3-4" />Tirar una pelota</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-5" name="field-3-5" />Dibujar</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-6" name="field-3-6" />Decir unas palabras</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-3-7" name="field-3-7" />Cantar</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-4" className="mb-2 me-2">4. En la iglesia me gusta (escuchar historias bíblicas, jugar con amigos, jugar juegos)</label>
          <Input id="field-4" handleInputChange={handleInputChange} form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-5" className="mb-2 me-2">5. Mi mejor amigo/amiga se llama</label>
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

export default SVC1S114Template;
