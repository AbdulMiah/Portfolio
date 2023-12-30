import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
  IconSend,
} from "@tabler/icons-react";
import IconButton from "../../components/IconButton";
import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Pill from "../../components/Pill";
import { PillProp } from "../../utils/types";
import LabeledInput from "./LabeledInput";

type FormProp = {
  isDarkMode: boolean;
};

function Form({ isDarkMode }: FormProp) {
  const [fields, setFields] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: PillProp }>({});
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleValidation = () => {
    const formFields = { ...fields };
    const formErrors: { [key: string]: PillProp } = {};
    let formIsValid = true;

    if (!formFields["from_name"]) {
      formIsValid = false;
      formErrors["from_name"] = {
        icon: <IconAlertCircleFilled className="h-4 w-4 text-red-200" />,
        text: "Required",
        color: "red-200",
        bgColor: "red-100",
      };
    } else if (!formFields["from_name"].match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      formErrors["from_name"] = {
        icon: <IconAlertTriangleFilled className="h-4 w-4 text-yellow-200" />,
        text: "Only Letters",
        color: "yellow-200",
        bgColor: "yellow-100",
      };
    }

    if (!formFields["from_email"]) {
      formIsValid = false;
      formErrors["from_email"] = {
        icon: <IconAlertCircleFilled className="h-4 w-4 text-red-200" />,
        text: "Required",
        color: "red-200",
        bgColor: "red-100",
      };
    } else {
      let lastAtPos = formFields["from_email"].lastIndexOf("@");
      let lastDotPos = formFields["from_email"].lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formFields["from_email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          formFields["from_email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        formErrors["from_email"] = {
          icon: <IconAlertTriangleFilled className="h-4 w-4 text-yellow-200" />,
          text: "Invalid Email",
          color: "yellow-200",
          bgColor: "yellow-100",
        };
      }
    }

    if (!formFields["message"]) {
      formIsValid = false;
      formErrors["message"] = {
        icon: <IconAlertCircleFilled className={`h-4 w-4 text-red-200`} />,
        text: "Required",
        color: "red-200",
        bgColor: "red-100",
      };
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (field: string, value: string) => {
    setFields({
      ...fields,
      [field]: value,
    });

    handleValidation();
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_dggxdwd",
    //     "template_j5fdmsn",
    //     e.target as HTMLFormElement,
    //     "1WMou0YgjyHfq-I6j"
    //   )
    //   .then(() => setIsEmailSent(true));

    if (handleValidation()) {
      alert("Form submitted");
      setIsEmailSent(true);
    }
  };

  return (
    <motion.form
      variants={slideDown(0.6)}
      className="flex flex-col gap-5 w-1/2"
      onSubmit={sendEmail}
    >
      <LabeledInput
        isDarkMode={isDarkMode}
        label="Your Name"
        name="from_name"
        type="text"
        placeholder="Enter your name"
        handleChange={handleChange}
        errors={errors["from_name"]}
      />

      <LabeledInput
        isDarkMode={isDarkMode}
        label="Your Email"
        name="from_email"
        type="email"
        placeholder="Enter your email"
        handleChange={handleChange}
        errors={errors["from_email"]}
      />

      <LabeledInput
        isDarkMode={isDarkMode}
        label="Your Message"
        name="message"
        type="textarea"
        placeholder="Type your message here..."
        handleChange={handleChange}
        errors={errors["message"]}
      />

      {isEmailSent && (
        <Pill
          icon={<IconCircleCheckFilled className="h-4 w-4 text-green-200" />}
          text="Successfully sent your message"
          color="green-200"
          bgColor="green-100"
        />
      )}

      <div>
        <IconButton text="Send Message" icon={<IconSend />} type="submit" />
      </div>
    </motion.form>
  );
}

export default Form;
