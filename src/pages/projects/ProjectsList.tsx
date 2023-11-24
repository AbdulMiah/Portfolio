import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import { projects } from "../../utils/constants";
import ProjectCard from "./ProjectCard";
import { Project } from "../../utils/types";

type ProjectsListProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function ProjectsList({ isMobile, isDarkMode }: ProjectsListProp) {
  return (
    <section className="relative w-full h-full overflow-hidden p-5 mt-[100px]">
      <motion.div
        variants={slideDown(0.2)}
        className="font-bold text-center mb-14"
      >
        {isMobile ? (
          <>
            <h3>All</h3>
            <h2 className="text-royal-blue-100">Projects.</h2>
          </>
        ) : (
          <>
            <h2>All</h2>
            <h1 className="text-royal-blue-100">Projects.</h1>
          </>
        )}
      </motion.div>

      <div
        className={`grid ${
          isMobile ? "grid-cols-1" : "grid-cols-3"
        } gap-5 text-white`}
      >
        {projects.map((project: Project, index: number) => (
          <ProjectCard
            isDarkMode={isDarkMode}
            isMobile={isMobile}
            project={project}
            key={`project-${index}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
