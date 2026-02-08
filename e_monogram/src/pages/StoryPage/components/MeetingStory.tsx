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
        當年一場面試，讓原本擦身而過的我們在 Discord 意外相遇。
        <br />
        這烟花虛妙錯誤，讓我們找到了專屬於守護一輩子的彼此。
      </StoryText>
      <MediaPlaceholder>Meeting Story Image Placeholder</MediaPlaceholder>
    </MeetingContainer>
  );
};

export default MeetingStory;
