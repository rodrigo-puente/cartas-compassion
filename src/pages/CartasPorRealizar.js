import React from "react";
import Table from "../components/cartas-por-realizar/Table";
import '../styles/_cartasPorRealizar.scss';

function CartasPorRealizar() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Cartas por realizar</h2>
        <Table/>
      </div>
    </div>
  );
}

export default CartasPorRealizar;
