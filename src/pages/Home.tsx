import { useState, useEffect } from "react";
import { Landing, About, Experiences, Projects } from "../pages";
import InitialLoader from "../utils/InitialLoader";

type HomeProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Home({ isMobile, isDarkMode }: HomeProp) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);

      document.body.style.overflow = "auto";
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <InitialLoader isLoading={isLoading} isDarkMode={isDarkMode} />

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
