import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import SectionWrapper from "../../utils/SectionWrapper";
import { projects } from "../../constants";
import ProjectCard from "./ProjectCard";

type ProjectsProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Projects({ isMobile, isDarkMode }: ProjectsProp) {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <motion.div
        variants={slideDown(0.2)}
        className="font-bold text-center mb-14"
      >
        {isMobile ? (
          <>
            <h2>My</h2>
            <h3 className="text-royal-blue-100">Projects.</h3>
          </>
        ) : (
          <>
            <h1>My</h1>
            <h2 className="text-royal-blue-100">Projects.</h2>
          </>
        )}
      </motion.div>

      <ProjectCard isDarkMode={isDarkMode} projects={projects} />
    </section>
  );
}

export default SectionWrapper(Projects, "projects", 120);
