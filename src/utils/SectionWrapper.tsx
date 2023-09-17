import { motion } from "framer-motion";

const SectionWrapper = (PageComponent: any, id: string) =>
  function HOC(props: any) {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span id={id} />
        <PageComponent {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
