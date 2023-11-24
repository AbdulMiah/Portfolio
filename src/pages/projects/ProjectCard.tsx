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
import IconButton from "../../components/IconButton";
import { Link } from "react-router-dom";

type ProjectCardProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  projects: Project[];
};

const ArrowLink = ({
  link,
  text,
  styles,
}: {
  link: string;
  text: string;
  styles?: string;
}) => (
  <a
    href={link}
    className={`flex flex-row space-x-2 text-base hover:underline ${
      styles ? styles : ""
    }`}
  >
    <span>{text}</span>
    <IconArrowRight />
  </a>
);

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
            <ArrowLink link={"#"} text={"View Project"} />
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
      ))}
      <motion.div
        variants={slideDown(1.2)}
        className={`${
          !isMobile && "col-span-3"
        } flex justify-center items-center`}
      >
        <Link to={"/projects/all"}>
          <IconButton icon={<IconArrowRight />} text="Show More Projects" />
        </Link>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
