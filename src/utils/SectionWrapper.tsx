import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { staggerAnimation } from "./motionVariants";

const SectionWrapper = (PageComponent: any, id: string, offset: number = 0) =>
  function HOC(props: any) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const currentlyVisible =
            rect.top <= window.innerHeight && rect.bottom >= 0;

          if (currentlyVisible && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [id, hasAnimated]);

    return (
      <motion.section
        variants={staggerAnimation(0.2)}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div
          id={id}
          style={{ paddingTop: `${offset}px`, marginTop: `-${offset}px` }}
        >
          <PageComponent {...props} />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
