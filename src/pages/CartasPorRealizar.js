import React from "react";
import Table from "../components/shared/Table";
import { CARDS_SIN_COMENZAR } from "../lib/constants";
import '../styles/_cartasPorRealizar.scss';

function CartasPorRealizar() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Cartas por realizar</h2>
        <Table state={CARDS_SIN_COMENZAR} />
      </div>
    </div>
  );
}

export default CartasPorRealizar;
