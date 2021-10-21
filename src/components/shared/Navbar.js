import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getVersion } from "../../message-control/renderer";
import '../../styles/_navbar.scss';
import Letter from  '../../assets/envelope-regular.svg';
import OpenLetter from '../../assets/envelope-open-regular.svg';
import NewFile from '../../assets/file-excel-regular.svg';


function Navbar() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await getVersion();
      setVersion(result);
    }

    getData();
  });

  return (
    <div className="container-fluid" id="navbar">
      <div className="row">
        <div className="col text-center">
          <Link to="/">
            <img src={Letter} alt="Cartas por realizar" /> <br/>
            Ver cartas por realizar
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/realizadas">
            <img src={OpenLetter} alt="Cartas realizadas" /> <br/>
            Ver cartas realizadas
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/importar">
            <img src={NewFile} alt="Nuevo archivo" /> <br/>
            Importar nuevo archivo
          </Link>
        </div>
      </div>
      <div className="row text-center">
        <small className="text-warning pt-2">v{version}</small>
      </div>
    </div>
  );
}

export default Navbar;
