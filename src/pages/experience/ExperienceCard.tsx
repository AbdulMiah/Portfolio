import { useEffect, useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { IconMapPinFilled } from "@tabler/icons-react";

type ExperienceCardProp = {
  isDarkMode: boolean;
  key: number;
  experience: any;
};

function ExperienceCard({ isDarkMode, key, experience }: ExperienceCardProp) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#465FE5" }}
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
            {experience.companyName}
            <span> • {experience.employmentType}</span>
          </h6>
        </div>
        <h6 className="flex space-x-1 items-center">
          <IconMapPinFilled className="h-5 w-5" />
          <span> {experience.location}</span>
        </h6>
        <p>{experience.summary}</p>
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
