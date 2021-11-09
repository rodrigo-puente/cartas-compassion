import React, { useState, useEffect, useMemo } from "react";
import {handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";
import templateConfig from "../../configs/SV-D-2S11-1.config";

function SVD2S112Template({ id }) {
  const TEMPLATE_ID = "SV-D-2S11-1";
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
        <label htmlFor="field-1" className="mb-2 me-2">1. Mi último chequeo médico fue en</label>
        <Input id="field-1" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-2" className="mb-2 me-2">2. Para mis chequeos médicos yo fui a</label>
        <Input id="field-2" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-3" className="mb-2 me-2">3. Yo me transporto a mis chequeos médicos</label>
        <Input id="field-3" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-4" className="mb-2 me-2">4. Las siguientes personas fueron a mi chequeo médico conmigo</label>
        <TextArea id="field-4" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-5" className="mb-2 me-2">5. En mi chequeo médico, el médico/enfermera dijo</label>
        <TextArea id="field-5" form={form} setForm={setForm} config={CONFIG} />
      </div> 
      <div className="form-group mb-4">
        <label htmlFor="field-6" className="mb-2 me-2">6. En mi chequeo aprendí que</label>
        <Input id="field-6" form={form} setForm={setForm} config={CONFIG} />
      </div> 
      <div className="form-group mb-4">
        <label className="mb-2">7. Para estar sano yo...</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7-1" value="field-7-1" name="field-7-1" />Hago mucho ejercicio</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7-2" value="field-7-2" name="field-7-2" />Descanso mucho</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7-3" value="field-7-3" name="field-7-3" />Lavo mis manos y cepillo mis dientes</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7-4" value="field-7-4" name="field-7-4" />Como comida sana</label></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-8" className="mb-2 me-2">8. Lo que más me gusta hacer para mantenerme sano es</label>
        <TextArea id="field-8" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="img" className="mb-2">9. Dibuja cómo es tu vida saludable</label><br/>
        <ImageSelector img={img} setImg={setImg} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-9" className="mb-2">10. Compartiendo algo especial o agradecimiento</label><br/>
        <TextArea id="field-9" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} value="field-10-1" name="field-10" />Esta carta está escrita en tercera persona ya que el niño no puede escribir</label>
      </div>
      <div className="form-group mb-4">
        <label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-10-2" name="field-10" />Esta carta está escrita por el niño</label>
      </div>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVD2S112Template;
