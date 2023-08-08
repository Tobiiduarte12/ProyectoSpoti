// import React from 'react'

// import CardPlaylist from "../CardsPLaylists/CardPlaylist";
import {
  ButtonPlay,
  CardPlaylistStyled,
  InfoPlaylist,
  PlaylistContainerStyled,
} from "./PlaylistContainerStyled";
import { playlists } from "../../data/DataPlaylist";
import { FaPlay } from "react-icons/fa";

// import { FaPlay } from "react-icons/fa";

const PlaylistContainer = () => {
  return (
    <PlaylistContainerStyled>
      {playlists?.map((playlist) => {
        const { img, title } = playlist;
        return (
          <CardPlaylistStyled key={playlist.id}>
            <img src={img} alt={title} />
            <InfoPlaylist>
              <h4>{title}</h4>
              <ButtonPlay>
                <FaPlay />
              </ButtonPlay>
            </InfoPlaylist>
          </CardPlaylistStyled>
        );
      })}
    </PlaylistContainerStyled>
  );
};

export default PlaylistContainer;
