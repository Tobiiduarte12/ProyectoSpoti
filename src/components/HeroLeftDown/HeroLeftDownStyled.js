import { styled } from "styled-components";

export const HeroLeftDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #141516;
  margin: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  height: calc(100vh - 220px);
`;

export const HeroLeftDownBiblio = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  :hover {
    color: var(--text-base);
  }
`;

export const SignosContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60px;
  align-items: center;
  justify-content: center;
  a {
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 50%;
    padding: 5px;
  }

  a:hover {
    background-color: var(--background-elevated-base);
    color: var(--text-base);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  :hover {
    background-color: var(--background-elevated-highlight);
    color: var(--text-base);
  }
`;

export const HeroLeftMid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :first-child {
    color: var(--text-base);
    cursor: pointer;
  }
  :first-child:hover {
    background-color: var(--background-elevated-highlight);
    color: var(--text-base);
  }
`;
