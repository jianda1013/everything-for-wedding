import React from "react";
import {
  MeetingContainer,
  SectionTitle,
  StoryText,
  MediaPlaceholder,
} from "../styles";

const MeetingStory: React.FC = () => {
  return (
    <MeetingContainer>
      <SectionTitle>我們多次相遇</SectionTitle>
      <StoryText>
        當年一場烏龍，讓原本擦身而過的我們在 Discord 意外相遇。
        <br />
        這個荒唐的錯誤，讓我們找到了要攜手守護一輩子的彼此。
      </StoryText>
      <MediaPlaceholder>
        <iframe
          src="https://drive.google.com/file/d/1hzX1Z6RUPKVkpP8ZdI5ezgMO8sFfIZWM/preview"
          width="100%"
          height="100%"
        />
      </MediaPlaceholder>
    </MeetingContainer>
  );
};

export default MeetingStory;
