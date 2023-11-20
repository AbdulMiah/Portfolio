import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import SectionWrapper from "../../utils/SectionWrapper";
import { projects } from "../../utils/constants";
import ProjectCard from "./ProjectCard";

type ProjectsProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Projects({ isMobile, isDarkMode }: ProjectsProp) {
  return (
    <section className="relative w-full h-full overflow-hidden p-5">
      <motion.div
        variants={slideDown(0.2)}
        className="font-bold text-center mb-14"
      >
        {isMobile ? (
          <>
            <h3>My</h3>
            <h2 className="text-royal-blue-100">Projects.</h2>
          </>
        ) : (
          <>
            <h2>My</h2>
            <h1 className="text-royal-blue-100">Projects.</h1>
          </>
        )}
      </motion.div>

      <ProjectCard
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        projects={projects}
      />
    </section>
  );
}

export default SectionWrapper(Projects, "projects", 80);
