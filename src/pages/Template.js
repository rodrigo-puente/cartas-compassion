import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Vineta from '../components/shared/Vineta';
import Form from "../components/shared/Form";
import '../styles/_cartas.scss';

function Template() {
  const { userId, templateId, cardState } = useParams();
  const templateConfig = require(`../configs/${templateId}`);
  const bgStyles = {
    backgroundImage: `url(${require(`./images/${templateId}.png`).default})`,
  }

  useEffect(() => {
    document.getElementById('title-focus').focus();
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="container-fluid" id="cartas"> 
      <div className="text-center header d-flex flex-column" style={bgStyles}>
        <div className="layer d-flex align-items-center justify-content-center">
          <div>
            <h2 className="text-center title" id="title-focus">{templateConfig.extras.title}</h2>
            <small className="subtitle">Plantilla {templateId}</small>
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
            <Form id={userId} templateId={templateId} cardState={cardState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
