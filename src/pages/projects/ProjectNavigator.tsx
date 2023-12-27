import { Tooltip } from "@mui/material";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { projects } from "../../utils/constants";

type ProjectNavigatorProp = {
  currentProjectId: number;
};

function ProjectNavigator({ currentProjectId }: ProjectNavigatorProp) {
  const prevId =
    currentProjectId === 1 ? projects.length : currentProjectId - 1;
  const nextId =
    currentProjectId === projects.length ? 1 : currentProjectId + 1;

  const prevProject = projects.find(({ id }) => id === prevId);
  const nextProject = projects.find(({ id }) => id === nextId);

  return (
    <div className="sticky top-[120px] flex flex-col text-center items-center gap-4 p-5 rounded-lg shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
      <p>Project Navigator</p>
      <div className="flex flex-row gap-5 text-white">
        <Link to={`/project/${prevId}`}>
          <Tooltip
            title={`Previous: ${prevProject?.title}`}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <IconArrowLeft className="bg-royal-blue-100 rounded-lg cursor-pointer" />
          </Tooltip>
        </Link>
        <Link
          to={`/project/${nextId}`}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <Tooltip title={`Next: ${nextProject?.title}`}>
            <IconArrowRight className="bg-royal-blue-100 rounded-lg cursor-pointer" />
          </Tooltip>
        </Link>
      </div>
      <p>{`Next: ${nextProject?.title}`}</p>
    </div>
  );
}

export default ProjectNavigator;
