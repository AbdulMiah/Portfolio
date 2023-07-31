import { useState, useEffect } from "react";
import IconButton from "./reusable/IconButton";
import { XMarkIcon, Bars3Icon, MoonIcon, SunIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type NavigationProp = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

function Navigation({ isDarkMode, toggleDarkMode }: NavigationProp) {
  const [isMenuOpen, setMenuOpen] = useState(true);

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
        <a className="mr-4" onClick={toggleDarkMode}>
        {isDarkMode ? <SunIcon className="h-6 w-6 text-white hover:fill-white" /> : <MoonIcon className="h-6 w-6 text-black hover:fill-black" />}
        </a>
        <a className="mr-5" href="/src/assets/Abdul Muktadir Miah - CV.pdf" download={true}>
          <IconButton icon={<ArrowDownTrayIcon className="h-5 w-5" />} text="Download CV" />
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
