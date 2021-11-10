import React from "react";
import { useParams } from 'react-router-dom';
import Vineta from '../components/shared/Vineta';
import SVE4S011Template from "../components/templates/SV-E-4S01-1";
import '../styles/_cartas.scss';

function SVE4S011() {
  const { userId } = useParams();
  const bgStyles = {
    backgroundImage: `url(${require(`../assets/SV-E-4S01-1.png`).default})`,
  }

  return (
    <div className="container-fluid" id="cartas"> 
      <div className="text-center header d-flex flex-column" style={bgStyles}>
        <div className="layer d-flex align-items-center justify-content-center">
          <div>
            <h2 className="text-center">Compartiendo algo especial o agradecimiento</h2>
            <small>Plantilla SV-E-4S01-1</small>
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
            <SVE4S011Template id={userId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SVE4S011;