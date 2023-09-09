import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../../constants";
import ExperienceCard from "./ExperienceCard";

type ExperienceSectionProp = {
  isDarkMode: boolean;
};

function ExperienceSection({ isDarkMode }: ExperienceSectionProp) {
  return (
    <section className={`${isDarkMode ? "dark" : ""} relative w-full h-screen`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="font-bold text-center"
      >
        <h1>Professional</h1>
        <h2 className="text-royal-blue-100">Experience</h2>
      </motion.div>

      <div>
        <VerticalTimeline lineColor="#fff">
          {experiences.map((experience, index) => (
            <div>
              <p>{experience.title}</p>
            </div>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default ExperienceSection;
