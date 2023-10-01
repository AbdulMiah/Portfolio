import { motion } from "framer-motion";
import { about, cvPath } from "../../constants";
import SectionWrapper from "../../utils/SectionWrapper";
import { popOutAnimation, slideDown } from "../../utils/motionVariants";
import Socials from "../../components/Socials";
import IconButton from "../../components/IconButton";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import InterestsGrid from "./InterestsGrid";
import InterestsPopup from "./InterestsDetail";
import { useState } from "react";

type AboutProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function About({ isDarkMode, isMobile }: AboutProp) {
  const [description, setDescription] = useState("");

  return (
    <section className="relative w-full h-screen">
      <div
        className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-7 p-5`}
      >
        {!isMobile && (
          <div className="col-span-1 row-span-6 bg-royal-blue-100">
            <div className="justify-center">
              <h1>Avatar</h1>
            </div>
          </div>
        )}

        <motion.div
          variants={slideDown(0.2)}
          className={`${isMobile ? "" : "col-span-2 col-start-2"} font-bold`}
        >
          {isMobile ? (
            <h2>
              About
              <span className="text-royal-blue-100"> Me.</span>
            </h2>
          ) : (
            <h1>
              About
              <span className="text-royal-blue-100"> Me.</span>
            </h1>
          )}
        </motion.div>

        <motion.div
          variants={popOutAnimation(0.8, 0.4)}
          className={`${isMobile ? "" : "col-span-2 col-start-2"} text-lg`}
        >
          {about.description}
        </motion.div>

        <motion.h3
          variants={popOutAnimation(0.8, 0.6)}
          className={`${isMobile ? "" : "col-span-2 col-start-2"} font-bold`}
        >
          My
          <span className="text-royal-blue-100"> Interests.</span>
        </motion.h3>

        <motion.div
          variants={popOutAnimation(0.8, 0.8)}
          className={`${isMobile ? "" : "col-span-1 col-start-2"}`}
        >
          <InterestsGrid
            isDarkMode={isDarkMode}
            interests={about.interests}
            setDescription={setDescription}
          />
        </motion.div>

        <motion.div
          variants={popOutAnimation(0.8, 1)}
          className={`${isMobile ? "" : "col-span-1 col-start-3"}`}
        >
          {description ? (
            <InterestsPopup
              isDarkMode={isDarkMode}
              description={description}
              setDescription={setDescription}
            />
          ) : (
            <div className="h-full w-full flex justify-center items-center animate-pulse space-x-2">
              <IconArrowLeft className="h-7 w-7" />
              <span> Click for more Info</span>
            </div>
          )}
        </motion.div>

        <motion.div
          variants={popOutAnimation(0.8, 1.2)}
          className={`${
            isMobile ? "justify-between" : "col-span-2 col-start-2 space-x-48"
          } flex items-center`}
        >
          <a href={cvPath} download={true}>
            <IconButton icon={<IconDownload />} text="Download CV" />
          </a>
          <div>
            Follow me:
            <span>
              <Socials />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(About, "about", 120);
