import Skeleton from "@mui/material/Skeleton";
import { wave } from "../assets";
import LinearProgress from "@mui/material/LinearProgress";

type InitialLoaderProp = {
  isLoading: boolean;
  isDarkMode: boolean;
};

function InitialLoader({ isLoading, isDarkMode }: InitialLoaderProp) {
  const skeletonBgColor = isDarkMode ? "#18191b" : "#DCDCDC";
  return (
    isLoading && (
      <div className="absolute inset-0 z-50 flex flex-col justify-center items-center gap-6 mb-5 bg-white dark:bg-dark-100">
        <>
          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width="100%"
            height="10%"
          />
          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width="30%"
            height="20%"
          />
          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width="20%"
            height="10%"
          />

          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width="40%"
            height="60%"
          />

          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width="10%"
            height="10%"
          />
        </>
        <div className="absolute inset-0 z-50 flex flex-col justify-center items-center gap-5">
          <img src={wave} className="h-80" />
          <h5 className="text-royal-blue-100 font-bold">
            Just a moment, rendering all 3D assets...
          </h5>
          <LinearProgress className="w-1/3" color="inherit" />
        </div>
      </div>
    )
  );
}

export default InitialLoader;
