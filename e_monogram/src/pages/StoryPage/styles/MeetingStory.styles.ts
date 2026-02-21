import styled from "styled-components";

export const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #d6ddcd;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 64px;
  color: #8b6b5d; /* Accent color */
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StoryText = styled.p`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 32px;
  line-height: 1.8;
  color: #5a4a42;
  max-width: 1000px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MediaPlaceholder = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: sans-serif;

  @media (max-width: 768px) {
    height: 250px;
  }
`;
