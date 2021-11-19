import React, { useState } from "react";
import Table from "../components/shared/Table";
import { CARDS_SIN_COMENZAR } from "../lib/constants";
import '../styles/_cartasPorRealizar.scss';

function CartasPorRealizar() {
  const [numCartas, setNumCartas] = useState("");

  return (
    <div className="container-fluid page">
      <div className="">
        <h2 className="text-center mb-3">Cartas por realizar {numCartas} </h2>
        <Table state={CARDS_SIN_COMENZAR} setNumCartas={setNumCartas} />
      </div>
    </div>
  );
}

export default CartasPorRealizar;
