import { motion } from "framer-motion";

const SectionWrapper = (PageComponent: any, id: string, offset: number = 0) =>
  function HOC(props: any) {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
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
