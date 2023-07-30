type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  return (
    <>
      <h1 className={`${isDarkMode ? "dark": ""}`}>Landing Page!</h1>
    </>
  );
}

export default LandingPage;
