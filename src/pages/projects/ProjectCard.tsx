import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { scaleAnimation, slideDown } from "../../utils/motionVariants";
import SkillButton from "../../components/SkillButton";
import Carousel from "./Carousel";
import { Project, Skill } from "../../utils/types";

type ProjectCardProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  projects: Project[];
};

function ProjectCard({ isDarkMode, isMobile, projects }: ProjectCardProp) {
  return (
    <div
      className={`grid ${
        isMobile ? "grid-cols-1" : "grid-cols-3"
      } gap-5 text-white`}
    >
      {projects.slice(0, 3).map((project: Project, index: number) => (
        <motion.div
          variants={slideDown(project.delay)}
          initial="hidden"
          whileInView="show"
          key={`project-${index}`}
          className={`bg-royal-blue-100 rounded-xl p-5 border-b-8 ${
            !isDarkMode && "border-black"
          }`}
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
            <a
              href="#"
              className="flex flex-row space-x-2 text-base hover:underline"
            >
              <span>View Project</span>
              <IconArrowRight />
            </a>
          </div>

          <Carousel images={project.images} />

          <div className="mt-5 space-y-4">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {project.skills.map((skill: Skill, index: number) => (
                <SkillButton
                  key={`skill-${index}`}
                  text={skill.title}
                  icon={<skill.icon />}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCard;
