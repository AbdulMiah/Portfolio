import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";

function Socials() {
  return (
    <div className="flex space-x-6">
      <motion.a
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.1 }}
        href={socialLinks.linkedin}
        target="_blank"
      >
        <IconBrandLinkedin className="hover:fill-royal-blue-200" />
      </motion.a>
      <motion.a
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.1 }}
        href={socialLinks.github}
        target="_blank"
      >
        <IconBrandGithub className="hover:fill-royal-blue-200" />
      </motion.a>
    </div>
  );
}

export default Socials;
