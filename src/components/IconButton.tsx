import { motion } from "framer-motion";
import { scaleAnimation } from "../utils/motionVariants";
import Tooltip from "@mui/material/Tooltip";

type IconButtonProp = {
  icon: JSX.Element;
  text?: string;
  tooltipText?: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
};

function IconButton({
  icon,
  text,
  tooltipText,
  type,
  disabled,
}: IconButtonProp) {
  return disabled ? (
    <Tooltip title={tooltipText}>
      <button
        type={type}
        className="bg-royal-blue-200 text-white py-2 px-3 rounded-[12px] inline-flex space-x-4 cursor-not-allowed"
      >
        {text && <span className="text-base">{text}</span>}
        {icon}
      </button>
    </Tooltip>
  ) : (
    <Tooltip title={tooltipText}>
      <motion.button
        variants={scaleAnimation([null, 1.2, 1.1], 0.1)}
        initial="hidden"
        whileHover="show"
        type={type}
        className="bg-royal-blue-100 hover:bg-royal-blue-200 text-white py-2 px-3 rounded-[12px] inline-flex space-x-4"
      >
        {text && <span className="text-base">{text}</span>}
        {icon}
      </motion.button>
    </Tooltip>
  );
}

export default IconButton;
