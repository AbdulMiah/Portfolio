import { AnimatePresence, motion } from "framer-motion";
import Pill from "../../components/Pill";
import { PillProp } from "../../utils/types";
import { slideUp } from "../../utils/motionVariants";

type LabeledInputProp = {
  isDarkMode: boolean;
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  handleChange: (name: string, value: string) => void;
  errors?: PillProp | undefined;
  disabled: boolean;
};

function LabeledInput({
  isDarkMode,
  label,
  name,
  type,
  placeholder,
  handleChange,
  errors,
  disabled,
}: LabeledInputProp) {
  return (
    <label className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        <span className="self-start">{label}</span>
        {!disabled && (
          <AnimatePresence mode="wait" initial={false}>
            {errors && (
              <motion.span
                variants={slideUp(0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <Pill
                  key={name}
                  icon={errors.icon}
                  text={errors.text}
                  color={errors.color}
                  bgColor={errors.bgColor}
                />
              </motion.span>
            )}
          </AnimatePresence>
        )}
      </div>
      {type === "textarea" ? (
        <textarea
          disabled={disabled}
          name={name}
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
          placeholder={placeholder}
          onChange={(e) => handleChange(name, e.target.value)}
        />
      ) : (
        <input
          disabled={disabled}
          type={type}
          name={name}
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
          placeholder={placeholder}
          onChange={(e) => handleChange(name, e.target.value)}
        />
      )}
    </label>
  );
}

export default LabeledInput;
