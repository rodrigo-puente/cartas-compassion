import React from "react";
import { useParams } from 'react-router-dom';
import Vineta from '../components/shared/Vineta';
import SVA1S111Template from "../components/templates/SV-A-1S11-1";
import '../styles/_cartas.scss';

function SVA1S111() {
  const { userId } = useParams();
  const bgStyles = {
    backgroundImage: `url(${require(`../assets/SV-A-1S11-1.png`).default})`,
  }

  return (
    <div className="container-fluid" id="cartas"> 
      <div className="text-center header d-flex flex-column" style={bgStyles}>
        <div className="layer d-flex align-items-center justify-content-center">
          <div>
            <h2 className="text-center">Mi primera carta</h2>
            <small>Plantilla SV-A-1S11-1</small>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-4">
          <div className="col-sm-12 mt-3 mb-3">
            <h3 className="text-center">Estás llenando la carta de</h3>
            <Vineta id={userId}/>
          </div>
          <div className="col-sm-12 mb-5">
            <SVA1S111Template id={userId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SVA1S111;