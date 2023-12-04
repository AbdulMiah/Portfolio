import { useState, useEffect } from "react";
import { Landing, About, Experiences, Projects } from "../pages";
import InitialLoader from "../utils/InitialLoader";
import { loadingMessages } from "../utils/constants";

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

    let counter = 0;

    const timer = setInterval(() => {
      setLoadingText(loadingMessages[counter % loadingMessages.length]);
      counter++;
    }, 2666);

    setTimeout(() => {
      clearInterval(timer);
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <InitialLoader
        isLoading={isLoading}
        isDarkMode={isDarkMode}
        loadingText={loadingText}
      />

      <div className="relative z-0">
        <Landing isMobile={isMobile} />
        <About isDarkMode={isDarkMode} isMobile={isMobile} />
        <Experiences isDarkMode={isDarkMode} isMobile={isMobile} />
        <Projects isDarkMode={isDarkMode} isMobile={isMobile} />
      </div>
    </div>
  );
}

export default Home;
