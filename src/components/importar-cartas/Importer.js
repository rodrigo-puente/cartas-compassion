import React, { useState } from "react";
import XLSX from "xlsx";
import { importXLSX } from "../../message-control/renderer";

function Importer() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const fileTypes = [".xlsx", ".xlsb", ".xlsm", ".xls", ".xml", ".csv"].join(",");

  const handleFile = (e) => {
    setLoading(true);
		const reader = new FileReader();
    const files = e.target.files;

    if (!(files && files[0])) {
      setLoading(false);
      return true;
    }

		reader.onload = (e) => {
			/* Parse data */
			const ab = e.target.result;
			const wb = XLSX.read(ab, {type: 'array'});
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* Convert array of arrays */
			const data = XLSX.utils.sheet_to_json(ws, {skipHeader: true});
			/* Update state */
			setData(data);
      setLoading(false);
		}

		reader.readAsArrayBuffer(files[0]);
	}

  const insertData = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await importXLSX(data);
      if (response) {
        alert("Registros insertados con éxito");
      } else {
        throw new Error("DB Error");
      }
    } catch (err) {
      alert("Hubo un error.");
      console.dir(err);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className='offset-md-3 col-md-6'>
          <form className="text-center" onSubmit={insertData}>
            <div className="form-group mb-3">
              <label className="mb-2 text-white">Elige el archivo a importar</label> 
              <input name="file" type="file" className="form-control" accept={fileTypes} required onChange={handleFile} readOnly disabled={loading} />
            </div>
            { loading && 
              <div className="form-group mb-3 text-center">
                <p className="text-warning">Espera, estamos analizando tu archivo...</p>
              </div>
            }
            { data.length !== 0 &&
              <div className="form-group mb-3 text-center">
                <p className="text-white">Estás a punto de importar un archivo con {data.length} registros</p>
                <button name="submit" type="submit" className="btn btn-primary">Importar archivo</button>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Importer;
