import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navigation from "./components/navigation/Navigation";


function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  return (
    <>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <LandingPage isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
