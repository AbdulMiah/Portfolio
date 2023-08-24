import { useState, useEffect } from "react";
import LandingPage from "./pages/landing/LandingPage";
import Navigation from "./pages/navigation/Navigation";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const colourPreference = window.matchMedia("(prefers-color-scheme: dark)");

    if (colourPreference.matches) {
      setDarkMode(true);
    }

    colourPreference.addEventListener("change", (evt) =>
      setDarkMode(evt.matches)
    );
  }, []);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  return (
    <div className="overflow-y-scroll w-full h-screen">
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <LandingPage isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
