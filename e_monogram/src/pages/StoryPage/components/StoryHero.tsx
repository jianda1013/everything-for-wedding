import React from "react";
import GroomSection from "./GroomSection";
import BrideSection from "./BrideSection";
import {
  HeroContainer,
  TitleContainer,
  StoryTitle,
  ContentContainer,
} from "../styles";
import useScrollVisible from "../../../hooks/useScrollVisible";

const StoryHero: React.FC = () => {
  const [contentRef, visible] = useScrollVisible<HTMLDivElement>({
    threshold: 0.1,
    expansion: 1,
    repeat: true,
  });

  return (
    <HeroContainer>
      <TitleContainer>
        <StoryTitle>當「找錯人」遇見「對的人」</StoryTitle>
      </TitleContainer>
      <ContentContainer ref={contentRef}>
        <GroomSection visible={visible} />
        <BrideSection visible={visible} />
      </ContentContainer>
    </HeroContainer>
  );
};

export default StoryHero;
