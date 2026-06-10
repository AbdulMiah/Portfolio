import {
  bbc,
  creditsafe,
  financialforce,
  fitin,
  fitinDemo,
  instock,
  instockDemo,
  wrackreport,
  wrackreportDemo,
  prayerpal,
  prayerpalDemo,
  e2s,
  e2sDemo,
  hafod,
  hafodDemo,
} from "../assets";
import {
  IconBarbell,
  IconCpu,
  IconPlaneTilt,
  IconCar,
  IconPlayFootball,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandCSharp,
  IconDatabase,
  IconBrandPython,
  IconBrandAws,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandTerraform,
  IconBrandDocker,
  IconGitPullRequest,
  IconBrandFlutter,
  IconBrandMysql,
  IconCoffee,
  IconFileTypeXml,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGithub,
  IconRocket,
  IconDeviceWatch,
} from "@tabler/icons-react";
import { Project, NavLink, About, Experience, ProjectType } from "./types";

export const loadingMessages: string[] = [
  "Just a tad more patience! 3D models are preparing for their grand entrance...",
  "Almost there...",
];

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Experiences",
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

export const about: About = {
  description:
    "If you made it here, you're curious about who I am and what I do, so hi, I'm Abdul, a Software Engineer who enjoys building scalable and reliable applications!\
    \n\nI've worked in collaborative Agile teams where I take ownership of my work, contribute to improving the product, and help make the development process smoother (without setting anything on fire 😅)\
    \n\nI also enjoy helping others grow by sharing knowledge and supporting teammates, and occasionally posting thoughts and insights on LinkedIn.\
    \n\nMost of all, I'm driven by continuous improvement and always looking for ways to sharpen my skills, build better systems, and create meaningful impact through technology.",
  interests: [
    {
      title: "Gym",
      icon: IconBarbell,
      description:
        "The gym is practically my second home; a place where I've built discipline and consistency, and learned that progress is earned, not given. I enjoy pushing past limits, and the quiet satisfaction of hitting a new personal best. It's not just about lifting weights; it's about showing up, staying consistent, and getting a little better each time (even on the days I really don't feel like it).",
    },
    {
      title: "Tech",
      icon: IconCpu,
      description:
        "I have a strong interest in the ever-evolving world of technology. I enjoy keeping up with new tools, trends, and innovations, and understanding how they shape the way we build and use software. For me, it's about staying curious, continuously learning, and keeping up with an industry that never really stands still.",
    },
    {
      title: "Travel",
      icon: IconPlaneTilt,
      description:
        "I enjoy travelling and exploring new places whenever I can. Experiencing different cultures, environments, and perspectives keeps things interesting and gives me a fresh outlook beyond day-to-day routines. Sometimes it's nice to step outside the familiar and seeing a bit more of what the world has to offer.",
    },
    {
      title: "Cars",
      icon: IconCar,
      description:
        "From classic designs to modern performance machines, I enjoy learning about the engineering, design, and innovation within the realm of automobiles! There's also something exhilarating about the experience of driving a high-performance four-wheeled machine that I can't quite explain...",
    },
    {
      title: "Sport",
      icon: IconPlayFootball,
      description:
        "Sports has a unique way of bringing people together while pushing your limits! I've recently joined the padel craze... still figuring out what all the hype is about, but enjoying it so far! Whether it's a win or a loss, it's always a good session!",
    },
    {
      title: "Watches",
      icon: IconDeviceWatch,
      description:
        "My interest in watches is relatively recent, but it's one I've quickly grown to appreciate. I'm fascinated by their design, craftsmanship, and innovation, especially given how they've evolved over centuries whilst remaining 'timeless'. There's something impressive about how they blend engineering and style, turning a functional object into a piece of art that sits on your wrist.",
    },
  ],
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    employmentType: "Full-time",
    companyName: "BBC",
    companyLink: "https://www.bbc.co.uk/",
    location: "Salford, Manchester",
    logo: bbc,
    iconBg: "#FFFFFF",
    date: "Apr 2026 - Present",
    summary: [
      "CI/CD & Automation: Enhanced Jenkins pipeline templates to support Python projects, improving build consistency and developer experience across teams.",
      "Search & ML Enhancements: Contributed to a new enhancement of the BBC search functionality, leveraging ML models to improve entity recognition from user queries and boost search relevance.",
      "Scalable Deployment: Deployed the new service using scalable infrastructure practices, utilising Elastic Load Balancing (ELB) and Auto Scaling Groups (ASG) to ensure reliability and performance under load.",
      "Monitoring & Observability: Built dashboards and configured alerts to monitor system health, helping proactively detect and resolve issues across the infrastructure and APIs.",
    ],
    skills: [
      {
        title: "TypeScript",
        icon: IconBrandTypescript,
      },
      {
        title: "JavaScript",
        icon: IconBrandJavascript,
      },
      {
        title: "Node.js",
        icon: IconBrandNodejs,
      },
      {
        title: "Java",
        icon: IconBrandCSharp,
      },
      {
        title: "Python",
        icon: IconBrandPython,
      },
      {
        title: "AWS",
        icon: IconBrandAws,
      },
      {
        title: "Jenkins",
        icon: IconGitPullRequest,
      },
    ],
  },
  {
    title: "Software Engineer",
    employmentType: "Full-time",
    companyName: "Creditsafe",
    companyLink: "https://www.creditsafe.com/",
    location: "Cardiff, Wales",
    logo: creditsafe,
    iconBg: "#EE2A1F",
    date: "May 2023 - Mar 2026",
    summary: [
      "Full-stack development: Contributed to both React.js frontend development and ASP.NET backend API development.",
      "Data Management Tools: Delivered valuable features and improvements to internal tools, facilitating the data team's efficient management of customer data.",
      "Agile Collaboration: Actively participated in discussions during '3 Amigos' sessions to analyse, estimate workload, and determine story points for upcoming tasks.",
      "Product Alignment: Engaged closely with the product manager to align technical solutions with business objectives, ensuring goal-aligned solutions.",
    ],
    skills: [
      {
        title: "Python",
        icon: IconBrandPython,
      },
      {
        title: "AWS",
        icon: IconBrandAws,
      },
      {
        title: "Terraform",
        icon: IconBrandTerraform,
      },
      {
        title: "Azure CI/CD Pipelines",
        icon: IconRocket,
      },
      {
        title: "React.js",
        icon: IconBrandReact,
      },
      {
        title: "JavaScript",
        icon: IconBrandJavascript,
      },
      {
        title: "C# ASP .Net",
        icon: IconBrandCSharp,
      },
      {
        title: "Postgres / Oracle DB",
        icon: IconDatabase,
      },
    ],
  },
  {
    title: "Software Engineer",
    employmentType: "Internship",
    companyName: "Certinia (Formerly FinancialForce)",
    companyLink: "https://certinia.com/",
    location: "Harrogate, England",
    logo: financialforce,
    iconBg: "#fff",
    date: "Jun 2022 - Aug 2022",
    summary: [
      "DevOps Collaboration: Worked closely with DevOps to maintain organisational infrastructure, contributing to enhanced software operations.",
      "Automated Jira Workflow: Developed a script automating the creation of Jira user stories from security alerts, streamlining issue management.",
      "Versatile Team Player: Successfully collaborated across various feature crews, engaging in pair programming and driving feature implementation.",
      "Quality Advocate: Played a key role in code reviews, testing, and agile ceremonies, emphasising a commitment to delivering top-quality software solutions.",
    ],
    skills: [
      {
        title: "TypeScript",
        icon: IconBrandTypescript,
      },
      {
        title: "JavaScript",
        icon: IconBrandJavascript,
      },
      {
        title: "Node.js",
        icon: IconBrandNodejs,
      },
      {
        title: "Terraform",
        icon: IconBrandTerraform,
      },
      {
        title: "Docker",
        icon: IconBrandDocker,
      },
      {
        title: "Jenkins",
        icon: IconGitPullRequest,
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    projectType: ProjectType.MOBILE_APP,
    title: "FIT-IN App",
    summary: [
      "FIT-IN is a platform built specifically for real-world, in-person sports communities.",
      "Helps people easily discover, join, or create sports groups in just a few clicks.",
      "Members can find groups based on interests, location, schedule, and skill level.",
      "Organisers get tools to manage events, communicate, and monetise their communities.",
      "Offers an all-in-one solution for running and growing sports communities.",
      "Features tailored search tools for members and robust admin tools for group owners.",
    ],
    description:
      "FIT-IN is a platform designed specifically for real-world sports communities, making it easy for people to discover, join, and create sports groups in just a few clicks. Members can find groups that match their interests, location, and schedule, while organisers get powerful tools to manage events, communicate, and monetise their communities — all in one place. Unlike generic platforms like Facebook, Meetup, or WhatsApp, FIT-IN offers tailored search and organisational features built for the unique needs of sports groups, helping both members and organisers connect, grow, and thrive.",
    skills: [
      {
        title: "Flutter",
        icon: IconBrandFlutter,
      },
      {
        title: "Python",
        icon: IconBrandPython,
      },
      {
        title: "AWS",
        icon: IconBrandAws,
      },
      {
        title: "Postgres",
        icon: IconDatabase,
      },
      {
        title: "Terraform",
        icon: IconBrandTerraform,
      },
      {
        title: "GitHub Actions",
        icon: IconBrandGithub,
      },
    ],
    link: null,
    images: fitin,
    demo: fitinDemo,
    delay: 0.6,
    color: "#FD8F29",
    isPublic: false,
  },
  {
    id: 2,
    projectType: ProjectType.MOBILE_APP,
    title: "InStock App",
    summary: [
      "Streamlines inventory management for small independent sellers.",
      "User-friendly mobile application.",
      "Modern and intuitive design.",
      "Manages stock levels efficiently across platforms (Etsy, Shopify, Faire).",
      "Centralised hub for unified and accurate stock representation.",
      "Seamless integration with popular selling platforms.",
      "Notifies users of low stock levels and stockouts.",
      "Provides a reliable single source of truth for inventory management.",
    ],
    description:
      "This project aims to streamline inventory management for small independent sellers by offering a user-friendly mobile application. The app features a modern and intuitive design, facilitating efficient stock level management across various selling platforms like Etsy, Shopify, and Faire. It serves as a centralised hub that seamlessly integrates with popular selling platforms, ensuring a unified and accurate representation of stock levels. Through strategic integrations, the application notifies users of low stock levels and stockouts, providing a reliable single source of truth for inventory management.",
    skills: [
      {
        title: "Flutter",
        icon: IconBrandFlutter,
      },
      {
        title: "C# ASP .Net",
        icon: IconBrandCSharp,
      },
      {
        title: "AWS",
        icon: IconBrandAws,
      },
      {
        title: "Figma",
        icon: IconBrandFigma,
      },
    ],
    link: "https://github.com/AbdulMiah/InStock",
    images: instock,
    demo: instockDemo,
    delay: 0.8,
    color: "#2FD4A3",
    isPublic: true,
  },
  {
    id: 3,
    projectType: ProjectType.WEB_APP,
    title: "WrackReport",
    summary: [
      "Comprehensive platform for flood incident management.",
      "Empowers residents and local councils.",
      "User-friendly website for seamless reporting and tracking.",
      "Interactive map functionalities for pinpointing incident locations.",
      "Residents submit detailed reports with flood type, descriptions, images/videos, contact details, and timestamps.",
      "Local councils have secure login for efficient navigation and focused investigation.",
      "Convenient table of report overviews for councils.",
    ],
    description:
      "A comprehensive platform designed to empower residents and local councils in addressing flood incidents swiftly and effectively. This user-friendly website facilitates seamless reporting and tracking of flood-related incidents, offering key features such as interactive map functionalities. Residents can effortlessly click on the map to pinpoint incident locations and submit detailed reports, including crucial information like flood type, descriptions, images/videos, contact details, and timestamps. The local council benefit from secure login capabilities, gaining access to a convenient table of report overviews for efficient navigation and focused investigation.",
    skills: [
      {
        title: "Java",
        icon: IconCoffee,
      },
      {
        title: "HTML",
        icon: IconBrandHtml5,
      },
      {
        title: "CSS",
        icon: IconBrandCss3,
      },
      {
        title: "JavaScript",
        icon: IconBrandJavascript,
      },
      {
        title: "MySQL",
        icon: IconBrandMysql,
      },
    ],
    link: "https://github.com/AbdulMiah/WrackReport",
    images: wrackreport,
    demo: wrackreportDemo,
    delay: 1,
    color: "#093d61",
    isPublic: true,
  },
  {
    id: 4,
    projectType: ProjectType.MOBILE_APP,
    title: "PrayerPal App",
    summary: [
      "Islamic prayer application for Muslims.",
      "Digital prayer schedule for accessibility and convenience.",
      "Global prayer times search with map functionality.",
      "Compass feature for determining prayer direction.",
      "Prayer tracker to mark completed prayers throughout the day.",
      "Page with a list of supplications (Duas) to enhance prayers.",
      "Notification system for timely alerts about the next prayer.",
    ],
    description:
      "Recognising the significance of prayer as one of the fundamental pillars of Islam, this is a practical Islamic prayer application for Muslims. The objective is to provide a more accessible and convenient option with a digitally displayed prayer schedule, allowing users to track their prayers from anywhere. The application incorporates various features, including a map functionality for searching prayer times globally, a compass to determine the prayer direction, a tracker enabling users to mark completed prayers throughout the day, a page offering a list of supplications (Duas) for users to enhance their prayers, and a notification system to alert users when it is time for the next prayer.",
    skills: [
      {
        title: "Java",
        icon: IconCoffee,
      },
      {
        title: "XML",
        icon: IconFileTypeXml,
      },
      {
        title: "Python",
        icon: IconBrandPython,
      },
    ],
    link: "https://github.com/AbdulMiah/PrayerPal",
    images: prayerpal,
    demo: prayerpalDemo,
    delay: 1.2,
    color: "#1a4331",
    isPublic: true,
  },
  {
    id: 5,
    projectType: ProjectType.WEB_APP,
    title: "E2S System",
    summary: [
      "Data visualisation tool for Facility Energy Managers to help monitor energy performance.",
      "Automated email updates for energy asset performance.",
      "Visual energy flow diagram for intuitive insights.",
      "Data consolidation for streamlined analysis.",
      "Accurate energy cost and consumption forecasting.",
      "Adjustable granularity on charts for user customisation.",
      "Access to historical reports for informed decision-making.",
      "Seamless switching between different sites.",
      "Admin functionalities: importing energy data, user management, site management, organisation management.",
    ],
    description:
      "This project addresses the identified problem of energy site managers, specifically facility energy managers, lacking essential data and tools for making informed decisions on energy cost savings and emission reduction. Key features include automated email updates on energy asset performance, a visual energy flow diagram for intuitive insights, data consolidation for streamlined analysis, and accurate energy cost and consumption forecasting. Users can easily adjust granularity on charts, access historical reports, and switch between sites. Admin functionalities encompass importing energy data, user management, site management, and organisation management.",
    skills: [
      {
        title: "React.js",
        icon: IconBrandReact,
      },
      {
        title: "TypeScript",
        icon: IconBrandTypescript,
      },
      {
        title: "Node.js",
        icon: IconBrandNodejs,
      },
      {
        title: "MySQL",
        icon: IconBrandMysql,
      },
    ],
    link: "https://github.com/AbdulMiah/E2S-System",
    images: e2s,
    demo: e2sDemo,
    delay: 1.4,
    color: "#417285",
    isPublic: true,
  },
  {
    id: 6,
    projectType: ProjectType.WEB_APP,
    title: "Hafod Data",
    summary: [
      "Software solution for a non-profit organisation focusing on affordable homes and support services.",
      "Features a map displaying Hafod's properties across Wales.",
      "Includes a heatmap for real-time COVID-19 cases near Wales and Hafod properties.",
      "Utilises bar graphs to show vaccination and infection status of residents.",
      "Incorporates a pie chart indicating popular vaccines among carers and tenants.",
      "Accessible to both carers and administrators for real-time updates.",
      "Admins can view and manage tenant and carer information through tables.",
    ],
    description:
      "This software is a tailored solution for a non-profit organisation committed to providing affordable homes and comprehensive support services. The platform features an interactive map showcasing Hafod's properties across Wales, alongside a dynamic heatmap offering real-time insights into COVID-19 cases in proximity to both Wales and Hafod properties. Through clear and informative bar graphs, the software presents the vaccination and infection status of residents, while a pie graph highlights popular vaccines among carers and tenants. Accessible to both carers and administrators, the user-friendly interface ensures real-time updates, with administrators having additional capabilities to manage tenant and carer information efficiently through intuitive tables.",
    skills: [
      {
        title: "Python",
        icon: IconBrandPython,
      },
      {
        title: "HTML",
        icon: IconBrandHtml5,
      },
      {
        title: "CSS",
        icon: IconBrandCss3,
      },
      {
        title: "JavaScript",
        icon: IconBrandJavascript,
      },
      {
        title: "MySQL",
        icon: IconBrandMysql,
      },
    ],
    link: "https://github.com/AbdulMiah/Hafod-Data",
    images: hafod,
    demo: hafodDemo,
    delay: 1.6,
    color: "gold",
    isPublic: true,
  },
];

export const footerText = `Copyright © 2023 - ${new Date().getFullYear()} | All Rights Reserved | Developed with passion by Abdul Muktadir Miah.`;
