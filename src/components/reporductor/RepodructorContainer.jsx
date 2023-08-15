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
import { AiOutlineHeart, AiFillPlayCircle } from "react-icons/ai";
import { PiScreencast } from "react-icons/pi";
import { LiaRandomSolid } from "react-icons/lia";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
// import { BsFilePlay } from "react-icons/bs";
// import { TbMicrophone2 } from "react-icons/tb";
import VolumenComp from "../VolumenUi/VolumenComp";
import { Slider } from "@mui/material";

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
        {/* <BsFilePlay />
        <TbMicrophone2 />
        <MdLineWeight />
        <PiDevicesBold />
        <AiFillSound /> */}
        {/* <LineReproducerStyled
          style={{ width: "80px", backgroundColor: "white" }}
        ></LineReproducerStyled> */}
        <VolumenComp />
      </ContenedorVolumenControlesStyled>
    </ReproductorContainerStyled>
  );
};

export default RepodructorContainer;
