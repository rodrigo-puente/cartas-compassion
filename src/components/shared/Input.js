import { calculateLength } from '../../lib/misc';

function Input({ id, register, config, color }) {
  let required = config.required !== undefined ? config.required : true;

  return (
    <div>
      <input type="text" {...register(id)} onChange={calculateLength} id={id} name={id} className={`form-control ${color}`} maxLength={config.max} required={config.required !== undefined ? config.required : true} />
      <small>Máximo de caracteres <span id={`${id}-max`}></span>/{config.max || "???"}</small>
    </div>
  );
}

export default Input;
