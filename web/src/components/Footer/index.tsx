import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  let $data = new Date();
  let anoAtual = $data.getFullYear();
  return (
    <FooterStyled className="footer l-box is-center">
      Copyright &copy;
      {anoAtual}, Feito por{" "}
      <Link href="https://hebertbarros.me/">
        <a
          style={{ color: "#fff" }}
          hrefLang="pt_BR"
          rel="external"
          target="_blank"
        >
          HB.me
        </a>
      </Link>
    </FooterStyled>
  );
};
export default Footer;

const FooterStyled = styled.footer`
  background: #111;
  color: #eee;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  padding: 1.2rem;
`;
