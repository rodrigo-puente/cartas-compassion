function Input({ id, handleInputChange, form, setForm, config }) {
  return (
    <div>
      <input type="text" onChange={handleInputChange(form, setForm)} id={id} name={id} className="form-control" maxLength={config[id]} />
      <small>Máximo de caracteres {form[id]?.length || 0}/{config[id]?.max || "???"}</small>
    </div>
  );
}

export default Input;
