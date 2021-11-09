import React, { useState, useEffect, useMemo } from "react";
import { handleInputChange, getData, handleSubmit } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";

function Form({ id, templateId }) {
  const templateConfig = require(`../../configs/${templateId}`);

  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [carta, setCarta] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});

  const CONFIG = useMemo(() => { 
    return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }
  }, [templateConfig?.page1.items, templateConfig?.page2.items]);

  useEffect(() => {
    getData(id, CONFIG, setCarta, setForm);
  }, [id, CONFIG]);

  return (
    <form onSubmit={handleSubmit(id, templateId, carta, form, route, img, imgs, setDisabled, templateConfig.copy)}>
      <div className="row">
        { 
          Object.keys(CONFIG).map((key, index) => {
            if (CONFIG[key].input) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                  <Input id={key} form={form} setForm={setForm} config={CONFIG[key]} />
                </div>
              )
            } else if (CONFIG[key].textarea) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                  <TextArea id={key} form={form} setForm={setForm} config={CONFIG[key]} />
                </div>
              )
            } else if (CONFIG[key].radio) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label className="mb-2">{CONFIG[key].content}</label> 
                  <div className="table-responsive">
                    <table className="table mb-2">
                      <thead>
                        <tr>
                          { 
                            Object.keys(CONFIG[key].options).map((k, ) => {
                              return <th><label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id={k} value={k} name={key} />{CONFIG[key].options[k].content}</label></th>
                            })
                          }
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              )
            } else if (CONFIG[key].is_checkbox) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label className="mb-2">{CONFIG[key].content}</label> 
                  <div className="table-responsive">
                    <table className="table mb-2">
                      <thead>
                        <tr>
                          { 
                            Object.keys(CONFIG[key].options).map((k, i) => {
                              return <th key={`${index}-${i}`}><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id={k} name={k} />{CONFIG[key].options[k].content}</label></th>
                            })
                          }
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              )
            } else if (CONFIG[key].select) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label className="mb-2">{CONFIG[key].content}</label> 
                  <select className="form-control" id={key} name={key} onChange={handleInputChange(form, setForm)}>
                    { 
                      Object.keys(CONFIG[key].options).map((k) => <option value={k}>{CONFIG[key].options[k].content}</option>)
                    }
                  </select>
                </div>
              )
            } else if (CONFIG[key].special_radio) {
              return (
                CONFIG[key].options.forEach((k, i) => {
                  <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={`${index}-${i}`}>
                  <label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} value={k} name={key} />{CONFIG[key].options[k].content}</label>
                  </div>
                })
              )
            } else if (CONFIG[key].image) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor="img" className="mb-2">{CONFIG[key].content}</label><br/>
                  <ImageSelector img={img} setImg={setImg} />
                </div>
              )
            }
            
            return "";
          })
        }
      </div>
      <br/>
      <SharedSelectors imgs={imgs} setImgs={setImgs} route={route} setRoute={setRoute} />
      <div className="form-group mb-4 text-center">
        <button name="submit" type="submit" onSubmit={handleSubmit(id, templateId, carta, form, route, img, imgs, setDisabled, templateConfig.copy)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default Form;
