import { motion } from "framer-motion";
import { slideDown, staggerAnimation } from "../../utils/motionVariants";
import { Project } from "../../utils/types";

type ProjectDetailsProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  project: Project;
};

function ProjectDetails({ isMobile, isDarkMode, project }: ProjectDetailsProp) {
  return (
    <motion.section
      variants={staggerAnimation(0.2)}
      initial="hidden"
      whileInView="show"
      className="relative w-full h-full overflow-hidden p-5 mt-[100px]"
    >
      <motion.div
        variants={slideDown(0.2)}
        className="font-bold text-center mb-14"
      >
        {isMobile ? (
          <>
            <h3>{project.title}</h3>
          </>
        ) : (
          <>
            <h2>{project.title}</h2>
          </>
        )}

        <h1>Project Details Page</h1>
      </motion.div>
    </motion.section>
  );
}

export default ProjectDetails;
