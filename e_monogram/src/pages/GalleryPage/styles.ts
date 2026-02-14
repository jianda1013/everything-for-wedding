import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 112px;
  background-color: #f6f7f1;
`;

export const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px;
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
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ThumbnailList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 80px;
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

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

export const PageTitle = styled.div`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 56px;
  color: #7e5a40;
`;

export const SubTitle = styled.div`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 32px;
  color: #7e5a40;
  margin: 24px 0;
  text-align: center;
`;
