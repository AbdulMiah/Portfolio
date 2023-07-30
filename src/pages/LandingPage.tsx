type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  return (
    <div className={`${isDarkMode ? "dark" : ""} flex items-center justify-center h-screen`}>
      <h1 className="text-5xl">Landing Page!</h1>
    </div>
  );
}

export default LandingPage;
