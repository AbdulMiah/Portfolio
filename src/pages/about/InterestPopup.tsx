import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { popOutAnimation } from "../../utils/motionVariants";

type InterestPopupProp = {
  isDarkMode: boolean;
  description: string;
  setDescription: (description: string) => void;
};

function InterestPopup({
  isDarkMode,
  description,
  setDescription,
}: InterestPopupProp) {
  return (
    <motion.div
      variants={popOutAnimation(0.2, 0.1)}
      initial="hidden"
      animate="show"
      className={`${
        isDarkMode ? "bg-black" : "bg-grey-200"
      } h-full w-full grid grid-rows-5 rounded-xl p-5`}
    >
      <div className="relative row-span-5">
        <IconX
          onClick={() => setDescription("")}
          className="absolute top-0 right-0 cursor-pointer"
        />
        <span className="flex items-center justify-center h-full pt-6">
          {description}
        </span>
      </div>
    </motion.div>
  );
}

export default InterestPopup;
