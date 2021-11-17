import { handleImg, cleanImg } from '../../lib/fileInteractions';

function ImageSelector({ id, setValue, register }) {
  return (
    <div>
      <input type="text" {...register(id)} onClick={ handleImg(setValue, id) } id={id} name={id}  className="form-control" readOnly />
      <button onClick={cleanImg(setValue, id)} type="button" className="btn btn-link">Limpiar</button>
    </div>
  );
}

export default ImageSelector;