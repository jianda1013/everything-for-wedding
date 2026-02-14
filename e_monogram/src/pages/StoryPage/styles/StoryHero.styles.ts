import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #e3eadf 480px, #f7f7f2 480px);
`;

export const TitleContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 60px 60px 60px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
  align-items: flex-start;
`;

export const GroomSectionContainer = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  padding: 0 0 0 60px;
  display: flex;
  flex-direction: column;
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
`;

export const StoryTitle = styled.h1`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 36px;
  color: #5a4a42;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
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
`;

export const PersonImage = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

export const PersonName = styled.div`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  color: #5a4a42;
  text-align: left;
  margin-top: 20px;

  & > div:first-child {
    font-size: 18px;
    margin-bottom: 8px;
  }

  & > div:last-child {
    font-size: 24px;
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
`;
