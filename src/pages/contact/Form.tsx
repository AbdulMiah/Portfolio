import { IconSend } from "@tabler/icons-react";
import IconButton from "../../components/IconButton";
import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import emailjs from "@emailjs/browser";

type FormProp = {
  isDarkMode: boolean;
};

function Form({ isDarkMode }: FormProp) {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dggxdwd",
      "template_j5fdmsn",
      e.target,
      "1WMou0YgjyHfq-I6j"
    );
  };

  return (
    <motion.form
      variants={slideDown(0.6)}
      className="flex flex-col gap-5 w-1/2"
      onSubmit={sendEmail}
    >
      <label className="flex flex-col">
        <span className="self-start">Your Name</span>
        <input
          type="text"
          name="from_name"
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
        />
      </label>

      <label className="flex flex-col">
        <span className="self-start">Your Email</span>
        <input
          type="email"
          name="from_email"
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
        />
      </label>

      <label className="flex flex-col">
        <span className="self-start">Your Message</span>
        <textarea
          name="message"
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
        />
      </label>

      <div>
        <IconButton text="Send Message" icon={<IconSend />} type="submit" />
      </div>
    </motion.form>
  );
}

export default Form;
