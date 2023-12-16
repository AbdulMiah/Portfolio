import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../../utils/constants";
import ExperienceCard from "./ExperienceCard";

import SectionWrapper from "../../utils/SectionWrapper";
import { popOutAnimation, slideDown } from "../../utils/motionVariants";
import { Experience } from "../../utils/types";

type ExperiencesProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Experiences({ isDarkMode, isMobile }: ExperiencesProp) {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <motion.div
        variants={slideDown(0.2)}
        className="font-bold text-center mb-14"
      >
        {isMobile ? (
          <>
            <h3>Professional</h3>
            <h2 className="text-royal-blue-100">Experience.</h2>
          </>
        ) : (
          <>
            <h2>Professional</h2>
            <h1 className="text-royal-blue-100">Experience.</h1>
          </>
        )}
      </motion.div>

      <motion.div variants={popOutAnimation(0.8, 0.4)}>
        <VerticalTimeline lineColor={`${isDarkMode ? "#fff" : "#000"}`}>
          {experiences.map((experience: Experience, index: number) => (
            <ExperienceCard
              isDarkMode={isDarkMode}
              isMobile={isMobile}
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Experiences, "experiences", 100);
