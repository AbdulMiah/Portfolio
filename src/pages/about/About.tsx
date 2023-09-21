import { motion } from "framer-motion";
import { about } from "../../constants";
import SectionWrapper from "../../utils/SectionWrapper";
import { slideDown } from "../../utils/motionVariants";

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

      <motion.p className="">{about.description}</motion.p>
    </section>
  );
}

export default SectionWrapper(About, "about", 120);
