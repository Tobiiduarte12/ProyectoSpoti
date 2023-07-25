// import React from "react";

import HeroLeft from "../HeroLeft/HeroLeft";
import HeroRigth from "../HeroRigth/HeroRigth";
import { AppWrapperStyled } from "./AppWrapperStyled";

const AppWrapper = () => {
  return (
    <AppWrapperStyled>
      <HeroLeft />
      <HeroRigth />
    </AppWrapperStyled>
  );
};

export default AppWrapper;
