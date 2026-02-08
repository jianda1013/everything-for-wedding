import React from "react";
import Divider from "../../components/Devider";
import StoryHero from "./components/StoryHero";
import MeetingStory from "./components/MeetingStory";

const StoryPage: React.FC = () => {
  return (
    <>
      <StoryHero />
      <Divider />
      <MeetingStory />
    </>
  );
};

export default StoryPage;
