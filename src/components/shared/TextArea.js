import { handleInputChange } from '../../lib/fileInteractions';

function TextArea({ id, form, setForm, config, color }) {
    return (
      <div>
        <textarea onChange={handleInputChange(form, setForm)} id={id} name={id} cols="30" rows="3" className={`form-control ${color}`} maxLength={config.max} required={config.required !== undefined ? config.required : true}></textarea>
        <small>Máximo de caracteres {form[id]?.length || 0}/{config.max || "???"}</small>
      </div>
    );
  }
  
  export default TextArea;
  