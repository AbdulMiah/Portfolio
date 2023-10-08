import { motion } from "framer-motion";
import { scaleAnimation } from "../utils/motionVariants";

type SkillProp = {
  isDarkMode: boolean;
  text: string;
};

function Skill({ isDarkMode, text }: SkillProp) {
  return (
    <motion.div
      variants={scaleAnimation([null, 1.1, 1.05], 0.1)}
      initial="hidden"
      whileHover="show"
      className={`${
        isDarkMode ? "bg-grey-100 text-black" : "bg-dark-100 text-white"
      } hover:bg-royal-blue-200 py-2 px-3 rounded-[12px] inline-flex cursor-default`}
    >
      {text}
    </motion.div>
  );
}

export default Skill;
