import styled, { keyframes, css } from "styled-components";
import coverPhoto from "../../../assets/cover_photo.jpg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeroSectionContainer = styled.header<{ $visible: boolean }>`
  position: relative;
  height: 900px;
  background-image: url(${coverPhoto});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  gap: 32px;
  padding-bottom: 54px;
  opacity: 0;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeIn} 1.2s ease forwards;
    `}

  @media (max-width: 768px) {
    height: 100vh;
    padding-bottom: 32px;
    gap: 16px;
  }
`;

export const HeroTitle = styled.div<{ $visible: boolean }>`
  font-size: 101px;
  font-weight: normal;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-family: Montaga, Arial, sans-serif;
  opacity: 0;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${slideInFromRight} 0.9s ease 0.5s forwards;
    `}

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const HeroDate = styled.div<{ $visible: boolean }>`
  font-size: 24px;
  letter-spacing: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  opacity: 0;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${slideInFromRight} 0.9s ease 0.8s forwards;
    `}

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
