import { TablerIconsProps } from "@tabler/icons-react";

export type NavLink = {
  id: string;
  title: string;
};

type Icon = (props: TablerIconsProps) => JSX.Element;

export type Interest = {
  title: string;
  icon: Icon;
  description: string;
};

export type About = {
  description: string;
  interests: Interest[];
};

export type Skill = {
  title: string;
  icon: Icon;
};

export type Project = {
  id: number;
  title: string;
  summary: string[];
  description: string;
  skills: Skill[];
  link: string;
  hero: string;
  images: string[];
  demo: string;
  delay: number;
};

export type Experience = {
  title: string;
  employmentType: string;
  companyName: string;
  companyLink: string;
  location: string;
  logo: string;
  iconBg: string;
  date: string;
  summary: string[];
  skills: Skill[];
};
