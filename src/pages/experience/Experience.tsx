import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../../constants";
import ExperienceCard from "./ExperienceCard";

import SectionWrapper from "../../utils/SectionWrapper";

type ExperienceProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Experience({ isDarkMode, isMobile }: ExperienceProp) {
  return (
    <section className="relative w-full h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="font-bold text-center mb-14"
      >
        {isMobile ? (
          <>
            <h2>Professional</h2>
            <h3 className="text-royal-blue-100">Experience</h3>
          </>
        ) : (
          <>
            <h1>Professional</h1>
            <h2 className="text-royal-blue-100">Experience</h2>
          </>
        )}
      </motion.div>

      <div>
        <VerticalTimeline lineColor={`${isDarkMode ? "#fff" : "#000"}`}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              isDarkMode={isDarkMode}
              isMobile={isMobile}
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default SectionWrapper(Experience, "experience", 120);
