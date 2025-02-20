import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Greet from "./components/Greet.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Phrase from "./components/Phrase.jsx";
import StarsCanvas from "./components/StarsCanvas.jsx";

const App = () => {
  return (
    <AppContainer>
      <BackgroundCanvas>
        <StarsCanvas />
      </BackgroundCanvas>

      <Navbar />

      <MainContent>
        <Greet />
        <HeroSection />
        <Technologies />
        <Projects />
        <Experience />
        <Phrase />
      </MainContent>

      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  position: relative;
`;

const BackgroundCanvas = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -10;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default App;
