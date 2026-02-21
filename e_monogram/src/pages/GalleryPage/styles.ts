import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 112px;
  background-color: #f6f7f1;

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const MainImageContainer = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3eadf;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ThumbnailList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  margin: 40px 0;
  padding-bottom: 10px;

  /* Smooth scrolling */
  scroll-behavior: smooth;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d4e0d0;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b8cbb0;
  }

  @media (max-width: 768px) {
    margin: 24px 0;
    gap: 0.5rem;
  }
`;

export const Thumbnail = styled.img<{ $active: boolean }>`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$active ? "#26288f" : "transparent")};
  opacity: ${(props) => (props.$active ? 1 : 0.7)};
  transition: all 0.3s ease;
  border-radius: 4px;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const PageTitle = styled.div`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 56px;
  color: #7e5a40;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.div`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 32px;
  color: #7e5a40;
  margin: 24px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 16px 0;
  }
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
`;

export const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
  animation: ${scaleIn} 0.2s ease;
`;

export const LightboxCloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 24px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  font-size: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 1001;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
