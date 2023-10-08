import { IconArrowUp } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scaleAnimation } from "../utils/motionVariants";

type ScrollToTopButtonProp = {
  isMobile: boolean;
};

function ScrollToTopButton({ isMobile }: ScrollToTopButtonProp) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <motion.button
      variants={
        visible
          ? scaleAnimation([null, 1.2, 1], 0.4)
          : scaleAnimation([1, 1.2, 0], 0.2)
      }
      initial="hidden"
      animate="show"
      className={`${
        isMobile ? "p-2" : "p-4"
      } fixed bottom-5 right-8 z-50 rounded-xl bg-royal-blue-200`}
      onClick={scrollToTop}
    >
      <IconArrowUp className="h-10 w-10" />
    </motion.button>
  );
}

export default ScrollToTopButton;
