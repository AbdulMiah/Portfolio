import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../../constants";
import ExperienceCard from "./ExperienceCard";

import SectionWrapper from "../../utils/SectionWrapper";
import { popOutAnimation, slideDown } from "../../utils/motionVariants";

type ExperienceProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Experience({ isDarkMode, isMobile }: ExperienceProp) {
  return (
    <section className="relative w-full h-screen">
      <motion.div
        variants={slideDown(0.2)}
        className="font-bold text-center mb-14"
      >
        {isMobile ? (
          <>
            <h2>Professional</h2>
            <h3 className="text-royal-blue-100">Experience.</h3>
          </>
        ) : (
          <>
            <h1>Professional</h1>
            <h2 className="text-royal-blue-100">Experience.</h2>
          </>
        )}
      </motion.div>

      <motion.div variants={popOutAnimation(0.8, 0.4)}>
        <VerticalTimeline lineColor={`${isDarkMode ? "#fff" : "#000"}`}>
          {experiences.map((experience, index) => (
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

export default SectionWrapper(Experience, "experience", 120);
