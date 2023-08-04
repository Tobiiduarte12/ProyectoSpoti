// import React from 'react'

import { CardProgramsStyled } from "./CardProgramsStyled";

const CardProgram = () => {
  return (
    <CardProgramsStyled>
      <img
        src="/public/images/icon-enEsa.jpeg"
        alt=""
        style={{ height: "100px" }}
      />
      <h3>program 1</h3>
      <span>2 jul. 100min.</span>
    </CardProgramsStyled>
  );
};

export default CardProgram;
