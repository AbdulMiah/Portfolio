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
import { useEffect, useState } from "react";
import Pill from "../../components/Pill";
import { PillProp } from "../../utils/types";
import LabeledInput from "./LabeledInput";

type FormProp = {
  isDarkMode: boolean;
  isMobile: boolean;
};

function Form({ isDarkMode, isMobile }: FormProp) {
  const [fields, setFields] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: PillProp }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(() => {
    const storedIsEmailSent = sessionStorage.getItem("isEmailSent");
    return storedIsEmailSent ? JSON.parse(storedIsEmailSent) : false;
  });

  useEffect(() => {
    handleValidation();
    sessionStorage.setItem("isEmailSent", JSON.stringify(isEmailSent));
  }, [fields, isEmailSent]);

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
        bgColor: "bg-red-100",
      };
    } else if (!formFields["from_name"].match(/^[a-z ,.'-]+$/i)) {
      formIsValid = false;
      formErrors["from_name"] = {
        icon: <IconAlertTriangleFilled className="h-4 w-4 text-yellow-200" />,
        text: "Only Letters",
        color: "yellow-200",
        bgColor: "bg-yellow-100",
      };
    }

    if (!formFields["from_email"]) {
      formIsValid = false;
      formErrors["from_email"] = {
        icon: <IconAlertCircleFilled className="h-4 w-4 text-red-200" />,
        text: "Required",
        color: "red-200",
        bgColor: "bg-red-100",
      };
    } else {
      const lastAtPos = formFields["from_email"].lastIndexOf("@");
      const lastDotPos = formFields["from_email"].lastIndexOf(".");
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
          bgColor: "bg-yellow-100",
        };
      }
    }

    if (!formFields["message"]) {
      formIsValid = false;
      formErrors["message"] = {
        icon: <IconAlertCircleFilled className={`h-4 w-4 text-red-200`} />,
        text: "Required",
        color: "red-200",
        bgColor: "bg-red-100",
      };
    }

    setErrors(formErrors);
    setIsFormValid(formIsValid);
    return formIsValid;
  };

  const handleChange = (field: string, value: string) => {
    setFields({
      ...fields,
      [field]: value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (handleValidation()) {
      emailjs
        .sendForm(
          "service_dggxdwd",
          "template_j5fdmsn",
          e.target as HTMLFormElement,
          "1WMou0YgjyHfq-I6j"
        )
        .then(() => setIsEmailSent(true));
    }
  };

  return (
    <motion.form
      variants={slideDown(0.6)}
      className={`flex flex-col gap-5 ${isMobile ? "" : "w-1/2"}`}
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
        disabled={isEmailSent}
      />

      <LabeledInput
        isDarkMode={isDarkMode}
        label="Your Email"
        name="from_email"
        type="email"
        placeholder="Enter your email"
        handleChange={handleChange}
        errors={errors["from_email"]}
        disabled={isEmailSent}
      />

      <LabeledInput
        isDarkMode={isDarkMode}
        label="Your Message"
        name="message"
        type="textarea"
        placeholder="Type your message here..."
        handleChange={handleChange}
        errors={errors["message"]}
        disabled={isEmailSent}
      />

      {isEmailSent && (
        <Pill
          icon={<IconCircleCheckFilled className="h-4 w-4 text-green-200" />}
          text="Successfully sent your message"
          color="green-200"
          bgColor="bg-green-100"
        />
      )}

      <div>
        <IconButton
          text="Send Message"
          icon={<IconSend />}
          type="submit"
          disabled={!isFormValid || isEmailSent}
          tooltipText={
            (isEmailSent ? "You can only send one message" : "") ||
            (!isFormValid ? "Fill in all the required fields" : "")
          }
        />
      </div>
    </motion.form>
  );
}

export default Form;
