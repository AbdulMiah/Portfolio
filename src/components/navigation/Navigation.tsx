import { useState, useEffect } from "react";
import IconButton from "../reusable/IconButton";
import {
  IconX,
  IconMenu2,
  IconMoon,
  IconSunHigh,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

type NavigationProp = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

function Navigation({ isDarkMode, toggleDarkMode }: NavigationProp) {
  const [isMenuOpen, setMenuOpen] = useState(window.innerWidth >= 1024);

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
    <nav
      className={`${
        isDarkMode ? "dark dark-nav" : "light-nav"
      } w-full fixed top-0 z-50 flex items-center justify-between flex-wrap p-6`}
    >
      <a href="/" className="flex items-end text-black dark:text-white">
        <span className="text-xl">AbdulMiah</span>
        <span className="text-sm">.com</span>
      </a>
      <div className="block lg:hidden flex items-center">
        <a
          className="mr-5"
          href="/src/assets/Abdul Muktadir Miah - CV.pdf"
          download={true}
        >
          <IconButton icon={<IconDownload />} text="CV" />
        </a>
        <button onClick={toggleMenu}>
          {isMenuOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>
      <div
        className={`w-full block flex-grow ${
          isMenuOpen ? "lg:flex" : "hidden"
        } lg:items-center lg:w-auto`}
      >
        <div className="text-base lg:flex lg:justify-center lg:flex-grow dark:text-white">
          <motion.a
            whileHover={{ scale: [null, 1.1, 1.05] }}
            transition={{ duration: 0.1 }}
            href="#About"
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: [null, 1.1, 1.05] }}
            transition={{ duration: 0.1 }}
            href="#Experience"
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Experience
          </motion.a>
          <motion.a
            whileHover={{ scale: [null, 1.1, 1.05] }}
            transition={{ duration: 0.1 }}
            href="#Projects"
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: [null, 1.1, 1.05] }}
            transition={{ duration: 0.1 }}
            href="#Contact"
            className="hover:bg-grey-200 dark:hover:bg-black px-3 py-2 rounded block mt-4 lg:inline-block lg:mt-0"
          >
            Contact
          </motion.a>
        </div>
        <div className="block lg:hidden flex items-center justify-center space-x-6 mt-4">
          <motion.a
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.1 }}
            href="https://www.linkedin.com/in/abdul-m-miah/"
            target="_blank"
          >
            <IconBrandLinkedin className="hover:fill-royal-blue-200" />
          </motion.a>
          <motion.a
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.1 }}
            href="https://github.com/AbdulMiah"
            target="_blank"
          >
            <IconBrandGithub className="hover:fill-royal-blue-200" />
          </motion.a>
          <motion.a
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.1 }}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <IconSunHigh className="text-white hover:fill-white" />
            ) : (
              <IconMoon className="text-black hover:fill-black" />
            )}
          </motion.a>
        </div>
        <div className="flex items-center hidden lg:inline-flex">
          <motion.a
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.1 }}
            className="mr-4"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <IconSunHigh className="text-white hover:fill-white" />
            ) : (
              <IconMoon className="text-black hover:fill-black" />
            )}
          </motion.a>
          <a href="/src/assets/Abdul Muktadir Miah - CV.pdf" download={true}>
            <IconButton icon={<IconDownload />} text="Download CV" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
