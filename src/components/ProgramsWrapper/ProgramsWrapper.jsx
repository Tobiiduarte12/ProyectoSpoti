// import React from 'react'

import { ProgramsContainerStyled } from "../SectionTwo/SecondSectionStyled";

const ProgramsWrapper = () => {
  return (
    <ProgramsContainerStyled>
      <img
        src="/public/images/icon-enEsa.jpeg"
        alt=""
        style={{ height: "100px" }}
      />
      <h3>program 1</h3>
      <span>2 jul. 100min.</span>
    </ProgramsContainerStyled>
  );
};

export default ProgramsWrapper;
