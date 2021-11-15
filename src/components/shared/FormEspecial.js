import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";

import { submitFormEspecial } from '../../lib/fileInteractions';
import SharedSelectors from "../shared/SharedSelectors";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import ImageSelector from "../shared/ImageSelector";

function Form({ templateId }) {
  const templateConfig = require(`../../configs/${templateId}`);
  const { register, handleSubmit } = useForm();

  const [route, setRoute] = useState("");
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([{img: '', msg: ''}, { img: '', msg: ''}, {img: '', msg: ''}, {img: '', msg: ''}]);
  const [disabled, setDisabled] = useState(false);

  //max excluded
  const colors = (min, max) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return `color-${number}`;
  }

  const onSubmit = (data) => {
    submitFormEspecial(templateId, data, route, img, imgs, setDisabled, templateConfig.extras.copy);
  };

  const CONFIG = useMemo(() => { 
    return { ...templateConfig?.page1.items, ...templateConfig?.page2.items }
  }, [templateConfig?.page1.items, templateConfig?.page2.items]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        { 
          Object.keys(CONFIG).map((key, index) => {
            if (CONFIG[key].input) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                  <Input id={key} register={register} config={CONFIG[key]} color={colors(1,6)} />
                </div>
              )
            } else if (CONFIG[key].textarea) {
              return (
                <div className={`${CONFIG[key].cols || "col-sm-12"} form-group mb-4`} key={index}>
                  <label htmlFor={key} className="mb-2 me-2">{CONFIG[key].content}</label>
                  <TextArea id={key} register={register} config={CONFIG[key]} color={colors(1,6)} />
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
                              return <td key={`${index}-${i}`}><label><input type="radio" className="form-check-input me-2" {...register(key)} id={k} value={k} name={key} />{CONFIG[key].options[k].content}</label></td>
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
                              return <td key={`${index}-${i}`}><label><input type="checkbox" className="form-check-input me-2" {...register(k)} id={k} name={k} />{CONFIG[key].options[k].content}</label></td>
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
                  <select className="form-control" {...register(key)} id={key} name={key}>
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
                          <label><input type="radio" className="form-check-input me-2" {...register(key)} value={k} id={k} name={key} />{CONFIG[key].options[k].content}</label>
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
                                        <input type="text" {...register(`${CONFIG[key].prefix}${idx}${item.sufix}`)} id={`${CONFIG[key].prefix}${idx}${item.sufix}`} name={`${CONFIG[key].prefix}${idx}${item.sufix}`} className="form-control mb-3" maxLength={item.max} />
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
        <button name="submit" type="submit" onSubmit={handleSubmit(onSubmit)} className="btn btn-primary" disabled={disabled}>Guardar cambios y generar PDF</button>
      </div>
    </form>
  );
}

export default Form;