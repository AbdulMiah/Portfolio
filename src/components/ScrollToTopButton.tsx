import { IconArrowUp } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scaleAnimation } from "../utils/motionVariants";

function ScrollToTopButton() {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      className="fixed bottom-5 right-8 z-50 p-4 rounded-xl bg-royal-blue-200"
      onClick={scrollToTop}
    >
      <IconArrowUp className="h-10 w-10" />
    </motion.button>
  );
}

export default ScrollToTopButton;
