import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LandingPageContainer } from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <LandingPageContainer>{children}</LandingPageContainer>
      <Footer />
    </>
  );
};

export default Layout;
