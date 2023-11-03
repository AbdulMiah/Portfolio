import {
  IconCircleArrowRightFilled,
  IconCircleArrowLeftFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { Modal } from "@mui/material";

type CarouselProp = {
  images: string[];
};

function Carousel({ images }: CarouselProp) {
  const [slide, setSlide] = useState(0);
  const [selectedImg, setSelectedImage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <div
          key={`carousel-img-${index}`}
          onClick={() => {
            handleOpen();
            setSelectedImage(image);
          }}
        >
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
      <Modal
        open={open}
        onClose={handleClose}
        className="flex items-center justify-center"
      >
        <img
          src={selectedImg}
          className="rounded-lg shadow-lg max-w-full max-h-full"
        />
      </Modal>
    </div>
  );
}

export default Carousel;
