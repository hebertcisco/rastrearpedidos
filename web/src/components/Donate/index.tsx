import React from "react";
import tw from "tailwind-styled-components";

const Donate = () => {
  return (
    <>
      <DonateStyled
        title={"Apoie nosso projeto"}
        href="https://www.buymeacoffee.com/hebertcisco"
      >
        Apoie
      </DonateStyled>
    </>
  );
};
export default Donate;

const DonateStyled = tw.a`
bg-indigo-700 
hover:bg-indigo-500
text-white ml-4 
  py-2 px-3 rounded-lg
`;
