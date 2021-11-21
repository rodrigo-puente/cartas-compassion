import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/shared/Table";
import { CARDS_ENVIADAS } from "../lib/constants";
import '../styles/_cartasPorRealizar.scss';

function CartasRealizadas() {
  const [numCartas, setNumCartas] = useState("");

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Cartas realizadas {numCartas}</h2>
        <p className="text-center">
          <Link to="/data-exporter">Generar reporte</Link>
        </p>
        <Table state={CARDS_ENVIADAS} setNumCartas={setNumCartas} />
      </div>
    </div>
  );
}

export default CartasRealizadas;
