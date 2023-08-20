import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";

function Socials() {
  return (
    <div className="flex space-x-6">
      <motion.a
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.1 }}
        href="https://www.linkedin.com/in/abdul-m-miah/"
        target="_blank"
      >
        <IconBrandLinkedin className="hover:fill-royal-blue-200" />
      </motion.a>
      <motion.a
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.1 }}
        href="https://github.com/AbdulMiah"
        target="_blank"
      >
        <IconBrandGithub className="hover:fill-royal-blue-200" />
      </motion.a>
    </div>
  );
}

export default Socials;
