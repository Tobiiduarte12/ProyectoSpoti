import styled from "styled-components";

export const HeroLeftUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #141516;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  :hover {
    color: var(--text-base);
  }
`;

export const HeroLeftLink = styled.a`
  color: var(--text-subdued);
  font-size: 0.9rem;
  display: flex;
  gap: 20px;
  font-weight: 700;
  align-items: center;
  width: 120px;
  transition: all 0.2s ease-in-out;
`;
