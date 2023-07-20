import { styled } from "styled-components";

export const FirstBtn = styled.button`
  background-color: var(--background-elevated-base);
  color: var(--text-base);
  border: none;
  border-radius: 20px;
  padding: 8px 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.8rem;
  font-weight: 500;
  :hover {
    background-color: var(--background-elevated-highlight);
    color: var(--text-base);
  }
`;
