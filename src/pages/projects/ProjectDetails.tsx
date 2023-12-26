import { Project, ProjectType, Skill } from "../../utils/types";
import { Link } from "react-router-dom";
import SkillButton from "../../components/SkillButton";
import { IconArrowLeft, IconBrandGithub } from "@tabler/icons-react";
import IconButton from "../../components/IconButton";
import MonitorCanvas from "./MonitorCanvas";
import PhoneCanvas from "./PhoneCanvas";

type ProjectDetailsProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  project: Project;
};

function ProjectDetails({ isMobile, isDarkMode, project }: ProjectDetailsProp) {
  return (
    <section
      className={`grid ${
        isMobile ? "grid-cols-1" : "grid-cols-[10%,70%,10%]"
      } gap-7 p-5 mt-[100px]`}
    >
      <div className="flex flex-row">
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

      <div className={`grid ${isMobile ? "" : "grid-cols-[60%,40%]"} gap-5`}>
        <div className="space-y-5">
          <div
            className={`flex ${
              isMobile
                ? "flex-col space-y-2"
                : "flex-row justify-between items-center"
            }`}
          >
            {isMobile ? <h3>{project.title}</h3> : <h2>{project.title}</h2>}
            <a href={project.link} target="_blank">
              <IconButton
                icon={<IconBrandGithub />}
                text="Open Project"
                tooltipText="View Source Code on GitHub"
              />
            </a>
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

        {!isMobile && (
          <div className="flex h-[40vh] items-center justify-center cursor-move">
            {project.projectType === ProjectType.WEB_APP ? (
              <MonitorCanvas
                isDarkMode={isDarkMode}
                demo={project.demo}
                sparkleColor={project.color}
              />
            ) : (
              <PhoneCanvas
                isDarkMode={isDarkMode}
                demo={project.demo}
                sparkleColor={project.color}
              />
            )}
          </div>
        )}

        <div className="flex flex-col col-span-2 items-center space-y-5">
          {project.images.map((image, index) => (
            <img
              src={image}
              className={`${
                isMobile ? "max-h-full" : "h-[700px]"
              } max-w-full rounded-lg shadow-lg`}
              alt={`Project Image ${index}`}
              key={`image-${index}`}
            />
          ))}
        </div>
      </div>

      <div>Next Project</div>
    </section>
  );
}

export default ProjectDetails;
