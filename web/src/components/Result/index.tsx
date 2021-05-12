import { ICode, IRastreio, IRastreios } from "../../utils/types";
import React, { useState } from "react";

import Footer from "../Footer";
import Header from "./header";
import styled from "styled-components";
import oddEven from "../../utils/oddEven";
interface IRastreiosProps {
  tracking?: IRastreios[];
  codigo?: ICode;
}
const Result: React.FC<IRastreiosProps> = ({ codigo, tracking }) => {
  const [inError, setInError] = useState(false);

  let lastStatus: IRastreio = tracking?.shift();

  function IsDelivered() {
    if (lastStatus?.descricao) {
      return true;
    } else {
      return false;
    }
  }
  IsDelivered();

  if (tracking[0]?.error) {
    return <></>;
  } else {
    return (
      <>
        <Header codigo={codigo} />
        <div className="container   mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            />

            {tracking.map((result) => {
              return (
                <>
                  {oddEven(tracking.indexOf(result)) == "odd" ? (
                    <>
                      <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                          <h1 className="mx-auto font-semibold text-lg text-white">
                            {result.data}
                          </h1>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                          <h3 className="mb-3 font-bold text-gray-800 text-xl">
                            {`${result?.dataHora}`}
                          </h3>
                          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                            {result?.destino?.cidade && result?.destino?.uf ? (
                              <>{`Destino ${result?.destino?.cidade} ${result?.destino?.uf} - `}</>
                            ) : (
                              <></>
                            )}
                            {`${result?.descricao}`}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                          <h1 className="mx-auto text-white font-semibold text-lg">
                            {" "}
                            {result.data}
                          </h1>
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                          <h3 className="mb-3 font-bold text-white text-xl">
                            {" "}
                            {`${result?.dataHora}`}{" "}
                          </h3>
                          <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                            {" "}
                            {result?.destino?.cidade && result?.destino?.uf ? (
                              <>{`Destino ${result?.destino?.cidade} ${result?.destino?.uf} - `}</>
                            ) : (
                              <></>
                            )}
                            {`${result?.descricao}`}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>

        <Footer />
      </>
    );
  }
};
export default Result;

const SectionStyledTitle = styled.h3`
  position: -webkit-sticky;
  position: sticky;
  top: 5rem;
  color: #888;
  margin: 0;
  font-weight: 400;
  font-size: 1em;
  @media (min-width: 62em) {
    font-size: 1.1em;
  }
`;
