import React from "react";
import Importer from "../components/importar-cartas/Importer";
import '../styles/_cartasPorRealizar.scss';

function ImportarCartas() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Importar cartas</h2>

        <Importer />
      </div>
    </div>
  );
}

export default ImportarCartas;