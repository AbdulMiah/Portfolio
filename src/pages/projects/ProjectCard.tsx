type ProjectCardProp = {
  isDarkMode: boolean;
  projects: any;
};

function ProjectCard({ isDarkMode, projects }: ProjectCardProp) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {projects.slice(0, 3).map((project: any, index: number) => (
        <div className="bg-royal-blue-100 rounded-xl p-5">{project.title}</div>
      ))}
    </div>
  );
}

export default ProjectCard;
