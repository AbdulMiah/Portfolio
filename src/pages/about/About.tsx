import { motion } from "framer-motion";
import { about } from "../../constants";
import SectionWrapper from "../../utils/SectionWrapper";
import { popOutAnimation, slideDown } from "../../utils/motionVariants";
import Socials from "../../components/Socials";

type AboutProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function About({ isDarkMode, isMobile }: AboutProp) {
  return (
    <section className="relative w-full h-screen">
      <div className="grid grid-rows-6 grid-cols-3 gap-4 p-5">
        {!isMobile && (
          <div className="bg-royal-blue-100 row-span-6">
            <div className="justify-center">
              <h1>Avatar</h1>
            </div>
          </div>
        )}
        <motion.div variants={slideDown(0.2)} className="font-bold col-span-1">
          {isMobile ? (
            <h2>
              About
              <span className="text-royal-blue-100"> Me</span>
            </h2>
          ) : (
            <h1>
              About
              <span className="text-royal-blue-100"> Me</span>
            </h1>
          )}
        </motion.div>
        <motion.div
          variants={popOutAnimation(0.8, 0.4)}
          className="bg-royal-blue-100 col-start-2 row-span-2 text-lg"
        >
          {about.description}
        </motion.div>
        <div className="bg-royal-blue-100 col-span-2">My Interests</div>
        <div className="bg-royal-blue-100 col-span-2">Interest Grid</div>
        <div className="bg-royal-blue-100 col-span-2">
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(About, "about", 120);
