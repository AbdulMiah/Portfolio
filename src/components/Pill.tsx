import { PillProp } from "../utils/types";

function Pill({ icon, text, color, borderColor, bgColor }: PillProp) {
  return (
    <div
      className={`inline-flex space-x-1 items-center justify-center border-2 ${borderColor} rounded-xl p-1 ${bgColor}`}
    >
      {icon}
      <span className={`text-sm ${color}`}>{text}</span>
    </div>
  );
}

export default Pill;
