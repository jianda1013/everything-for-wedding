import React from "react";
import { HeroSectionContainer, HeroTitle, HeroDate } from "../styles";

const HeroSection: React.FC = () => {
  return (
    <HeroSectionContainer id="home">
      <HeroTitle>Jianda & Nina</HeroTitle>
      <HeroDate>Mar 14, 2026 — Chiayi</HeroDate>
    </HeroSectionContainer>
  );
};

export default HeroSection;
