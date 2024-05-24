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

const parseShortMonthYear = (
  dateStr: string
): Date => {
  const [month, yearStr] = dateStr.split(" ");
  const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthIndex = months.indexOf(month);
  if (monthIndex === -1) {
      throw new Error("Invalid month");
  }

  const year = parseInt(yearStr);

  return new Date(year, monthIndex);
}

const calculateTimeDifference = (
  startDate: string,
  endDate: string
): string => {
  const start = parseShortMonthYear(startDate);
  const end = endDate === "Present" ? new Date() : parseShortMonthYear(endDate);

  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  return years > 0
    ? months > 0
      ? `${years} year${years > 1 ? "s" : ""} ${months} month${
          months > 1 ? "s" : ""
        }`
      : `${years} year${years > 1 ? "s" : ""}`
    : `${months} month${months > 1 ? "s" : ""}`;
};

function ExperienceCard({
  isDarkMode,
  isMobile,
  experience,
}: ExperienceCardProp) {
  const [start, end] = experience.date.split(" - ");
  const timeDifference = calculateTimeDifference(start, end);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#465FE5",
        borderBottom: isDarkMode ? "none" : "4px solid black",
      }}
      contentArrowStyle={{
        borderRight: `${isDarkMode ? "8px solid #fff" : "8px solid #000"}`,
      }}
      date={`${experience.date} ≈ ${timeDifference}`}
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
