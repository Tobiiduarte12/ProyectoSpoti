import { styled } from "styled-components";

export const ReproductorContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: var(--background-press);
  position: fixed;
  bottom: 0;
  color: var(--text-base);
  padding: 0 12px;
`;

export const CancionReproduciendo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-subdued);
  height: 100%;
`;

export const ContenedorControlesStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;
`;

export const IconsControlsContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.6rem;
`;

export const InfoContainerReproducerStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-subdued);
`;

export const LineReproducerStyled = styled.div`
  width: 400px;
  height: 4px;
  background-color: var(--background-tinted-base);
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: var(--background-tinted-highlight);
  }
`;

export const ContenedorVolumenControlesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 20%;
  height: 100%;
`;
