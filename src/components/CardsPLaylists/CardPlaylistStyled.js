import { styled } from "styled-components";

export const CardPlaylistStyled = styled.div`
  background-color: var(--background-tinted-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 240px;
  height: 90px;
  border-radius: 10px;

  & img {
    width: 100px;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }
`;

export const InfoPlaylist = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s ease-in-out;

  & button {
    display: none;
  }

  &:hover {
    & button {
      display: flex;
    }
  }

  & h4 {
    font-size: 0.8rem;
    color: var(--text-base);
    text-align: start;
    display: flex;
    align-items: center;
    width: 60px;
    height: 100%;
    overflow: hidden;
  }
`;

export const ButtonPlay = styled.button`
  background-color: var(--essential-positive);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;
