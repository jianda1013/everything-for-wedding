import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  width: 100%;
  background: linear-gradient(to bottom, #d6ddcd 40%, #f9f9f7 40% 100%);
`;

export const StoryTitle = styled.h1`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 36px;
  color: #5a4a42; /* Darker earth tone text */
  margin-bottom: 60px;
  letter-spacing: 2px;
  text-align: center;
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

export const PersonImage = styled.div<{ src?: string }>`
  width: 300px;
  height: 450px;
  background-color: #ccc;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 4px; /* Slight radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

export const LeftPersonCard = styled(PersonCard)`
  align-self: flex-start;
  margin-top: 0px;
  marigin-right: -240px;
`;

export const RightPersonCard = styled(PersonCard)`
  align-self: flex-start;
  margin-top: 240px;
  margin-left: -240px;
`;
