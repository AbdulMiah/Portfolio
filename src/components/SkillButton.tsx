import { motion } from "framer-motion";
import { scaleAnimation } from "../utils/motionVariants";

type SkillButtonProp = {
  isDarkMode: boolean;
  text: string;
  icon: JSX.Element;
};

function SkillButton({ isDarkMode, text, icon }: SkillButtonProp) {
  return (
    <motion.div
      variants={scaleAnimation([null, 1.1, 1.05], 0.1)}
      initial="hidden"
      whileHover="show"
      className={`${
        isDarkMode ? "bg-grey-100 text-black" : "bg-dark-100 text-white"
      } py-2 px-3 rounded-[12px] inline-flex space-x-1 cursor-default`}
    >
      {icon}
      <span className="text-base">{text}</span>
    </motion.div>
  );
}

export default SkillButton;
