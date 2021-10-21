import React from "react";
import Importer from "../components/importar-cartas/Importer";
import '../styles/_cartasPorRealizar.scss';

function CartasRevision() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Importar archivo a revisión</h2>

        <Importer />
      </div>
    </div>
  );
}

export default CartasRevision;