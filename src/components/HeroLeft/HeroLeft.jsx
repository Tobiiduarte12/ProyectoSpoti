// import React from 'react'

import HeroLeftDown from "../HeroLeftDown/HeroLeftDown";
import HeroLeftUp from "../HeroLeftUp/HeroLeftUp";
import { HeroLeftContainer } from "./HeroLeftStyles";

const HeroLeft = () => {
  return (
    <HeroLeftContainer>
      <HeroLeftUp />
      <HeroLeftDown />
    </HeroLeftContainer>
  );
};

export default HeroLeft;
