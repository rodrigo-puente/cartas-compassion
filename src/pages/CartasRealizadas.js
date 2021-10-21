import React from "react";
import Table from "../components/cartas-realizadas/Table";
import '../styles/_cartasPorRealizar.scss';

function CartasRealizadas() {

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Cartas realizadas</h2>
        <Table/>
      </div>
    </div>
  );
}

export default CartasRealizadas;
