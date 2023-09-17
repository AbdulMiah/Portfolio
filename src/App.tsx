import { useState, useEffect } from "react";
import { Navigation, Landing, Experience } from "./pages";

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
      <Landing isDarkMode={isDarkMode} isMobile={isMobile} />
      <Experience isDarkMode={isDarkMode} isMobile={isMobile} />
    </div>
  );
}

export default App;
