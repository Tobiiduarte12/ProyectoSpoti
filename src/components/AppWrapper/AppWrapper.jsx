// import React from "react";

import HeroLeft from "../HeroLeft/HeroLeft";
import HeroRigth from "../HeroRigth/HeroRigth";
import RepodructorContainer from "../reporductor/RepodructorContainer";
import { AppWrapperStyled } from "./AppWrapperStyled";

const AppWrapper = () => {
  return (
    <AppWrapperStyled>
      <HeroLeft />
      <HeroRigth />
      <RepodructorContainer />
    </AppWrapperStyled>
  );
};

export default AppWrapper;
