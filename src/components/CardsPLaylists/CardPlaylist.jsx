// import React from 'react'

import {
  ButtonPlay,
  CardPlaylistStyled,
  InfoPlaylist,
} from "./CardPlaylistStyled";

// ******* icons *******
import { FaPlay } from "react-icons/fa";

const CardPlaylist = () => {
  return (
    <CardPlaylistStyled>
      <img src="./images/icon-enEsa.jpeg" alt="" />
      <InfoPlaylist>
        <h4>texto de la playlist</h4>
        <ButtonPlay>
          <FaPlay />
        </ButtonPlay>
      </InfoPlaylist>
    </CardPlaylistStyled>
  );
};

export default CardPlaylist;
