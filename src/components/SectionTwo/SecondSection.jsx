// import React from 'react'

import ProgramsWrapper from "../ProgramsWrapper/ProgramsWrapper";
import { SecondSectionStyled } from "./SecondSectionStyled";
import { DataPrograms } from "../../data/DataPrograms";

const SecondSection = () => {
  return (
    <SecondSectionStyled>
      <div>
        <a href="#">Tus programas</a>
        <a href="#">Mostar todos</a>
      </div>
      <ProgramsWrapper>
        {
          // DataPrograms.map((program) => {
          //   return
          // }
        }
      </ProgramsWrapper>
    </SecondSectionStyled>
  );
};

export default SecondSection;
