import { motion } from "framer-motion";
import { scaleAnimation } from "../utils/motionVariants";

type IconButtonProp = {
  icon: JSX.Element;
  text?: string;
};

function IconButton({ icon, text }: IconButtonProp) {
  return (
    <motion.button
      variants={scaleAnimation([null, 1.2, 1.1], 0.1)}
      initial="hidden"
      whileHover="show"
      className="bg-royal-blue-100 hover:bg-royal-blue-200 text-white py-2 px-3 rounded-[12px] inline-flex space-x-4"
    >
      {text && <span className="text-base">{text}</span>}
      {icon}
    </motion.button>
  );
}

export default IconButton;
