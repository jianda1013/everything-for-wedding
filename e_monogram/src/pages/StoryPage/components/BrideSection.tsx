import React from "react";
import brideImage from "../../../assets/bride.jpg";
import {
  BrideSectionContainer,
  BrideContent,
  PersonImage,
  PersonName,
} from "../styles";

interface BrideSectionProps {
  visible: boolean;
}

const BrideSection: React.FC<BrideSectionProps> = ({ visible }) => {
  return (
    <BrideSectionContainer $visible={visible}>
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
