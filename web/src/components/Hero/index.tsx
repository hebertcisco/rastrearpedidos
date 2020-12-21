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
      className="hero-wrap js-fullheight"
      style={{
        backgroundImage: `url('https://rastrearpedidos.web.app/img/bg_1.jpg')`,
      }}
      data-stellar-background-ratio="0.5"
    >
      <form className="wrapper" onSubmit={handleRastrear}>
        <input
          type="text"
          className="input"
          placeholder="Digite seu código de rastreio"
          value={code}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setCode(event.target.value);
            return;
          }}
        />
        <div className="searchbtn" onClick={handleRastrear}>
          <i className="fa fa-search"></i>
        </div>
      </form>
    </div>
  );
};
export default Hero;
