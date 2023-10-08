import { IconX } from "@tabler/icons-react";

type InterestDetailProp = {
  isDarkMode: boolean;
  description: string;
  setDescription: (description: string) => void;
};

function InterestDetail({
  isDarkMode,
  description,
  setDescription,
}: InterestDetailProp) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-black" : "bg-grey-200"
      } h-full w-full grid grid-rows-5 rounded-xl p-5`}
    >
      <div onClick={() => setDescription("")}>
        <IconX className="cursor-pointer float-right" />
      </div>
      <div className="row-span-4">{description}</div>
    </div>
  );
}

export default InterestDetail;