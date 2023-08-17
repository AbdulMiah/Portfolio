import { motion } from "framer-motion";
import { IconMouse } from "@tabler/icons-react";
import AvatarSitting from "./AvatarSitting";
import Socials from "../../reusable/Socials";

type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  return (
    <section className={`${isDarkMode ? "dark" : ""} relative w-full h-screen`}>
      <div className="absolute inset-0 top-[120px] items-start">
        <div className="flex flex-col justify-center items-center h-[80vh] gap-9">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-bold text-center"
          >
            Hi, I'm
            <span className="text-royal-blue-100"> Abdul!</span>
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            I'm a Software Engineer.
          </motion.h4>
          <motion.div
            className="w-[60vw] h-[60vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [null, 1.4, 1] }}
            transition={{ duration: 0.3, delay: 2.5 }}
          >
            <AvatarSitting />
          </motion.div>
          <Socials />
          <IconMouse className="animate-bounce h-12 w-12" />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
