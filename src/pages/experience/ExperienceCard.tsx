import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { IconMapPinFilled } from "@tabler/icons-react";
import SkillButton from "../../components/SkillButton";
import { motion } from "framer-motion";
import { popOutAnimation, staggerAnimation } from "../../utils/motionVariants";
import { Experience, Skill } from "../../utils/types";

type ExperienceCardProp = {
  isDarkMode: boolean;
  isMobile: boolean;
  experience: Experience;
};

function ExperienceCard({
  isDarkMode,
  isMobile,
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
          <img src={experience.logo} alt={experience.companyName} />
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
          <IconMapPinFilled className="h-5 w-5 animate-pulse" />
          <span> {experience.location}</span>
        </h6>
        <motion.ul
          variants={staggerAnimation(0.2)}
          initial="hidden"
          whileInView="show"
          className="p-5 list-disc"
        >
          {experience.summary.map((point: string, index: number) => {
            const [boldText, restOfText] = point.split(": ");
            return (
              <motion.li
                key={`summary-point-${index}`}
                variants={popOutAnimation(0.5, 0.2)}
                initial="hidden"
                whileInView="show"
              >
                <strong>{boldText}:</strong> {restOfText}
              </motion.li>
            );
          })}
        </motion.ul>

        <div className="flex flex-wrap gap-1 justify-center">
          {experience.skills.map((skill: Skill, index: number) => (
            <SkillButton
              key={`skill-${index}`}
              text={skill.title}
              icon={<skill.icon />}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
