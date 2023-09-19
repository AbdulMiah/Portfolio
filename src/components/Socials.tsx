import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { scaleAnimation } from "../utils/motionVariants";

function Socials() {
  return (
    <div className="flex space-x-6">
      <motion.a
        variants={scaleAnimation([null, 1.3, 1.2], 0.1)}
        initial="hidden"
        whileHover="show"
        href={socialLinks.linkedin}
        target="_blank"
      >
        <IconBrandLinkedin className="hover:fill-royal-blue-200" />
      </motion.a>
      <motion.a
        variants={scaleAnimation([null, 1.3, 1.2], 0.1)}
        initial="hidden"
        whileHover="show"
        href={socialLinks.github}
        target="_blank"
      >
        <IconBrandGithub className="hover:fill-royal-blue-200" />
      </motion.a>
    </div>
  );
}

export default Socials;
