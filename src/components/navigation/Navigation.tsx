import { useState } from "react";
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

  return (
    <nav className={`${isDarkMode ? "dark": ""} flex items-center justify-between flex-wrap p-6`}>
      <a href="/" className="flex items-end text-black dark:text-white">
        <span className="text-xl">AbdulMiah</span>
        <span className="text-sm">.com</span>
      </a>
      <div className="block lg:hidden">
        <button 
        className="px-3 py-2 border rounded border-black dark:bg-white"
        onClick={toggleMenu}
        >
          {isMenuOpen ? <XMarkIcon className="h-6 w-6 text-black" /> : <Bars3Icon className="h-6 w-6 text-black" />}
        </button>
      </div>
      <div className={`w-full block flex-grow ${isMenuOpen ? "lg:flex" : "hidden"} lg:items-center lg:w-auto`}>
        <div className="text-base lg:flex lg:justify-center lg:flex-grow dark:text-white">
          <a 
            href="#About" 
            className="hover:bg-grey dark:hover:bg-black px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0 mr-4">
            About
          </a>
          <a
            href="#Experience"
            className="hover:bg-grey dark:hover:bg-black px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="hover:bg-grey dark:hover:bg-black px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Projects
          </a>
          <a 
            href="#Contact" 
            className="hover:bg-grey dark:hover:bg-black px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0">
            Contact
          </a>
        </div>
        <div className="flex items-center mt-4 lg:mt-0">
          <a className="mr-4" onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon className="h-6 w-6 text-white hover:fill-white" /> : <MoonIcon className="h-6 w-6 text-black fill-black hover:fill-white" />}
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
