import React from "react";
import GroomSection from "./GroomSection";
import BrideSection from "./BrideSection";
import {
  HeroContainer,
  TitleContainer,
  StoryTitle,
  ContentContainer,
} from "../styles";
import { Flex } from "../../../components/Flex";

const StoryHero: React.FC = () => {
  return (
    <HeroContainer>
      <TitleContainer>
        <StoryTitle>當「找錯人」遇見「對的人」</StoryTitle>
      </TitleContainer>
        <ContentContainer>
        <GroomSection />
        <BrideSection />
      </ContentContainer>
    </HeroContainer>
  );
};

export default StoryHero;
