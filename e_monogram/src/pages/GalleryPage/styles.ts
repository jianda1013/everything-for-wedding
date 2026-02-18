import styled from "styled-components";

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
