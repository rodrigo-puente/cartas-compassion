import React, { useState, useEffect, useMemo } from "react";
import { handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";
import templateConfig from "../../configs/SV-C-1S11-1.config";

function SVC1S111Template({ id }) {
  const TEMPLATE_ID = "SV-C-1S11-1";
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
      <div className="form-group mb-4">
        <label htmlFor="field-1" className="mb-2 me-2">1. Mis hermanos de mayor a menor edad son:</label>
        <TextArea id="field-1" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">2. Mi familia vive en el área</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-1" value="field-2-1" name="field-2" />Rural</label></th>
                <th><label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-2" value="field-2-2" name="field-2" />Urbana</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-3" className="mb-2 me-2">3. Nosotros obtenemos agua de:</label>
          <Input id="field-3" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-12 col-md-6 form-group mb-4">
          <label htmlFor="field-4" className="mb-2 me-2">4. Lo que más me gusta hacer con mi familia es:</label>
          <Input id="field-4" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-5-1" className="mb-2 me-2">5. Mis peticiones de oración para mi familia son</label>
          <TextArea id="field-5-1" form={form} setForm={setForm} config={CONFIG} />
        </div>
        <div className="col-sm-6 form-group mb-4">
          <label htmlFor="field-5-2" className="mb-2 me-2">Sigue tu petición</label>
          <TextArea id="field-5-2" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div> 
      <div className="form-group mb-4">
        <label htmlFor="field-6" className="mb-2">6. Un mensaje a mi patrocinador</label><br/>
        <TextArea id="field-6" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="img" className="mb-2">7. Adjunta un dibujo</label><br/>
        <ImageSelector img={img} setImg={setImg} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-7" className="mb-2 me-2">Nombre y parentesco con quien escribe la carta</label>
        <Input id="field-7" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVC1S111Template;
