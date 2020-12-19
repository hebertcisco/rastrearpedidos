import { IFooter, IProject, ISocial } from "../../utils/types";

import Link from "next/link";
import React from "react";

const Footer: React.FC<IFooter> = ({ title, desc, social, projects, help }) => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  let projectsMax: number;
  if (width < 500) {
    projectsMax = projects.length;
  } else {
    projectsMax = projects.length = 2;
  }
  let $data = new Date();
  let anoAtual = $data.getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">{title}</h2>
            <p>{desc}</p>
            <ul className="ftco-footer-social p-0">
              {social.map((social: ISocial) => {
                return (
                  <li className="ftco-animate" key={social.icon}>
                    <a
                      href={social.ref}
                      data-toggle="tooltip"
                      data-placement="top"
                      title={social.name}
                    >
                      <span className={social.icon}></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">Outros projetos</h2>

            {projects.map((projects: IProject) => {
              return (
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="img mr-4 rounded"
                    style={{ backgroundImage: `url(${projects.image})` }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href={projects.links[0].href}>{projects.desc}</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">{projects.date}</a>
                      </div>
                      <div>
                        <a href="#">{projects.place}</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
            <h2 className="footer-heading">Links Úteis</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/">
                  <a className="py-2 d-block">Início</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="py-2 d-block">Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/politica_de_privacidade">
                  <a className="py-2 d-block">Política de privacidade</a>
                </Link>
              </li>
              <li>
                <Link href="/termos_de_uso">
                  <a className="py-2 d-block">Termos de uso</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <h2 className="footer-heading">Tem dúvidas ou sugestões?</h2>
            <div className="block-23 mb-3">
              <ul>
                {help.map((help: ISocial) => {
                  return (
                    <li>
                      <a href={help.ref}>
                        <span className={`icon ${help.icon}`}></span>
                        <span className="text">{help.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="copyright">
              Copyright &copy;
              {anoAtual} Feito com{" "}
              <i className="fa fa-heart" aria-hidden="true"></i> por{" "}
              <a href="https://hebertbarros.me/" target="_blank">
                HB.me
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
