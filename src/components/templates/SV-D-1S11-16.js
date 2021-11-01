import React, { useState, useEffect, useMemo } from "react";
import { handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";
import templateConfig from "../../configs/SV-D-1S11-16.config";

function SVD1S1116Template({ id }) {
  const TEMPLATE_ID = "SV-D-1S11-16";
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
        <label className="mb-2">1. Mi comida favorita es</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-1" name="field-1-1" />Frutas</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-2" name="field-1-2" />Vegetales</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-3" name="field-1-3" />Carnes</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-4" name="field-1-4" />Sopas</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-5" name="field-1-5" />Pollo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-1-6" name="field-1-6" />Frijoles</label></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-sm-12 col-md-4">
          <label htmlFor="field-1-7" className="mb-2 me-2">Otro</label>
          <Input id="field-1-7" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">2. Mi deporte favorito es</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-1" name="field-2-1" />Baloncesto</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-2" name="field-2-2" />Baseball</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-3" name="field-2-3" />Natación</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-4" name="field-2-4" />Futbol</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-2-5" name="field-2-5" />Voleibol</label></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-sm-12 col-md-4">
          <label htmlFor="field-2-6" className="mb-2 me-2">Otro</label>
          <Input id="field-2-6" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group">
        <label className="mb-2">3. Mis versículos favoritos de la biblia son</label> 
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-3-1" className="mb-2">Antiguo testamento</label><br/>
            <TextArea id="field-3-1" form={form} setForm={setForm} config={CONFIG} />
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="field-3-2" className="mb-2">Nuevo testamento</label><br/>
            <TextArea id="field-3-2" form={form} setForm={setForm} config={CONFIG} />
          </div>
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="mb-2">4. Mis animales favoritos son</label> 
        <div className="table-responsive">
          <table className="table mb-2">
            <thead>
              <tr>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-1" name="field-4-1" />Vaca</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-2" name="field-4-2" />Caballo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-3" name="field-4-3" />Pollo</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-4" name="field-4-4" />Perro</label></th>
                <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-4-5" name="field-4-5" />Gato</label></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-sm-12 col-md-4">
          <label htmlFor="field-4-6" className="mb-2 me-2">Otro</label>
          <Input id="field-4-6" form={form} setForm={setForm} config={CONFIG} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="field-5" className="mb-2">5. Un mensaje a mi patrocinador</label><br/>
        <TextArea id="field-5" form={form} setForm={setForm} config={CONFIG} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="img" className="mb-2">6. Adjunta un dibujo</label><br/>
        <ImageSelector img={img} setImg={setImg} />
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-6" name="field-6" />Esta carta está escrita en tercera persona ya que el niño no puede escribir</label>
      </div>
      <div className="form-group mb-4">
        <label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id="field-7" name="field-7" />Esta carta está escrita por el niño</label>
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVD1S1116Template;
