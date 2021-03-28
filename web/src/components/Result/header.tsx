import React from "react";
import styled from "styled-components";
interface IHeader {
  codigo: string | string[];
}

const Header: React.FC<IHeader> = ({ codigo }) => {
  return (
    <HeaderStyled className="header">
      <a href="/">
        <LogoStyled src={"images/logo_w.png"} alt={"logo"} />
      </a>
      <TitleStyled>Histórico de rastreamento</TitleStyled>
      {codigo ? (
        <SubTitleStyled>
          Resultado do rastreamento do pedido <code>{codigo}</code>
        </SubTitleStyled>
      ) : (
        <></>
      )}
    </HeaderStyled>
  );
};
export default Header;
const LogoStyled = styled.img`
  width: 350px;
  @media (max-width: 375px) {
    width: 100px;
  }
`;
const SubTitleStyled = styled.h2`
  font-weight: 400;
  font-size: 1.1em;
  color: #cfd7de;
  max-width: 30rem;
  margin: auto;
`;
const TitleStyled = styled.h1`
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: 200;
  font-size: 1.6em;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  @media (min-width: 62em) {
    font-size: 1.9em;
    letter-spacing: 0.2rem;
  }
`;
const HeaderStyled = styled.header`
  height: auto;
  text-align: center;
  background: #101010;
  color: ghostwhite;
  padding: 2.3rem 1rem 2.3rem 1rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -5rem;
    left: 0rem;
    height: 5.1rem;
    display: block;
    width: 100%;
    z-index: 300;
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 0) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  }
`;
