import styled from "styled-components";

export const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #d8dcd6;
  width: 100%;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 32px;
  color: #8b6b5d; /* Accent color */
  margin-bottom: 24px;
`;

export const StoryText = styled.p`
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #5a4a42;
  max-width: 600px;
  margin-bottom: 40px;
`;

export const MediaPlaceholder = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-image:
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
  background-color: #fff;
  border: 2px dashed #999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 24px;
  font-family: sans-serif;
`;
