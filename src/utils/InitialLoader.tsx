import Skeleton from "@mui/material/Skeleton";
import { wave } from "../assets";
import LinearProgress from "@mui/material/LinearProgress";

type InitialLoaderProp = {
  isLoading: boolean;
  isMobile: boolean;
  isDarkMode: boolean;
  loadingText: string;
};

function InitialLoader({
  isLoading,
  isMobile,
  isDarkMode,
  loadingText,
}: InitialLoaderProp) {
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
            width={`${isMobile ? "60%" : "30%"}`}
            height={`${isMobile ? "10%" : "20%"}`}
          />
          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width={`${isMobile ? "50%" : "20%"}`}
            height={`${isMobile ? "5%" : "10%"}`}
          />

          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width={`${isMobile ? "70%" : "40%"}`}
            height="60%"
          />

          <Skeleton
            sx={{ bgcolor: skeletonBgColor }}
            variant="rectangular"
            width={`${isMobile ? "15%" : "10%"}`}
            height="10%"
          />
        </>
        <div className="absolute inset-0 z-50 flex flex-col justify-center items-center gap-5">
          <img src={wave} className={`${isMobile ? "h-52" : "h-80"}`} />
          <h5 className="text-center text-royal-blue-100 font-bold">
            {loadingText}
          </h5>
          <LinearProgress
            className={`${isMobile ? "w-60" : "w-1/3"}`}
            color="inherit"
          />
        </div>
      </div>
    )
  );
}

export default InitialLoader;
