import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #e3eadf 480px, #f7f7f2 480px);

  @media (max-width: 768px) {
    background: linear-gradient(to bottom, #e3eadf 300px, #f7f7f2 300px);
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 60px 60px 60px;

  @media (max-width: 768px) {
    padding: 60px 20px 40px 20px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
  align-items: flex-start;
  padding: 0 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
  }
`;

export const GroomSectionContainer = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  padding: 0 0 0 60px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const BrideSectionContainer = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  padding: 0 60px 0 0;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 40px;
    align-items: flex-start;
  }
`;

export const StoryTitle = styled.h1`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 36px;
  color: #5a4a42;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const GroomContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 40px;
  position: relative;
  top: 30px;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    top: 0;
    width: 100%;
    align-items: center;
  }
`;

export const BrideContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  margin-top: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 0;
    width: 100%;
    align-items: center;
  }
`;

export const PersonImage = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
  }
`;

export const PersonName = styled.div`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  color: #5a4a42;
  text-align: left;
  margin-top: 20px;

  & > div:first-child {
    font-size: 24px;
    margin-bottom: 8px;
  }

  & > div:last-child {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;

    & > div:first-child {
      font-size: 18px;
    }

    & > div:last-child {
      font-size: 24px;
    }
  }
`;

export const CoupleContainer = styled.div`
  display: flex;
  position: relative;
  padding: 0 20px;
`;

export const PersonCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  z-index: 1;
`;

export const RightPersonCard = styled(PersonCard)`
  align-self: flex-start;
  margin-top: 240px;
  margin-left: -240px;

  @media (max-width: 768px) {
    margin: 0;
    align-self: center;
  }
`;
