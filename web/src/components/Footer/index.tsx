import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";

const Footer = () => {
  let $data = new Date();
  let anoAtual = $data.getFullYear();
  return (
    <FooterStyled>
      <p className="w-full text-center my-12 text-gray-600">
        Copyright © {anoAtual}{" "}
        <Link href="https://hebertbarros.me">
          <a>HB.me</a>
        </Link>
      </p>
    </FooterStyled>
  );
};
export default Footer;

const FooterStyled = tw.footer`
w-full  flex items-center justify-center bg-black
`;
