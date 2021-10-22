import React from "react";
import Table from "../components/shared/Table";
import { CARDS_ENVIADAS } from "../lib/constants";
import '../styles/_cartasPorRealizar.scss';

function CartasRealizadas() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Cartas realizadas</h2>
        <Table state={CARDS_ENVIADAS} />
      </div>
    </div>
  );
}

export default CartasRealizadas;
