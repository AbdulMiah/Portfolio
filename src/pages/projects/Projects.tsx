import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import SectionWrapper from "../../utils/SectionWrapper";
import { projects } from "../../utils/constants";
import ProjectCard from "./ProjectCard";
import IconButton from "../../components/IconButton";
import { useNavigate } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { Project } from "../../utils/types";

type ProjectsProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Projects({ isMobile, isDarkMode }: ProjectsProp) {
  const navigate = useNavigate();

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

      <div
        className={`grid ${
          isMobile ? "grid-cols-1" : "grid-cols-3"
        } gap-5 text-white`}
      >
        {projects.slice(0, 3).map((project: Project, index: number) => (
          <ProjectCard
            isDarkMode={isDarkMode}
            isMobile={isMobile}
            project={project}
            key={`project-${index}`}
          />
        ))}
        <motion.div
          variants={slideDown(1.2)}
          className={`${
            !isMobile && "col-span-3"
          } flex justify-center items-center`}
          onClick={() => {
            navigate("/project/all");
            window.scrollTo({ top: 0 });
          }}
        >
          <IconButton icon={<IconArrowRight />} text="Show More Projects" />
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(Projects, "projects", 80);
