import React from "react";
import { useParams } from 'react-router-dom';
import Vineta from '../components/shared/Vineta';
import SVD1S1112Template from "../components/templates/SV-D-1S11-12";
import '../styles/_cartas.scss';

function SVD1S1112() {
  const { userId } = useParams();
  const bgStyles = {
    backgroundImage: `url(${require(`../assets/SV-D-1S11-12.png`).default})`,
  }

  return (
    <div className="container-fluid" id="cartas"> 
      <div className="text-center header d-flex flex-column" style={bgStyles}>
        <div className="layer d-flex align-items-center justify-content-center">
          <div>
            <h2 className="text-center">Mi aprendizaje cristiano</h2>
            <small>Plantilla SV-D-1S11-12</small>
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
            <SVD1S1112Template id={userId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SVD1S1112;
