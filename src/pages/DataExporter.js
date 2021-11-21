import React from "react";
import Exporter from "../components/Exporter";
import { CARDS_ENVIADAS } from "../lib/constants";
import '../styles/_cartasPorRealizar.scss';

function ExportarCartas() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Generar reporte de cartas realizadas</h2>

        <Exporter state={CARDS_ENVIADAS} />
      </div>
    </div>
  );
}

export default ExportarCartas;