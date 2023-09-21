import { motion } from "framer-motion";
import { about } from "../../constants";
import SectionWrapper from "../../utils/SectionWrapper";
import { popOutAnimation, slideDown } from "../../utils/motionVariants";

type AboutProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function About({ isDarkMode, isMobile }: AboutProp) {
  return (
    <section className="relative w-full h-screen">
      <motion.div
        variants={slideDown(0.2)}
        className="font-bold text-center mb-14"
      >
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

      <motion.p variants={popOutAnimation(0.8, 0.4)} className="p-5">
        {about.description}
      </motion.p>

      <div className="p-5">
        {about.interests.map((interest, index) => (
          <div className="mb-5" key={index}>
            <p>{interest.title}</p>
            <interest.icon />
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionWrapper(About, "about", 120);
