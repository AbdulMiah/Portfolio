import { IconSend } from "@tabler/icons-react";
import IconButton from "../../components/IconButton";

type FormProp = {
  isDarkMode: boolean;
};

function Form({ isDarkMode }: FormProp) {
  return (
    <form className="flex flex-col gap-5 w-1/2">
      <label className="flex flex-col">
        <span className="self-start">Your Name</span>
        <input
          type="text"
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
        />
      </label>

      <label className="flex flex-col">
        <span className="self-start">Your Email</span>
        <input
          type="email"
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
        />
      </label>

      <label className="flex flex-col">
        <span className="self-start">Your Message</span>
        <textarea
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
        />
      </label>

      <div>
        <IconButton text="Send Message" icon={<IconSend />} />
      </div>
    </form>
  );
}

export default Form;
