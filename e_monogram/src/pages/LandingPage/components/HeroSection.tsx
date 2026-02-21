import React from "react";
import { HeroSectionContainer, HeroTitle, HeroDate } from "../styles";
import useScrollVisible from "../../../hooks/useScrollVisible";

const HeroSection: React.FC = () => {
  const [heroRef, visible] = useScrollVisible<HTMLElement>({ threshold: 0.2 });

  return (
    <HeroSectionContainer id="home" ref={heroRef} $visible={visible}>
      <HeroTitle $visible={visible}>Jianda & Nina</HeroTitle>
      <HeroDate $visible={visible}>Mar 14, 2026 — Chiayi</HeroDate>
    </HeroSectionContainer>
  );
};

export default HeroSection;
