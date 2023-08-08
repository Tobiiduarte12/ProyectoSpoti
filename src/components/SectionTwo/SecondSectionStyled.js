import { styled } from "styled-components";

export const SecondSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 20px;

  & a:nth-child(1) {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    transition: all 0.1s ease-in-out;
    &:hover {
      border-bottom: 1px solid #ffff;
    }
  }

  & a:nth-child(2) {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-subdued);
    &:hover {
      border-bottom: 1px solid var(--text-subdued);
    }
  }
`;

export const CardProgramContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const CardProgramsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 220px;
  background-color: #181818;
  border-radius: 10px;
  margin: 10px;
  padding: 16px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
