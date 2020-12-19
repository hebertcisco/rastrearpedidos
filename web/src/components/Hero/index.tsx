import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const handleRastrear = (e) => {
    e.preventDefault();
    router.push(`/rastreio?codigo=`);
  };
  return (
    <div
      className="hero-wrap js-fullheight"
      style={{ backgroundImage: `url('static/img/bg_1.jpg')` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="wrapper">
        <input
          type="text"
          className="input"
          placeholder="Digite seu código de rastreio"
        />
        <div className="searchbtn" onClick={handleRastrear}>
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};
export default Hero;
