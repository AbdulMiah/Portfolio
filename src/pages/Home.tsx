import { Landing, About, Experiences, Projects } from "../pages";

type HomeProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Home({ isMobile, isDarkMode }: HomeProp) {
  return (
    <>
      <Landing isMobile={isMobile} />
      <About isDarkMode={isDarkMode} isMobile={isMobile} />
      <Experiences isDarkMode={isDarkMode} isMobile={isMobile} />
      <Projects isDarkMode={isDarkMode} isMobile={isMobile} />
    </>
  );
}

export default Home;
