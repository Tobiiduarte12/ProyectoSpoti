// import React from 'react'

import CardHeroLeft from "./CardHeroLeft";
import { CardsHeroLeftStyled } from "./CardsContainerStyled";

// *********** data ***********
import { playlists } from "../../data/DataPlaylist";

const CardsHeroLeftContain = () => {
  return (
    <CardsHeroLeftStyled>
      {playlists.map((category) => {
        return <CardHeroLeft key={category.id} {...category} />;
      })}
    </CardsHeroLeftStyled>
  );
};

export default CardsHeroLeftContain;
