import { handleInputChange } from '../../lib/fileInteractions';

function TextArea({ id, form, setForm, config }) {
    return (
      <div>
        <textarea onChange={handleInputChange(form, setForm)} id={id} name={id} cols="30" rows="3" className="form-control" maxLength={config[id]?.max} required></textarea>
        <small>Máximo de caracteres {form[id]?.length || 0}/{config[id]?.max || "???"}</small>
      </div>
    );
  }
  
  export default TextArea;
  