//import "../styles/css/main.css";

import React, { FormEvent, useState } from "react";

import IconSearch from "../components/IconSearch";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Home() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
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
    <>
      <div className="container-home">
        <RefLogoStyled href="/">
          <LogoStyled
            src={width > 360 ? "images/logo_b.png" : "images/logo_w.png"}
            alt={"logo"}
          />
        </RefLogoStyled>
        <form onSubmit={handleRastrear} role="form">
          <div className="inner-form">
            <div className="input-field first-wrap">
              <div className="svg-wrapper">
                <IconSearch />
              </div>
              <input
                id="search"
                type="text"
                name="code"
                value={code}
                placeholder="Digite seu código"
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ): void => {
                  setCode(event.target.value);
                  return;
                }}
                required
                autoFocus
              />
            </div>
            <div className="input-field second-wrap">
              <button className="btn-search" type="submit" id="submit">
                Rastrear
              </button>
            </div>
          </div>
          <span className="info">ex. LB498113226SE</span>
        </form>
      </div>
    </>
  );
}
const RefLogoStyled = styled.a`
  text-align: center;
  justify-content: center;
  position: absolute;
  @media (max-width: 375px) {
    margin-top: 1.8rem;
    text-align: center;
    justify-content: center;
    position: absolute;
  }
  @media (max-width: 360px) {
    margin-top: 2.8rem;
    text-align: center;
    justify-content: center;
    position: absolute;
  }
`;
const LogoStyled = styled.img`
  width: 550px;
  text-align: center;
  justify-content: center;
  @media (max-width: 375px) {
    width: 250px;
  }
  @media (max-width: 360px) {
    width: 250px;
  }
`;
