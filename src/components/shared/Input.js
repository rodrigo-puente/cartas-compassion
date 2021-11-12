import { handleInputChange } from '../../lib/fileInteractions';

function Input({ id, form, setForm, config, color }) {
  return (
    <div>
      <input type="text" onChange={handleInputChange(form, setForm)} id={id} name={id} className={`form-control ${color}`} maxLength={config.max} required={config.required !== undefined ? config.required : true}/>
      <small>Máximo de caracteres {form[id]?.length || 0}/{config.max || "???"}</small>
    </div>
  );
}

export default Input;
