import React, { useState, useEffect, useMemo } from "react";
import { handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";
import templateConfig from "../../configs/SV-A-1S11-1.config";

function SVA1S111Template({ id }) {
  const TEMPLATE_ID = "SV-A-1S11-1";
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
      <div class="row">
        { 
          Object.keys(CONFIG).forEach((key) => {
            if (CONFIG[key].input) {
              <div className="col-sm-12 col-md-6 form-group mb-4">
                <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                <Input id={key} form={form} setForm={setForm} config={CONFIG[key]} />
              </div>
            } else if (CONFIG[key].textarea) {
              <div className="col-sm-12 col-md-6 form-group mb-4">
                <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                <TextArea id={key} form={form} setForm={setForm} config={CONFIG[key]} />
              </div>
            } else if (CONFIG[key].radio) {
              <div className="col-sm-12 form-group mb-4">
                <label className="mb-2">{CONFIG[key].content}</label> 
                <div className="table-responsive">
                  <table className="table mb-2">
                    <thead>
                      <tr>
                        { 
                          CONFIG[key].options.forEach((v, k) => {
                            <th><label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id={k} value={k} name={key} />{v.content}</label></th>
                          })
                        }
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            } else if (CONFIG[key].checkbox) {
              <div className="col-sm-12 form-group mb-4">
                <label className="mb-2">{CONFIG[key].content}</label> 
                <div className="table-responsive">
                  <table className="table mb-2">
                    <thead>
                      <tr>
                        { 
                          CONFIG[key].options.forEach((v, k) => {
                            <th><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id={k} name={k} />{v.content}</label></th>
                          })
                        }
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            } else if (CONFIG[key].select) {
              <div className="col-sm-12 col-md-6 form-group mb-3">
                <label className="mb-2">{CONFIG[key].content}</label> 
                <select className="form-control" id={key} name={key} onChange={handleInputChange(form, setForm)}>
                  { 
                    CONFIG[key].options.forEach((v, k) => {
                      <option value={k}>{k}</option>
                    })
                  }
                </select>
              </div>
            } else if (CONFIG[key].special_radio) {
              CONFIG[key].options.forEach((v, k) => {
                <div className="col-sm-12 form-group mb-4">
                  <label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} value={k} name={key} />{value.content}</label>
                </div>
              })
            } else if (CONFIG[key].img) {
              <div className="col-sm-12 col-md-6 form-group mb-4">
                <label htmlFor="img" className="mb-2">{CONFIG[key].content}</label><br/>
                <ImageSelector img={img} setImg={setImg} />
              </div>
            }
          })
        }
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, TEMPLATE_ID, carta, form, route, img, imgs, setDisabled, copy)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default SVA1S111Template;
