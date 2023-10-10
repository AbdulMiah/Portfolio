import { creditsafe, financialforce } from "./assets";
import {
  IconBarbell,
  IconCpu,
  IconPlaneTilt,
  IconCar,
  IconPlayFootball,
  IconDeviceGamepad,
} from "@tabler/icons-react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/abdul-m-miah/",
  github: "https://github.com/AbdulMiah",
};

export const cvPath = "/assets/Abdul Muktadir Miah - CV.pdf";

export const about = {
  description:
    "I am a driven Software Engineer with a strong passion for creating captivating applications. My dedication lies in crafting innovative and engaging software solutions. Constantly seeking opportunities to expand my knowledge and expertise in the ever-evolving field, I am fuelled by a deep curiosity for the latest technologies and their potential applications.",
  interests: [
    {
      title: "Gym",
      icon: IconBarbell,
      description:
        "The gym is my second home 🏠, where iron meets determination and sweat transforms into strength 💪. I find solace in the rhythmic clank of weights 🏋️‍♂️, the adrenaline of a challenging workout 🏃‍♂️, and the pursuit of personal records 📈. It's more than just exercise; it's a lifestyle.",
    },
    {
      title: "Tech",
      icon: IconCpu,
      description:
        "My passion lies in the ever-evolving world of technology 🌐. From the latest gadgets and cutting-edge innovations 📱 to coding and digital trends 💻, I thrive on staying at the forefront of what's happening in the tech universe 🚀.",
    },
    {
      title: "Travel",
      icon: IconPlaneTilt,
      description:
        "Eager to explore the world 🌍, I'm captivated by the endless possibilities of travel ✈️. My heart belongs to the thrill of discovering new destinations 🗺️ and immersing myself in diverse cultures.",
    },
    {
      title: "Cars",
      icon: IconCar,
      description:
        "Whether it's classic masterpieces or the latest in high-speed marvels, I'm continually impressed by the craftsmanship and innovation within the realm of automobiles 🏎️. My fascination knows no bounds as I delve into the design, innovation, and engineering of these four-wheeled machines 🛠️. And let's not forget the exhilaration that comes from harnessing the raw horsepower that powers them 🚀!",
    },
    {
      title: "Sport",
      icon: IconPlayFootball,
      description:
        "From the adrenaline rush of the game to the dedication and teamwork it entails, I'm all in 🙌. The electrifying realm of sports has a unique way of bringing people together and pushing the limits of human potential 🌟. The joy of victory (or even the lessons in defeat) keep me motivated 🏆.",
    },
    {
      title: "Games",
      icon: IconDeviceGamepad,
      description:
        "In the captivating realm of video games 🎮, I thrive on the thrill of competition 🏆. Whether it's epic quests or strategic battles, I relish the opportunity to test my skills and outwit opponents in every game I play 🧠💪. These digital adventures not only ignite my imagination but also fuel my competitive spirit 🔥!",
    },
  ],
};

export const experiences = [
  {
    title: "Software Developer",
    employmentType: "Full-time",
    companyName: "Creditsafe",
    companyLink: "https://www.creditsafe.com/",
    location: "Caerphilly, Wales",
    icon: creditsafe,
    iconBg: "#EE2A1F",
    date: "May 2023 - Present",
    summary: [
      "Full-stack development: Contributed to both React.js frontend development and ASP.NET backend API development.",
      "Data Management Tools: Delivered valuable features and improvements to internal tools, facilitating the data team's efficient management of customer data.",
      "Agile Collaboration: Actively participated in discussions during '3 Amigos' sessions to analyse, estimate workload, and determine story points for upcoming tasks.",
      "Product Alignment: Engaged closely with the product manager to align technical solutions with business objectives, ensuring goal-aligned solutions.",
    ],
    skills: [
      "React.js",
      "JavaScript",
      "C# ASP .Net",
      "Oracle DB",
      "Python",
      "AWS Lambda",
    ],
  },
  {
    title: "Software Engineer",
    employmentType: "Internship",
    companyName: "FinancialForce",
    companyLink: "https://certinia.com/",
    location: "Harrogate, England",
    icon: financialforce,
    iconBg: "#fff",
    date: "Jun 2022 - Aug 2022",
    summary: [
      "DevOps Collaboration: Worked closely with DevOps to maintain organisational infrastructure, contributing to enhanced software operations.",
      "Automated Jira Workflow: Developed a script automating the creation of Jira user stories from security alerts, streamlining issue management.",
      "Versatile Team Player: Successfully collaborated across various feature crews, engaging in pair programming and driving feature implementation.",
      "Quality Advocate: Played a key role in code reviews, testing, and agile ceremonies, emphasising a commitment to delivering top-quality software solutions.",
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Terraform",
      "Docker",
      "Jenkins",
    ],
  },
];

export const projects = [
  {
    name: "InStock App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis sodales ligula id luctus.",
    skills: ["Flutter", "Dart", "C# ASP .Net", "AWS"],
    link: "https://github.com/AbdulMiah/InStock",
    hero: "",
    images: [],
  },
  {
    name: "E2S System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis sodales ligula id luctus.",
    skills: ["React.js", "TypeScript", "Node.js", "MySQL"],
    link: "https://github.com/AbdulMiah/E2S-System",
    hero: "",
    images: [],
  },
  {
    name: "PrayerPal App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis sodales ligula id luctus.",
    skills: ["Java", "XML"],
    link: "https://github.com/AbdulMiah/PrayerPal",
    hero: "",
    images: [],
  },
  {
    name: "WrackReport",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis sodales ligula id luctus.",
    skills: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://github.com/AbdulMiah/WrackReport",
    hero: "",
    images: [],
  },
];
