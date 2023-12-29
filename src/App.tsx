import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navigation,
  Home,
  ProjectsList,
  ProjectDetails,
  Footer,
} from "./pages";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { projects } from "./utils/constants";

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
      <Routes>
        <Route
          path="/"
          element={<Home isDarkMode={isDarkMode} isMobile={isMobile} />}
        />
        <Route
          path="/project/all"
          element={<ProjectsList isDarkMode={isDarkMode} isMobile={isMobile} />}
        />
        {projects.map((project, index) => (
          <Route
            path={`/project/${project.id}`}
            element={
              <ProjectDetails
                isDarkMode={isDarkMode}
                isMobile={isMobile}
                project={project}
                key={index}
              />
            }
          />
        ))}
      </Routes>
      <Footer isDarkMode={isDarkMode} />
      <ScrollToTopButton isMobile={isMobile} />
    </div>
  );
}

export default App;
