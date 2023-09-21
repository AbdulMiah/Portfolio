import { creditsafe, financialforce } from "./assets";
import { IconBarbell, IconCpu, IconPlaneTilt, IconCar, IconPlayFootball, IconDeviceGamepad } from "@tabler/icons-react";

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
  description: "I am a driven Software Engineer with a strong passion for creating captivating applications. My dedication lies in crafting innovative and engaging software solutions. Constantly seeking opportunities to expand my knowledge and expertise in the ever-evolving field, I am fuelled by a deep curiosity for the latest technologies and their potential applications.",
  interests: [
    {
      title: "Gym",
      icon: IconBarbell,
      description: "Gym Enthusiast 💪🏋️‍♂️ The gym is my second home, where iron meets determination and sweat transforms into strength. I find solace in the rhythmic clank of weights, the adrenaline of a challenging workout, and the pursuit of personal records. It's more than just exercise; it's a lifestyle."
    },
    {
      title: "Tech",
      icon: IconCpu,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus commodo convallis."
    },
    {
      title: "Travel",
      icon: IconPlaneTilt,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus commodo convallis."
    },
    {
      title: "Cars",
      icon: IconCar,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus commodo convallis."
    },
    {
      title: "Sport",
      icon: IconPlayFootball,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus commodo convallis."
    },
    {
      title: "Games",
      icon: IconDeviceGamepad,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus commodo convallis."
    },
  ]
}

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
      "Node.js",
      "C# ASP .Net",
      "Docker",
    ]
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
    ]
  },
];