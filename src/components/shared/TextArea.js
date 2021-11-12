import { calculateLength } from '../../lib/misc';

function TextArea({ id, register, config, color }) {
  let required = config.required !== undefined ? config.required : true;
  
  return (
      <div>
      <textarea {...register(id)} onChange={calculateLength} id={id} name={id} cols="30" rows="3" className={`form-control ${color}`} maxLength={config.max} required={config.required !== undefined ? config.required : true} ></textarea>
      <small>Máximo de caracteres <span id={`${id}-max`}></span>/{config.max || "???"}</small>
    </div>
  );
}
  
export default TextArea;
  