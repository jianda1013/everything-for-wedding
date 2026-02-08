import React from "react";
import HeroSection from "./components/HeroSection";
import Divider from "../../components/Devider";
import WeddingDetail from "./components/WeddingDetail";
import Traffic from "./components/Traffic";

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <WeddingDetail />
      <Divider />
      <Traffic />
    </>
  );
};

export default LandingPage;
