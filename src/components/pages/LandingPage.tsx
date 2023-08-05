type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  return (
    <div className={`${isDarkMode ? "dark" : ""} flex flex-col justify-center items-center h-screen`}>
        <h1 className="text-7xl font-bold">
          Hi, I'm
          <span className="text-royal-blue-100"> Abdul!</span>
        </h1>
        <h3 className="text-xl mt-6">I'm a Software Engineer.</h3>
    </div>
  );
}

export default LandingPage;
