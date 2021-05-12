import { ICode } from "../../utils/types";
import React from "react";
import Donate from "../Donate";

import tw from "tailwind-styled-components";
interface IHeader {
  codigo: ICode;
}

const Header: React.FC<IHeader> = ({ codigo }) => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <HeaderStyled>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {width > 800 ? (
          <>
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <NavLinkStyled
                href={"https://github.com/hebertcisco/rastrearpedidos"}
              >
                Github
              </NavLinkStyled>
              <NavLinkStyled
                href={`https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=${codigo}`}
              >
                API
              </NavLinkStyled>
              <small>
                Resultado para: <code>{codigo}</code>
              </small>
            </nav>
          </>
        ) : (
          <></>
        )}

        <LogoStyled href={"/"}>
          <img
            src="images/logo_w.png"
            style={{ height: 40, marginTop: 10, marginBottom: 10 }}
            alt="logo"
          />
        </LogoStyled>
        {width > 800 ? (
          <>
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
              <Donate />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </HeaderStyled>
  );
};
export default Header;

const HeaderStyled = tw.header`
  text-gray-100 
  bg-gray-900 
  body-font 
  shadow w-full
`;
const LogoStyled = tw.a`
  flex 
  order-first 
  lg:order-none 
  lg:w-1/5 
  title-font 
  font-medium 
  items-center 
  lg:items-center 
  lg:justify-center 
  mb-4 md:mb-0
`;
const NavLinkStyled = tw.a`
  mr-5 
  hover:text-gray-300 
  cursor-pointer 
  border-b 
  border-transparent 
  hover:border-indigo-600
`;
