import React from "react";
import Exporter from "../components/Exporter";
import { CARDS_SIN_COMENZAR } from "../lib/constants";
import '../styles/_cartasPorRealizar.scss';

function ExportarCartasPorRealizar() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Generar reporte de cartas por realizar</h2>

        <Exporter state={CARDS_SIN_COMENZAR} />
      </div>
    </div>
  );
}

export default ExportarCartasPorRealizar;