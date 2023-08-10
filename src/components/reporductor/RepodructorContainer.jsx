// import React from 'react'

import {
  CancionReproduciendo,
  ContenedorControlesStyled,
  ContenedorVolumenControlesStyled,
  IconsControlsContainerStyled,
  InfoContainerReproducerStyled,
  LineReproducerStyled,
  ReproductorContainerStyled,
} from "./ReproductorContainerStyled";

// ****** icons ******
import { BiRepeat } from "react-icons/bi";
import { AiOutlineHeart, AiFillPlayCircle, AiFillSound } from "react-icons/ai";
import { PiScreencast, PiDevicesBold } from "react-icons/pi";
import { LiaRandomSolid } from "react-icons/lia";
import { MdSkipNext, MdSkipPrevious, MdLineWeight } from "react-icons/md";
import { BsFilePlay } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";

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
          <LineReproducerStyled></LineReproducerStyled>
          <span> -3:06</span>
        </InfoContainerReproducerStyled>
      </ContenedorControlesStyled>
      <ContenedorVolumenControlesStyled>
        <BsFilePlay />
        <TbMicrophone2 />
        <MdLineWeight />
        <PiDevicesBold />
        <AiFillSound />
        <LineReproducerStyled
          style={{ width: "80px", backgroundColor: "white" }}
        ></LineReproducerStyled>
      </ContenedorVolumenControlesStyled>
    </ReproductorContainerStyled>
  );
};

export default RepodructorContainer;
