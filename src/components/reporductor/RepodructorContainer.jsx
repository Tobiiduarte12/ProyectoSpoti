// import React from 'react'

import {
  CancionReproduciendo,
  ContenedorControlesStyled,
  ContenedorVolumenControlesStyled,
  IconsControlsContainerStyled,
  InfoContainerReproducerStyled,
  // LineReproducerStyled,
  ReproductorContainerStyled,
} from "./ReproductorContainerStyled";

// ****** icons ******
import { BiRepeat } from "react-icons/bi";
import { AiOutlineHeart, AiFillPlayCircle, AiFillSound } from "react-icons/ai";
import { PiDevicesBold, PiScreencast } from "react-icons/pi";
import { LiaRandomSolid } from "react-icons/lia";
import { MdLineWeight, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFilePlay } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import VolumenComp from "../VolumenUi/VolumenComp";
import { Slider } from "@mui/material";
// import { BsFilePlay } from "react-icons/bs";

const RepodructorContainer = () => {
  return (
    <ReproductorContainerStyled>
      <CancionReproduciendo>
        <img
          src="/public/images/icon-enEsa.jpeg"
          alt=""
          style={{ width: "60px" }}
        />
        <div>
          <h2>Con un beso</h2>
          <p>KHEA</p>
        </div>
        <AiOutlineHeart style={{ color: "green" }} />
        <PiScreencast />
      </CancionReproduciendo>
      <ContenedorControlesStyled>
        <IconsControlsContainerStyled>
          <LiaRandomSolid
            style={{ color: "var(--text-subdued)", fontSize: "1.1rem" }}
          />
          <MdSkipPrevious />
          <AiFillPlayCircle style={{ fontSize: "2.4rem" }} />
          <MdSkipNext />
          <BiRepeat
            style={{ color: "var(--text-subdued)", fontSize: "1.1rem" }}
          />
        </IconsControlsContainerStyled>
        <InfoContainerReproducerStyled style={{ display: "flex", gap: "10px" }}>
          <span>0:00</span>
          <Slider
            aria-label="Temperature"
            defaultValue={0}
            color="secondary"
            style={{ width: "500px", color: "var(--text-subdued)" }}
          />
          <span> -3:06</span>
        </InfoContainerReproducerStyled>
      </ContenedorControlesStyled>
      <ContenedorVolumenControlesStyled>
        <BsFilePlay style={{ fontSize: "1.5rem" }} />
        <TbMicrophone2 style={{ fontSize: "1.5rem" }} />
        <MdLineWeight style={{ fontSize: "1.5rem" }} />
        <PiDevicesBold style={{ fontSize: "1.5rem" }} />
        <AiFillSound style={{ fontSize: "1.5rem" }} />
        <VolumenComp />
      </ContenedorVolumenControlesStyled>
    </ReproductorContainerStyled>
  );
};

export default RepodructorContainer;
