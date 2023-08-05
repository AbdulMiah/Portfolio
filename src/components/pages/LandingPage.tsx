type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  return (
    <div className={`${isDarkMode ? "dark" : ""} flex flex-col justify-center items-center h-screen`}>
        <h1 className="font-bold">
          Hi, I'm
          <span className="text-royal-blue-100"> Abdul!</span>
        </h1>
        <h4 className="mt-6">I'm a Software Engineer.</h4>
    </div>
  );
}

export default LandingPage;
