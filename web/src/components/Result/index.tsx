import { ICode, IRastreio } from "../../utils/types";
import React, { useEffect, useState } from "react";

import axios from "axios";

const Result: React.FC<ICode> = ({ codigo }) => {
  const [rastreio, setRastreio] = useState([]);

  useEffect(() => {
    axios.get(`api/rastreio/v1/${codigo}`).then((response: any) => {
      setRastreio(response.data);
    });
  }, []);

  if (rastreio.length < 1) {
    console.log("Código iválido!");
    return (
      <div className="container">
        <p>...</p>
      </div>
    );
  } else {
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Data/Hora</th>
              <th>Status</th>
              <th>Local</th>
            </tr>
          </thead>
          <tbody>
            {rastreio.map((rastreio: IRastreio) => {
              return (
                <tr>
                  <td>{rastreio.dataHora}</td>
                  <td>{rastreio.descricao}</td>
                  <td>{rastreio.cidade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};
export default Result;
