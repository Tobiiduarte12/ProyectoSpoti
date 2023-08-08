import { styled } from "styled-components";

export const FirstSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  margin-top: 60px;

  & h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-base);
    margin-bottom: 20px;
  }
`;
