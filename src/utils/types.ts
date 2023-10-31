import { TablerIconsProps } from "@tabler/icons-react";

export type NavLink = {
    id: string;
    title: string;
};

export type About = {
    description: string;
    interests: Interest[];
};

export type Interest = {
    title: string;
    icon: (props: TablerIconsProps) => JSX.Element;
    description: string;
}

export type Skill = {
    title: string;
    icon: (props: TablerIconsProps) => JSX.Element;
}

export type Project = {
    title: string;
    description: string;
    skills: Skill[];
    link: string;
    hero: string;
    images: string[];
    delay: number;
};

export type Expertise = {
    title: string;
    employmentType: string;
    companyName: string;
    companyLink: string;
    location: string;
    icon: string;
    iconBg: string;
    date: string;
    summary: string[];
    skills: Skill[];
}