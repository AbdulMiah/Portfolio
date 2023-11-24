import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation, Home, ProjectsList } from "./pages";
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
    <BrowserRouter>
      <div className={`${isDarkMode ? "dark" : ""} w-full min-h-screen`}>
        <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} isMobile={isMobile} />}
          />
          <Route
            path="/projects/all"
            element={
              <ProjectsList isDarkMode={isDarkMode} isMobile={isMobile} />
            }
          />
        </Routes>
        <ScrollToTopButton isMobile={isMobile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
