import Skeleton from "@mui/material/Skeleton";

type InitialLoaderProp = {
  isLoading: boolean;
};

function InitialLoader({ isLoading }: InitialLoaderProp) {
  return (
    isLoading && (
      <div className="absolute inset-0 z-50 flex flex-col justify-center items-center gap-6 mb-5 bg-white dark:bg-dark-100">
        <>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height="10%"
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="30%"
            height="20%"
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="20%"
            height="10%"
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="40%"
            height="60%"
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="10%"
            height="10%"
          />
        </>
      </div>
    )
  );
}

export default InitialLoader;
