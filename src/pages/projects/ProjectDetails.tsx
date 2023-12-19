import { Project, Skill } from "../../utils/types";
import { Link } from "react-router-dom";
import SkillButton from "../../components/SkillButton";
import { IconArrowLeft, IconBrandGithub } from "@tabler/icons-react";
import IconButton from "../../components/IconButton";

type ProjectDetailsProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  project: Project;
};

function ProjectDetails({ isMobile, isDarkMode, project }: ProjectDetailsProp) {
  return (
    <section
      className={`grid ${
        isMobile ? "grid-cols-1" : "grid-cols-[5%,80%,5%]"
      } gap-7 p-5 mt-[100px]`}
    >
      <div className="flex flex-row mt-5 mb-5">
        <Link
          to="/project/all"
          className="flex space-x-2"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <IconArrowLeft className="bg-royal-blue-100 rounded-lg text-white" />
          <span>Back</span>
        </Link>
      </div>
      <div className="grid-rows-4 space-y-5">
        <div className="flex flex-row justify-between items-center">
          {isMobile ? <h3>{project.title}</h3> : <h2>{project.title}</h2>}
          <IconButton icon={<IconBrandGithub />} text="Open Project" />
        </div>
        <div>{project.description}</div>
        <div className="flex flex-wrap gap-1 justify-start">
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
      <div>Next Project</div>
    </section>
  );
}

export default ProjectDetails;
