import { useState } from "react";
import IconButton from "./reusable/IconButton";

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  const menuSvg = (
    <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
  );

  const downloadSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );

  const moonSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="bg-black"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 hover:fill-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <a href="#Home" className="flex items-end text-black">
        <span className="text-xl">AbdulMiah</span>
        <span className="text-sm">.com</span>
      </a>
      <div className="block lg:hidden">
        <button 
        className="px-3 py-2 border rounded border-black"
        onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : menuSvg}
        </button>
      </div>
      <div className={`w-full block flex-grow ${isMenuOpen ? "lg:flex" : "hidden"} lg:items-center lg:w-auto`}>
        <div className="text-base lg:flex lg:justify-center lg:flex-grow">
          <a href="#About" className="hover:bg-grey px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0 mr-4">
            About
          </a>
          <a
            href="#Experience"
            className="hover:bg-grey px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="hover:bg-grey px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Projects
          </a>
          <a href="#Contact" className="hover:bg-grey px-2 py-1 rounded block mt-4 lg:inline-block lg:mt-0">
            Contact
          </a>
        </div>
        <div className="flex items-center mt-4 lg:mt-0">
          <a href="DarkMode" className="mr-4">
            {moonSvg}
          </a>
          <a href="/src/assets/Abdul Muktadir Miah - CV.pdf" download={true}>
            <IconButton icon={downloadSvg} text="Download CV" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
