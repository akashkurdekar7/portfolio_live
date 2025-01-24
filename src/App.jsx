import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Greet from "./components/Greet.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Phrase from "./components/Phrase.jsx";
import StarsCanvas from "./components/StarsCanvas";

const App = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* Content */}
      <div className="container px-16 mx-auto">
        <Navbar />
        <Greet />
        <HeroSection />
        <Technologies />
        <Projects />
        <Experience />
        <Phrase />
        <Footer />
      </div>
    </div>
  );
};

export default App;
