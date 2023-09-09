import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceCardProp = {
  isDarkMode: boolean;
  key: number;
  experience: any;
};

function ExperienceCard({ isDarkMode, key, experience }: ExperienceCardProp) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#465FE5", color: "#fff" }}
      contentArrowStyle={{}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img src={experience.icon} alt={experience.companyName} />
        </div>
      }
    >
      <div>{experience.title}</div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
