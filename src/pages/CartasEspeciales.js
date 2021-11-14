import React from "react";
import { Link } from 'react-router-dom';
import '../styles/_cartasPorRealizar.scss';
import DoorOpen from '../assets/door-open-solid.svg';
import DoorClosed from '../assets/door-closed-solid.svg';

function CartasPorRealizar() {

  return (
    <div className="container-fluid page">
      <div className="d-flex align-middle flex-column align-items-center">
        <h2 className="text-center mb-5">Cartas especiales</h2>
        <div className="d-flex justify-content-center">
          <div className="mb-5 text-center mx-5">
            <img src={DoorOpen} alt="Carta de iniciativa" height="140" className="mb-3" /><br/>
            <Link className="h5 w-100" to="/especiales/SV-G-6S11-1">Carta de iniciativa</Link>
          </div>
          <div className="mb-5 text-center mx-5">
            <img src={DoorClosed} alt="Carta final" height="140" className="mb-3" /><br/>
            <Link className="h5 w-100" to="/especiales/SV-H-6S11-1">Carta final</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartasPorRealizar;
