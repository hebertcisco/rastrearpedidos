import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="static/svg/mail-307328.svg" alt="" />
            Rastrear Pedidos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sobre">
                  <a className="nav-link">Sobre</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/politica_de_privacidade">
                  <a className="nav-link">Política de privacidade</a>
                </Link>
              </li>
              <li className="nav-item">
                <a href="termos_de_uso" className="nav-link">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
