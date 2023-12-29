import { PillProp } from "../utils/types";

function Pill({ icon, text, color, bgColor }: PillProp) {
  return (
    <div
      className={`inline-flex space-x-1 items-center rounded-xl p-1 bg-${bgColor}`}
    >
      {icon}
      <span className={`text-sm text-${color}`}>{text}</span>
    </div>
  );
}

export default Pill;
