type InterestsGridProp = {
  isDarkMode: boolean;
  interests: any;
};

function InterestsGrid({ isDarkMode, interests }: InterestsGridProp) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-5">
      {interests.map((interest: any, index: number) => (
        <div
          key={`interest-${index}`}
          className="flex flex-col items-center justify-center p-5 bg-black"
        >
          <interest.icon className="h-8 w-8 mb-3" />
          <p className="text-lg uppercase">{interest.title}</p>
        </div>
      ))}
    </div>
  );
}

export default InterestsGrid;
