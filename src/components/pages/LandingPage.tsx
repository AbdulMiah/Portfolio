import { motion } from "framer-motion";

type LandingPageProp = {
  isDarkMode: boolean;
};

function LandingPage({ isDarkMode }: LandingPageProp) {
  return (
    <div className={`${isDarkMode ? "dark" : ""} flex flex-col justify-center items-center h-screen`}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="font-bold"
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
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="mt-6"
        >
          I'm a Software Engineer.
        </motion.h4>
    </div>
  );
}

export default LandingPage;
