export type Project = {
    title: string;
    description: string;
    skills: {
      title: string;
      icon: React.ComponentType;
    }[];
    link: string;
    hero: string;
    images: string[];
    delay: number;
  };