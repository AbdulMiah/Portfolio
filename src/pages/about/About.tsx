import { motion } from "framer-motion";
import { about, cvPath } from "../../constants";
import SectionWrapper from "../../utils/SectionWrapper";
import { popOutAnimation, slideDown } from "../../utils/motionVariants";
import Socials from "../../components/Socials";
import IconButton from "../../components/IconButton";
import { IconArrowLeft, IconArrowUp, IconDownload } from "@tabler/icons-react";
import InterestsGrid from "./InterestsGrid";
import InterestPopup from "./InterestPopup";
import { useState } from "react";
import AvatarStanding from "./AvatarStanding";

type AboutProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function About({ isDarkMode, isMobile }: AboutProp) {
  const [description, setDescription] = useState("");

  return (
    <section
      className={`grid ${
        isMobile ? "grid-cols-1" : "grid-cols-3"
      } gap-7 p-5 mb-10`}
    >
      {!isMobile && (
        <div className="col-span-1 row-span-6">
          <motion.div
            className="w-full h-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [null, 1.4, 1] }}
            transition={{ duration: 0.3, delay: 2.5 }}
          >
            <p className="animate-pulse font-bold">
              Click and drag to rotate me
            </p>
            <AvatarStanding />
          </motion.div>
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
          <InterestPopup
            isDarkMode={isDarkMode}
            description={description}
            setDescription={setDescription}
          />
        ) : (
          <motion.div
            variants={popOutAnimation(0.2, 0.1)}
            initial="hidden"
            animate="show"
            className="h-full w-full flex justify-center items-center animate-pulse space-x-2"
          >
            {isMobile ? (
              <IconArrowUp className="h-7 w-7" />
            ) : (
              <IconArrowLeft className="h-7 w-7" />
            )}

            <span> Click for more Info</span>
          </motion.div>
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
    </section>
  );
}

export default SectionWrapper(About, "about", 120);
