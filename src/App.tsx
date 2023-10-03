import { useState, useEffect } from "react";
import { Navigation, Landing, About, Experience } from "./pages";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
    <div className={`${isDarkMode ? "dark" : ""} w-full min-h-screen`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Landing isMobile={isMobile} />
      <About isDarkMode={isDarkMode} isMobile={isMobile} />
      <Experience isDarkMode={isDarkMode} isMobile={isMobile} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
