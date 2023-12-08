import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { socialLinks } from "../utils/constants";
import { scaleAnimation } from "../utils/motionVariants";
import Tooltip from "@mui/material/Tooltip";

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
        <Tooltip title="Follow me on LinkedIn">
          <IconBrandLinkedin className="hover:fill-royal-blue-200" />
        </Tooltip>
      </motion.a>
      <motion.a
        variants={scaleAnimation([null, 1.3, 1.2], 0.1)}
        initial="hidden"
        whileHover="show"
        href={socialLinks.github}
        target="_blank"
      >
        <Tooltip title="Explore my GitHub">
          <IconBrandGithub className="hover:fill-royal-blue-200" />
        </Tooltip>
      </motion.a>
    </div>
  );
}

export default Socials;
