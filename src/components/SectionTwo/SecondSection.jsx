// import React from 'react'

// import ProgramsWrapper from "../ProgramsWrapper/ProgramsWrapper";
import {
  CardProgramContainerStyled,
  CardProgramsStyled,
  InfoProgramContainerStyled,
  SecondSectionStyled,
  TitleContainer,
} from "./SecondSectionStyled";
import { DataPrograms } from "../../data/DataPrograms";
// import { CardProgram } from "../CardPrograms/CardProgram";
// import ProgramsWrapper from "../ProgramsWrapper/ProgramsWrapper";

const SecondSection = () => {
  return (
    <SecondSectionStyled>
      <TitleContainer>
        <a href="#">Tus programas</a>
        <a href="#">Mostar todos</a>
      </TitleContainer>
      <CardProgramContainerStyled>
        {DataPrograms.map((program) => {
          const { img, title, fecha, minutos } = program;

          return (
            <CardProgramsStyled key={program.id}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <InfoProgramContainerStyled>
                <p>
                  {fecha}
                  <span> • </span>
                  {minutos}
                </p>
              </InfoProgramContainerStyled>
            </CardProgramsStyled>
          );
        })}
      </CardProgramContainerStyled>
    </SecondSectionStyled>
  );
};

export default SecondSection;
