import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { staggerAnimation } from "./motionVariants";

const SectionWrapper = (PageComponent: any, id: string, offset: number = 0) =>
  function HOC(props: any) {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (inView) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    }, [inView, controls]);

    return (
      <motion.section
        variants={staggerAnimation(0.2)}
        initial="hidden"
        animate={controls}
        ref={ref}
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
