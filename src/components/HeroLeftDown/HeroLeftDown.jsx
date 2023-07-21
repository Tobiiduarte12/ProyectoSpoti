// import React from 'react'
import { GiBookshelf } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";

import { HeroLeftLink } from "../HeroLeftUp/HeroLeftUpStyled";
import {
  ButtonsContainer,
  HeroLeftDownBiblio,
  HeroLeftDownContainer,
  HeroLeftMid,
  SignosContainer,
} from "./HeroLeftDownStyled";
import { FirstBtn } from "../Button/FirstButtonStyle";
import CardsHeroLeftContain from "../CardsHeroLeft/CardsHeroLeftContain";

const HeroLeftDown = () => {
  return (
    <HeroLeftDownContainer>
      <HeroLeftDownBiblio>
        <HeroLeftLink href="/#" style={{ fontSize: "1rem", width: "200px" }}>
          <GiBookshelf style={{ fontSize: "2rem" }} />
          Tu biblioteca
        </HeroLeftLink>
        <SignosContainer>
          <HeroLeftLink>
            <IoMdAdd />
          </HeroLeftLink>
          <HeroLeftLink>
            <AiOutlineArrowRight />
          </HeroLeftLink>
        </SignosContainer>
      </HeroLeftDownBiblio>
      <ButtonsContainer>
        <FirstBtn>Playlist</FirstBtn>
        <FirstBtn>Artistas</FirstBtn>
        <FirstBtn>Álbunes</FirstBtn>
        <FirstBtn>Podcasts y programas</FirstBtn>
      </ButtonsContainer>
      <HeroLeftMid>
        <BsSearch />
        <HeroLeftLink href="/#" style={{ gap: "0", width: "auto" }}>
          Recientes <BiSolidDownArrow />
        </HeroLeftLink>
      </HeroLeftMid>
      <CardsHeroLeftContain></CardsHeroLeftContain>
    </HeroLeftDownContainer>
  );
};

export default HeroLeftDown;
