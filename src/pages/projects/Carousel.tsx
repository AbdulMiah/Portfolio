import {
  IconCircleArrowRightFilled,
  IconCircleArrowLeftFilled,
} from "@tabler/icons-react";
import { useState } from "react";

type CarouselProp = {
  images: string[];
};

function Carousel({ images }: CarouselProp) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <div className="relative flex justify-center items-center h-[500px]">
      <IconCircleArrowLeftFilled
        className="absolute w-8 h-8 left-4 hover:cursor-pointer filter drop-shadow-lg"
        onClick={prevSlide}
      />
      {images.map((image: string, index: number) => (
        <div key={`carousel-img-${index}`}>
          <img
            src={image}
            className={`${
              slide === index
                ? "rounded-lg shadow-lg w-auto h-[400px]"
                : "hidden"
            }`}
          />
        </div>
      ))}
      <IconCircleArrowRightFilled
        className="absolute w-8 h-8 right-4 hover:cursor-pointer filter drop-shadow-lg"
        onClick={nextSlide}
      />
      <span className="flex absolute bottom-4">
        {images.map((_: any, index: number) => (
          <button
            className={`${
              slide === index ? "bg-royal-blue-200" : "bg-white"
            } w-2 h-2 rounded-full border-none outline-none shadow-lg ml-2`}
            key={index}
            onClick={() => setSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default Carousel;
