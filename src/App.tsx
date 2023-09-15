import { useState, useEffect } from "react";
import LandingPage from "./pages/landing/LandingPage";
import Navigation from "./pages/navigation/Navigation";
import ExperienceSection from "./pages/experience/ExperienceSection";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const colourPreference = window.matchMedia("(prefers-color-scheme: dark)");

    if (colourPreference.matches) {
      setDarkMode(true);
    }

    colourPreference.addEventListener("change", (evt) =>
      setDarkMode(evt.matches)
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  return (
    <div className="overflow-y-scroll w-full h-screen">
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <LandingPage isDarkMode={isDarkMode} isMobile={isMobile} />
      <ExperienceSection isDarkMode={isDarkMode} isMobile={isMobile} />
    </div>
  );
}

export default App;
