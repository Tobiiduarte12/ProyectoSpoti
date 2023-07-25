// import React from 'react'

import CardPlaylist from "../CardsPLaylists/CardPlaylist";
import { PlaylistContainerStyled } from "./PlaylistContainerStyled";
// import { playlists } from "../../data/DataPlaylist";

const PlaylistContainer = () => {
  return (
    <PlaylistContainerStyled>
      <CardPlaylist />
      <CardPlaylist />
      <CardPlaylist />
      <CardPlaylist />
    </PlaylistContainerStyled>
  );
};

export default PlaylistContainer;
