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

  //max excluded
  const colors = (min, max) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return `color-${number}`;
  }

  const CONFIG = useMemo(() => { 
    return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }
  }, [templateConfig?.page1.items, templateConfig?.page2.items]);

  useEffect(() => {
    getData(id, CONFIG, setCarta, setForm);
  }, [id, CONFIG]);

  return (
    <form onSubmit={handleSubmit(id, templateId, carta, form, route, img, imgs, setDisabled, templateConfig.extras.copy)}>
      <div className="row">
        { 
          Object.keys(CONFIG).map((key, index) => {
            if (CONFIG[key].input) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                  <Input id={key} form={form} setForm={setForm} config={CONFIG[key]} color={colors(1,6)} />
                </div>
              )
            } else if (CONFIG[key].textarea) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                  <TextArea id={key} form={form} setForm={setForm} config={CONFIG[key]} color={colors(1,6)} />
                </div>
              )
            } else if (CONFIG[key].radio) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label className="mb-2">{CONFIG[key].content}</label> 
                  <div className="table-responsive">
                    <table className="table mb-2">
                      <tbody>
                        <tr>
                          { 
                            Object.keys(CONFIG[key].options).map((k, i) => {
                              return <td key={`${index}-${i}`}><label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id={k} value={k} name={key} />{CONFIG[key].options[k].content}</label></td>
                            })
                          }
                        </tr>
                      </tbody>
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
                      <tbody>
                        <tr>
                          { 
                            Object.keys(CONFIG[key].options).map((k, i) => {
                              return <td key={`${index}-${i}`}><label><input type="checkbox" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} id={k} name={k} />{CONFIG[key].options[k].content}</label></td>
                            })
                          }
                        </tr>
                      </tbody>
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
                      Object.keys(CONFIG[key].options).map((k, i) => <option key={`${index}-${i}`} value={k}>{k}</option>)
                    }
                  </select>
                </div>
              )
            } else if (CONFIG[key].special_radio) {
              return (
                <div key={index}>
                  {
                    Object.keys(CONFIG[key].options).map((k, i) => {
                      return (
                        <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={`${index}-${i}`}>
                          <label><input type="radio" className="form-check-input me-2" onChange={handleInputChange(form, setForm)} value={k} id={k} name={key} />{CONFIG[key].options[k].content}</label>
                        </div>
                      )
                    })
                  }
                </div>
              )
            } else if (CONFIG[key].image) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor="img" className="mb-2">{CONFIG[key].content}</label><br/>
                  <ImageSelector img={img} setImg={setImg} />
                </div>
              )
            } else if (CONFIG[key].repeater) {
              return (
                <div className="form-group mb-3" key={index}>
                  <div className="row">
                    <label className="mb-2">{CONFIG[key].content}</label> 
                    {
                      Array(CONFIG[key].times).fill(0).map((item, idx) => {
                        idx = idx + 1
                        return (
                          <div className="col-sm-3 col-md-6 mb-4" key={`${index}-${idx}`}>
                            <div style={ {padding: '10px', backgroundColor: '#005DAA', borderRadius: '5px'} }>
                              <div className="form-group mb-3">
                                {
                                  CONFIG[key].fields.map((item, i) => {
                                    return(
                                      <div key={`${index}-${idx}-${i}`}>
                                        <label htmlFor={`${CONFIG[key].prefix}${idx}${item.sufix}`} className="mb-2">{item.content}</label><br/>
                                        <input type="text" onChange={handleInputChange(form, setForm)} id={`${CONFIG[key].prefix}${idx}${item.sufix}`} name={`${CONFIG[key].prefix}${idx}${item.sufix}`} className="form-control mb-3" maxLength={item.max} />
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        )
                      })
                    } 
                  </div>      
                </div>
              )
            } else if (CONFIG[key].is_label) {
              return (
                <div className="col-sm-12 form-group mb-3" key={index}>
                  <p>{CONFIG[key].content}</p>
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
        <button name="submit" type="submit" onSubmit={handleSubmit(id, templateId, carta, form, route, img, imgs, setDisabled, templateConfig.extras.copy)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default Form;
