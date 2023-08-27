import { motion } from "framer-motion";

type IconButtonProp = {
  icon: JSX.Element;
  text: string;
};

function IconButton({ icon, text }: IconButtonProp) {
  return (
    <motion.button
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.1 }}
      className="bg-royal-blue-100 hover:bg-royal-blue-200 text-white py-2 px-3 rounded-[12px] inline-flex space-x-4"
    >
      <span className="text-base">{text}</span>
      {icon}
    </motion.button>
  );
}

export default IconButton;
