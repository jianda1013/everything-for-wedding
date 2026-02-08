import React from "react";
import {
  HeroContainer,
  StoryTitle,
  CoupleContainer,
  PersonImage,
  PersonName,
  LeftPersonCard,
  RightPersonCard,
} from "../styles";

const StoryHero: React.FC = () => {
  return (
    <HeroContainer>
      <StoryTitle>當「找錯人」遇見「對的人」</StoryTitle>
      <CoupleContainer>
        {/* <RightPersonCard>
          <PersonName>
            <div>新娘</div>
            <div>陳怡萱 (Nina)</div>
          </PersonName>
          <PersonImage />
        </RightPersonCard> */}
      </CoupleContainer>
    </HeroContainer>
  );
};

export default StoryHero;
