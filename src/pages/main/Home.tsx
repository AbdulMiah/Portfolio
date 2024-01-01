import { useState, useEffect } from "react";
import { Landing, About, Experiences, Projects, Contact } from "..";
import InitialLoader from "../../utils/InitialLoader";
import { loadingMessages } from "../../utils/constants";

type HomeProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Home({ isMobile, isDarkMode }: HomeProp) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(
    "Just a moment, fetching all 3D assets..."
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const displayLoader = sessionStorage.getItem("displayLoader");

    if (displayLoader === null || displayLoader === "true") {
      let counter = 0;

      const timer = setInterval(() => {
        setLoadingText(loadingMessages[counter % loadingMessages.length]);
        counter++;
      }, 2666);

      setTimeout(() => {
        clearInterval(timer);
        setIsLoading(false);
        document.body.style.overflow = "auto";
        sessionStorage.setItem("displayLoader", "false");
      }, 8000);

      return () => clearInterval(timer);
    } else {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <div>
      <InitialLoader
        isLoading={isLoading}
        isMobile={isMobile}
        isDarkMode={isDarkMode}
        loadingText={loadingText}
      />

      <div
        className={`relative z-0 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-1"
        }`}
      >
        <Landing isMobile={isMobile} />
        <About isDarkMode={isDarkMode} isMobile={isMobile} />
        <Experiences isDarkMode={isDarkMode} isMobile={isMobile} />
        <Projects isDarkMode={isDarkMode} isMobile={isMobile} />
        <Contact isDarkMode={isDarkMode} isMobile={isMobile} />
      </div>
    </div>
  );
}

export default Home;
