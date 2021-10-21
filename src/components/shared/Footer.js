import React, {useState, useEffect } from "react";
import { getVersion } from "../../message-control/renderer";
import '../../styles/_footer.scss';

function Footer() {
  const [version, setVersion] = useState("")

  useEffect(() => {
    async function getData() {
      const result = await getVersion();
      setVersion(result);
    }

    getData();
  })
  
  return (
    <div className="container-fluid" id="footer">
      <div className="row">
        <div className="col text-center">
            <p className="text-white">v{version}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
