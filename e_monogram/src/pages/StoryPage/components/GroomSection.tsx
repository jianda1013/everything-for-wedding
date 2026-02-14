import React from "react";
import groomImage from "../../../assets/goom.jpg";
import {
  GroomSectionContainer,
  GroomContent,
  PersonImage,
  PersonName,
} from "../styles";

const GroomSection: React.FC = () => {
  return (
    <GroomSectionContainer>
      <GroomContent>
        <PersonImage src={groomImage} alt="Groom" />
        <PersonName>
          <div>新郎</div>
          <div>簡宗祐 (Jianda)</div>
        </PersonName>
      </GroomContent>
    </GroomSectionContainer>
  );
};

export default GroomSection;
