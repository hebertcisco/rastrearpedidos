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
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  if (width < 800) {
    return (
      <>
        {/* */}
        <Header codigo={codigo} />
        <div className="bg-white">
          <div className="max-w-xl mx-auto p-8">
            <div className="flow-root">
              <ul className="-mb-8">
                {tracking.map((result) => {
                  return (
                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                        <div className="relative flex items-start space-x-3">
                          <div>
                            <div className="relative px-1">
                              <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                                <svg
                                  className="text-white h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-0">
                            <div className="text-md text-gray-500">
                              <div>
                                <a
                                  href="#"
                                  className="font-medium text-gray-900 mr-2"
                                >
                                  {result.data}
                                </a>
                                <span
                                   
                                  className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                >
                                  <div className="absolute flex-shrink-0 flex items-center justify-center">
                                    <span
                                      className="h-1.5 w-1.5 rounded-full bg-green-500"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-3.5 font-medium text-gray-900">
                                    {codigo}
                                  </div>
                                </span>
                              </div>
                              <span className="whitespace-nowrap text-sm">
                                {`${result?.dataHora}`}
                              </span>
                            </div>
                            <div className="mt-2 text-gray-700">
                              <p>
                                {result?.destino?.cidade &&
                                result?.destino?.uf ? (
                                  <>{`Destino ${result?.destino?.cidade} ${result?.destino?.uf} - `}</>
                                ) : (
                                  <></>
                                )}
                                {`${result?.descricao}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
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
                        <div className="order-1 bg-yellow-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
                          <h3 className="mb-3 font-bold text-blue-600 text-xl">
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
                        <div className="order-1 bg-blue-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                          <h3 className="mb-3 font-bold text-yellow-300 text-xl">
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
