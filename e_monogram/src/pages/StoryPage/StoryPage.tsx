import React from "react";
import Divider from "../../components/Divider";
import StoryHero from "./components/StoryHero";
import MeetingStory from "./components/MeetingStory";

const StoryPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F6F7F1" }}>
      <StoryHero />
      <Divider />
      <MeetingStory />
    </div>
  );
};

export default StoryPage;
