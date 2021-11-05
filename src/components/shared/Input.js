import { handleInputChange } from '../../lib/fileInteractions';

function Input({ id, form, setForm, config }) {
  return (
    <div>
      <input type="text" onChange={handleInputChange(form, setForm)} id={id} name={id} className="form-control" maxLength={config[id]?.max} required />
      <small>Máximo de caracteres {form[id]?.length || 0}/{config[id]?.max || "???"}</small>
    </div>
  );
}

export default Input;
