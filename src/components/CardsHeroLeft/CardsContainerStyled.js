import { styled } from "styled-components";

export const CardsHeroLeftStyled = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px);
  color: var(--text-subdued);

  & h3 {
    color: var(--text-base);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const CardContainerStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 0.8rem;

  & img {
    width: 60px;
    border-radius: 15px;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  text-align: center;

  & span {
    font-size: 1.8rem;
    border-radius: 50%;
  }
`;
