import { motion } from "framer-motion";

type SkillProp = {
  isDarkMode: boolean;
  text: string;
};

function Skill({ isDarkMode, text }: SkillProp) {
  return (
    <motion.button
      whileHover={{ scale: [null, 1.1, 1.05] }}
      transition={{ duration: 0.1 }}
      className={`${
        isDarkMode ? "bg-grey-100 text-black" : "bg-dark-100 text-white"
      } hover:bg-royal-blue-200 py-2 px-3 rounded-[12px] inline-flex`}
    >
      {text}
    </motion.button>
  );
}

export default Skill;
