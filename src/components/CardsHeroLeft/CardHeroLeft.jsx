// import React from 'react'

import { CardContainerStyled, CardInfoStyled } from "./CardsContainerStyled";

// ********* icons *********
import { AiFillPushpin } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function CardHeroLeft({ title, img, canciones, category }) {
  return (
    <CardContainerStyled>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <CardInfoStyled>
          <AiFillPushpin style={{ color: "#1ed760", fontSize: "1rem" }} />
          <p>{category}</p>
          <span>·</span>
          <p>{canciones} canciones</p>
        </CardInfoStyled>
      </div>
    </CardContainerStyled>
  );
}

export default CardHeroLeft;
