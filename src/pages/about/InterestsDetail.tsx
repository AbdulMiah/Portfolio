import { IconX } from "@tabler/icons-react";

type InterestsPopupProp = {
  isDarkMode: boolean;
  description: string;
  setDescription: (description: string) => void;
};

function InterestsPopup({
  isDarkMode,
  description,
  setDescription,
}: InterestsPopupProp) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-black" : "bg-grey-200"
      } h-full w-full grid grid-rows-3 rounded-xl`}
    >
      <div onClick={() => setDescription("")}>
        <IconX />
      </div>
      <div className="row-span-2">{description}</div>
    </div>
  );
}

export default InterestsPopup;
