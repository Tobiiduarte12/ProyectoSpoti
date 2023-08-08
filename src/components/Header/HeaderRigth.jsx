// import React from 'react'

import {
  BtnContainer,
  ButtonHead,
  ButtonHeadUser,
  HeaderStyled,
  UserHeadContainer,
} from "./HeaderStyled";

// ******** icons ********
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const HeaderRigth = () => {
  return (
    <HeaderStyled>
      <BtnContainer>
        <ButtonHead>
          <SlArrowLeft />
        </ButtonHead>
        <ButtonHead>
          <SlArrowRight />
        </ButtonHead>
      </BtnContainer>
      <UserHeadContainer>
        <ButtonHeadUser>
          <MdOutlineDownloadForOffline />
          Instalar app
        </ButtonHeadUser>
        <a href="#" style={{ color: "white" }}>
          Iniciar Sesión
        </a>
      </UserHeadContainer>
    </HeaderStyled>
  );
};

export default HeaderRigth;
