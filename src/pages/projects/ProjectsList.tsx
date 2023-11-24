import { motion } from "framer-motion";
import { slideDown, staggerAnimation } from "../../utils/motionVariants";
import { projects } from "../../utils/constants";
import ProjectCard from "./ProjectCard";
import { Project } from "../../utils/types";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

type ProjectsListProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function ProjectsList({ isMobile, isDarkMode }: ProjectsListProp) {
  const navigate = useNavigate();

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

      <motion.a
        variants={slideDown(0.4)}
        href="#projects"
        className="flex flex-row space-x-2 mt-5 mb-5"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0 });
        }}
      >
        <IconArrowLeft className="bg-royal-blue-100 rounded-lg" />
        <span>Back</span>
      </motion.a>
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
    </motion.section>
  );
}

export default ProjectsList;
