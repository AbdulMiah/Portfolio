import { useState, useEffect } from "react";
import IconButton from "../reusable/IconButton";
import { XMarkIcon, Bars3Icon, MoonIcon, SunIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type NavigationProp = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

function Navigation({ isDarkMode, toggleDarkMode }: NavigationProp) {
  const [isMenuOpen, setMenuOpen] = useState(true);
  
  const LinkedInIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-6 hover:fill-royal-blue-100"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
  const GitHubLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-6 hover:fill-royal-blue-100"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`${isDarkMode ? "dark dark-nav": "light-nav"} w-full fixed top-0 z-50 flex items-center justify-between flex-wrap p-6`}>
      <a href="/" className="flex items-end text-black dark:text-white">
        <span className="text-xl">AbdulMiah</span>
        <span className="text-sm">.com</span>
      </a>
      <div className="block lg:hidden flex items-center">
        <a className="mr-5" href="/src/assets/Abdul Muktadir Miah - CV.pdf" download={true}>
          <IconButton icon={<ArrowDownTrayIcon className="h-5 w-5" />} text="CV" />
        </a>
        <button onClick={toggleMenu}>
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <div className={`w-full block flex-grow ${isMenuOpen ? "lg:flex" : "hidden"} lg:items-center lg:w-auto`}>
        <div className="text-base lg:flex lg:justify-center lg:flex-grow dark:text-white">
          <a 
            href="#About" 
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0 mr-4">
            About
          </a>
          <a
            href="#Experience"
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Projects
          </a>
          <a 
            href="#Contact" 
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0">
            Contact
          </a>
        </div>
        <div className="block lg:hidden flex items-center justify-center mt-4">
          <a href="https://www.linkedin.com/in/abdul-m-miah/" target="_blank">
            {LinkedInIcon}
          </a>
          <a href="https://github.com/AbdulMiah" target="_blank">
            {GitHubLogo}
          </a>
          <a onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon className="h-6 w-6 text-white hover:fill-white" /> : <MoonIcon className="h-6 w-6 text-black hover:fill-black" />}
          </a>
        </div>
        <div className="flex items-center hidden lg:inline-flex">
          <a className="mr-4" onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon className="h-6 w-6 text-white hover:fill-white" /> : <MoonIcon className="h-6 w-6 text-black hover:fill-black" />}
          </a>
          <a href="/src/assets/Abdul Muktadir Miah - CV.pdf" download={true}>
            <IconButton icon={<ArrowDownTrayIcon className="h-5 w-5" />} text="Download CV" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
