import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { IconMapPinFilled } from "@tabler/icons-react";
import Skill from "../../components/Skill";

type ExperienceCardProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  key: number;
  experience: any;
};

function ExperienceCard({
  isDarkMode,
  isMobile,
  key,
  experience,
}: ExperienceCardProp) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#465FE5",
        borderBottom: isDarkMode ? "none" : "4px solid black",
      }}
      contentArrowStyle={{
        borderRight: `${isDarkMode ? "8px solid #fff" : "8px solid #000"}`,
      }}
      date={experience.date}
      dateClassName={`${
        isDarkMode && !isMobile
          ? "dark"
          : !isDarkMode && !isMobile
          ? ""
          : "text-white"
      }`}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img src={experience.icon} alt={experience.companyName} />
        </div>
      }
    >
      <div className="text-white">
        <div className="flex justify-between">
          <h4>{experience.title}</h4>
          <h6>
            <a
              className="hover:underline"
              href={experience.companyLink}
              target="_blank"
            >
              {experience.companyName}
            </a>
            <span> • {experience.employmentType}</span>
          </h6>
        </div>
        <h6 className="flex space-x-1 items-center">
          <IconMapPinFilled className="h-5 w-5" />
          <span> {experience.location}</span>
        </h6>
        <p>{experience.summary}</p>

        <div className="flex flex-wrap gap-1 justify-center mt-5">
          {experience.skills.map((skill: string) => (
            <Skill text={skill} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
