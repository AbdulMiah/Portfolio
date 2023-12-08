import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  staggerAnimation,
  scaleAnimation,
  slideDown,
  popOutAnimation,
} from "../../utils/motionVariants";
import SkillButton from "../../components/SkillButton";
import Carousel from "./Carousel";
import { Project, Skill } from "../../utils/types";
import Tooltip from "@mui/material/Tooltip";

type ProjectCardProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  project: Project;
};

function ProjectCard({ isDarkMode, isMobile, project }: ProjectCardProp) {
  return (
    <motion.div
      variants={slideDown(project.delay)}
      className={`bg-royal-blue-100 rounded-xl p-5 border-b-8 ${
        !isDarkMode && "border-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <Tooltip title="View Source Code on GitHub">
          <motion.a
            variants={scaleAnimation([null, 1.3, 1.2], 0.1)}
            initial="hidden"
            whileHover="show"
            href={project.link}
            target="_blank"
          >
            <IconBrandGithub className="hover:fill-white" />
          </motion.a>
        </Tooltip>
        <a
          href="#"
          className="flex flex-row space-x-2 text-base hover:underline"
        >
          <span>View Project</span>
          <IconArrowRight />
        </a>
      </div>

      <Carousel images={project.images} isMobile={isMobile} />

      <div className="mt-5 space-y-4">
        <h4>{project.title}</h4>
        <motion.ul
          variants={staggerAnimation(0.2)}
          initial="hidden"
          whileInView="show"
          className="p-5 list-disc"
        >
          {project.summary.map((point: string, index: number) => {
            return (
              <motion.li
                key={`summary-point-${index}`}
                variants={popOutAnimation(0.5, 0.2)}
                initial="hidden"
                whileInView="show"
              >
                {point}
              </motion.li>
            );
          })}
        </motion.ul>
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
  );
}

export default ProjectCard;
