// import React from 'react'

import { HeroLeftUpContainer, HeroLeftLink } from "./HeroLeftUpStyled";

import { GoHome } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

const HeroLeftUp = () => {
  return (
    <HeroLeftUpContainer>
      <HeroLeftLink href="/#">
        <GoHome style={{ fontSize: "1.7rem" }} />
        Inicio
      </HeroLeftLink>
      <HeroLeftLink href="/#">
        <BsSearch style={{ fontSize: "1.6rem" }} />
        Buscar
      </HeroLeftLink>
    </HeroLeftUpContainer>
  );
};

export default HeroLeftUp;
