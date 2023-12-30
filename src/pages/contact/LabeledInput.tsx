import Pill from "../../components/Pill";
import { PillProp } from "../../utils/types";

type LabeledInputProp = {
  isDarkMode: boolean;
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  handleChange: (name: string, value: string) => void;
  errors?: PillProp | undefined;
};

function LabeledInput({
  isDarkMode,
  label,
  name,
  type,
  placeholder,
  handleChange,
  errors,
}: LabeledInputProp) {
  return (
    <label className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        <span className="self-start">{label}</span>
        <span>
          {errors && (
            <Pill
              key={name}
              icon={errors.icon}
              text={errors.text}
              color={errors.color}
              bgColor={errors.bgColor}
            />
          )}
        </span>
      </div>
      {type === "textarea" ? (
        <textarea
          name={name}
          className={`${
            isDarkMode ? "bg-dark-300" : "bg-grey-200"
          } rounded-xl p-2`}
          placeholder={placeholder}
          onChange={(e) => handleChange(name, e.target.value)}
        />
      ) : (
        <input
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
