import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { scaleAnimation } from "../../utils/motionVariants";

type ProjectCardProp = {
  isDarkMode: boolean;
  projects: any;
};

function ProjectCard({ isDarkMode, projects }: ProjectCardProp) {
  return (
    <div className="grid grid-cols-3 gap-5 text-white">
      {projects.slice(0, 3).map((project: any, index: number) => (
        <div
          key={`project-${index}`}
          className="bg-royal-blue-100 rounded-xl p-5"
        >
          <div className="flex justify-between items-center">
            <motion.a
              variants={scaleAnimation([null, 1.3, 1.2], 0.1)}
              initial="hidden"
              whileHover="show"
              href={project.link}
              target="_blank"
            >
              <IconBrandGithub className="hover:fill-white" />
            </motion.a>
            <a href="#" className="flex flex-row space-x-2 text-base">
              <span>View Project</span>
              <IconArrowRight />
            </a>
          </div>
          {project.title}
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
