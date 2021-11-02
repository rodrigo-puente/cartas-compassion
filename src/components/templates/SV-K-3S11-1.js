import React, { useState, useEffect, useMemo } from "react";
import { handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import TextArea from "../shared/TextArea";
import templateConfig from "../../configs/SV-K-3S11-1.config";
import Input from "../shared/Input";

function SVK3S111Template({ id }) {
  const TEMPLATE_ID = "SV-K-3S11-1";
  const CONFIG = useMemo(() => { return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }}, []);
  const [route, setRoute] = useState("");
  const [img] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});
  const copy = ['field-2'];


  useEffect(() => {
    getData(id, CONFIG, setCarta, setForm);
  }, [id, CONFIG]);

  return (
    <form onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)}>
      <div className="form-group mb-3">
        <label htmlFor="field-1" className="mb-2">1. Indica en qué ciudad o pueblo vives y en qué región del país. ¿Cómo es esta área?</label> 
        <TextArea id="field-1" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-2" className="mb-2">2. ¿Cuántas personas viven en tu en tu casa?</label> 
        <Input id="field-2" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <div className="row">
          <label className="mb-2">2.1 ¿Quiénes son esas personas y qué relación tienen contigo?</label> 
          {
            Array(5).fill(0).map((item, idx) => {
              idx = idx + 1
              return (
                <div className="col-sm-3 col-md-6 mb-4" key={idx}>
                  <div style={ {padding: '10px', backgroundColor: '#005DAA', borderRadius: '5px'} }>
                    <div className="form-group mb-3">
                      <label htmlFor={`field-2-${idx}-A`} className="mb-2">Nombre</label><br/>
                      <input type="text" onChange={handleInputChange(form, setForm)} id={`field-2-${idx}-A`} name={`field-2-${idx}-A`} className="form-control mb-3" maxLength="20"/>
                      <label htmlFor={`field-2-${idx}-B`} className="mb-2">Relación</label> 
                      <input type="text" onChange={handleInputChange(form, setForm)} id={`field-2-${idx}-B`} name={`field-2-${idx}-B`} className="form-control" maxLength="12" />
                    </div>
                  </div>
                </div>
              )
            })
          } 
        </div>     
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-3" className="mb-2">3. Una cosa que realmente disfruto haciendo es</label> 
        <TextArea id="field-3" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-4" className="mb-2">4. Mi sueño para el futuro es</label> 
        <TextArea id="field-4" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-5" className="mb-2">5. Me gustaría compartirte algo acerca de mi ... (Deportes, talleres, estudios, mi vida cristiana etc. )</label> 
        <TextArea id="field-5" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-6" className="mb-2">6. Quisiera que oremos juntos por</label> 
        <TextArea id="field-6" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="field-7" className="mb-2">Escritura individual, sino el niño</label> 
        <Input id="field-7" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-3 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVK3S111Template;
 