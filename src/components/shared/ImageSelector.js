import { handleImg, cleanImg } from '../../lib/fileInteractions';

function ImageSelector({ img, setImg }) {
  return (
    <div>
      <input type="text" onClick={handleImg(setImg)} value={img} id="img" name="img"  className="form-control" readOnly />
      <button onClick={cleanImg(setImg)} type="button" className="btn btn-link">Limpiar</button>
    </div>
  );
}

export default ImageSelector;