import { motion } from "framer-motion";
import { IconMouse } from "@tabler/icons-react";
import AvatarSitting from "./AvatarSitting";
import Socials from "../../components/Socials";
import { popOutAnimation } from "../../utils/motionVariants";

type LandingProp = {
  isMobile: boolean;
};

function Landing({ isMobile }: LandingProp) {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 top-[120px] items-start">
        <div className="flex flex-col justify-center items-center h-[80vh] gap-9">
          {isMobile ? (
            <>
              <motion.h2
                variants={popOutAnimation(0.8, 0.2)}
                initial="hidden"
                animate="show"
                className="font-bold text-center"
              >
                Hi, I'm
                <span className="text-royal-blue-100"> Abdul!</span>
              </motion.h2>
              <motion.h5
                variants={popOutAnimation(0.8, 0.3)}
                initial="hidden"
                animate="show"
              >
                I'm a Software Engineer.
              </motion.h5>
            </>
          ) : (
            <>
              <motion.h1
                variants={popOutAnimation(0.8, 0.2)}
                initial="hidden"
                animate="show"
                className="font-bold text-center"
              >
                Hi, I'm
                <span className="text-royal-blue-100"> Abdul!</span>
              </motion.h1>
              <motion.h4
                variants={popOutAnimation(0.8, 0.3)}
                initial="hidden"
                animate="show"
              >
                I'm a Software Engineer.
              </motion.h4>
            </>
          )}

          <motion.div
            className="w-[60vw] h-[60vh] flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [null, 1.4, 1] }}
            transition={{ duration: 0.3, delay: 2.5 }}
          >
            <AvatarSitting />
          </motion.div>
          <Socials />
          <a href="#about">
            <IconMouse className="animate-bounce h-12 w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
