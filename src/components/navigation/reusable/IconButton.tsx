type IconButtonProp = {
  icon: JSX.Element;
  text: string;
};

function IconButton({ icon, text }: IconButtonProp) {
  return (
    <button className="bg-royal-blue-100 hover:bg-royal-blue-200 text-white py-2 px-3 rounded-[12px] inline-flex space-x-4">
      <span className="text-base">{text}</span>
      {icon}
    </button>
  );
}

export default IconButton;
