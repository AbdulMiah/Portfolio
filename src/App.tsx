import { useState, useEffect } from "react";
import { Navigation, Landing, About, Experiences, Projects } from "./pages";
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

  const htmlElement = document.documentElement;
  if (isDarkMode) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  return (
    <div className={`${isDarkMode ? "dark" : ""} w-full min-h-screen`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Landing isMobile={isMobile} />
      <About isDarkMode={isDarkMode} isMobile={isMobile} />
      <Experiences isDarkMode={isDarkMode} isMobile={isMobile} />
      <Projects isDarkMode={isDarkMode} isMobile={isMobile} />
      <ScrollToTopButton isMobile={isMobile} />
    </div>
  );
}

export default App;
