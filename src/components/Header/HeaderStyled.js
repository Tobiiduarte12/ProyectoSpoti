import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonHead = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  background-color: var(--background-elevated-base);
  cursor: not-allowed;
  font-size: 1rem;
  color: var(--text-subdued);
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHeadUser = styled(ButtonHead)`
  width: 150px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  gap: 10px;
`;

export const UserHeadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  & img {
    width: 30px;
    border-radius: 50%;
  }
`;
