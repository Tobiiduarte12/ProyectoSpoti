// import React from 'react'

import FirstSection from "../FirstSection/FirstSection";
import HeaderRigth from "../Header/HeaderRigth";
import SecondSection from "../SectionTwo/SecondSection";
import { HeroRigthStyled } from "./HeroRigthStyled";

const HeroRigth = () => {
  return (
    <HeroRigthStyled>
      <HeaderRigth />
      <FirstSection />
      <SecondSection />
    </HeroRigthStyled>
  );
};

export default HeroRigth;
