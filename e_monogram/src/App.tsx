import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Layout from "./layout/Layout";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Layout>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
