import "../../styles/css/form-index.css";

import React, { FormEvent, useState } from "react";

import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const [code, setCode] = useState("");

  const validForm = (code: string) => {
    let valid = false;

    if (code) {
      valid = true;
    } else {
      alert("Favor insira um código válido!");
      return false;
    }
    if (code.length !== 13) {
      alert("O código de rastreio deve conter 13 caracteres.");
      return false;
    }
    return valid;
  };
  async function handleRastrear(event: FormEvent) {
    event.preventDefault();
    if (validForm(code)) {
      try {
        router.push(`/rastreio?codigo=${code}`);
      } catch {
        return new Error();
      }
    }
  }
  return (
    <div
      className="text-center body html"
      data-new-gr-c-s-check-loaded="14.990.0"
      data-gr-ext-installed=""
    >
      <div className="container">
        <div className="text-center d-none d-sm-block">
          <h3 style={{ paddingBottom: "100px", paddingTop: "50px" }}>
            <mark>
              Através deste canal você pode obter informações do rastreio de sua
              encomenda.{" "}
            </mark>
          </h3>
        </div>
        <div className="text-center d-block d-sm-none">
          <h6 style={{ paddingBottom: "50px", paddingTop: "25px" }}>
            <mark>
              Através deste canal você pode obter informações do rastreio de sua
              encomenda.{" "}
            </mark>
          </h6>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-md-auto col">
            <div className="form-login">
              <form
                className="form-signin"
                onSubmit={handleRastrear}
                role="form"
              >
                <h1 className="h3 mb-3 font-weight-normal text-white">
                  Digite seu código de Rastreio
                </h1>

                <p></p>
                <label htmlFor="cpf" className="sr-only">
                  Informe seu código de Rastreio
                </label>
                <input
                  type="text"
                  name="code"
                  className="form-control"
                  placeholder="Digite seu código de rastreio"
                  value={code}
                  onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                  ): void => {
                    setCode(event.target.value);
                    return;
                  }}
                  required
                  autoFocus
                />
                <div className="checkbox mb-3"></div>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  id="submit"
                >
                  <i className="fa fa-search"></i> Rastrear Pedido
                </button>
                <p className="mt-5 mb-3 text-white">
                  * Informações sobre sua compra podem levar até 72h úteis para
                  aparecerem no sistema.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
