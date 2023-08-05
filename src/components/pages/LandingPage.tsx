type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  return (
    <div className={`${isDarkMode ? "dark" : ""} flex flex-col justify-center h-screen`}>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Abdul!</h1>
        <h3>This website is under construction! Please wait patiently.</h3>
      </div>
    </div>
  );
}

export default LandingPage;
