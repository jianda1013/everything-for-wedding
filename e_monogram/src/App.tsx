import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Layout from "./layout/Layout";
import ScrollToAnchor from "./components/ScrollToAnchor";
import BackgroundMusic from "./components/BackgroundMusic";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageTransitionWrapper = styled.div`
  animation: ${fadeUp} 0.35s ease both;
`;

/** Inner component so it can call useLocation (must be inside Router) */
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <PageTransitionWrapper key={location.pathname}>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </PageTransitionWrapper>
  );
};

function App() {
  return (
    <HashRouter>
      <ScrollToAnchor />
      <BackgroundMusic />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
}

export default App;
