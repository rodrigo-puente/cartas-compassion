import React from "react";
import { useParams } from 'react-router-dom';
import FormEspecial from "../components/shared/FormEspecial";
import '../styles/_cartas.scss';

function Template() {
  const { templateId } = useParams();
  const templateConfig = require(`../configs/${templateId}`);

  return (
    <div className="container-fluid" id="cartas"> 
      <div className="text-center header d-flex flex-column">
        <div className="layer d-flex align-items-center justify-content-center">
          <div>
            <h2 className="text-center title">{templateConfig.extras.title}</h2>
            <small className="subtitle">Plantilla {templateId}</small>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-4">
          <div className="col-sm-12 mb-5">
            <FormEspecial templateId={templateId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;