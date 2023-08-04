import { styled } from "styled-components";

export const CardProgramsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
