import { motion } from "framer-motion";
import SectionWrapper from "../../utils/SectionWrapper";
import { slideDown } from "../../utils/motionVariants";
import Form from "./Form";

type ContactProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Contact({ isDarkMode, isMobile }: ContactProp) {
  return (
    <section
      className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-[60%,40%]"} p-5`}
    >
      <div className="flex flex-col items-center text-center space-y-5">
        <motion.div variants={slideDown(0.2)} className="font-bold">
          {isMobile ? (
            <>
              <h3>Let's</h3>
              <h2 className="text-royal-blue-100">Talk.</h2>
            </>
          ) : (
            <>
              <h2>Let's</h2>
              <h1 className="text-royal-blue-100">Talk.</h1>
            </>
          )}
        </motion.div>

        <motion.p variants={slideDown(0.4)} className="font-bold">
          Questions, bug reports, feedback - I'm here for it all.
        </motion.p>

        <Form isDarkMode={isDarkMode} />
      </div>

      {!isMobile && (
        <div className="flex justify-center items-center">
          <h3>Telephone Model</h3>
        </div>
      )}
    </section>
  );
}

export default SectionWrapper(Contact, "contact", 30);
