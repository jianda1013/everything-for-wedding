import React from "react";
import brideImage from "../../../assets/bride.jpg";
import {
  BrideSectionContainer,
  BrideContent,
  PersonImage,
  PersonName,
} from "../styles";

const BrideSection: React.FC = () => {
  return (
    <BrideSectionContainer>
      <BrideContent>
        <PersonName>
          <div>新娘</div>
          <div>陳怡萱 (Nina)</div>
        </PersonName>
        <PersonImage src={brideImage} alt="Bride" />
      </BrideContent>
    </BrideSectionContainer>
  );
};

export default BrideSection;
