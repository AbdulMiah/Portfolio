import { useState } from "react";
import { Modal } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFlip,
} from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFlip]);

type CarouselProp = {
  images: string[];
};

function Carousel({ images }: CarouselProp) {
  const [selectedImg, setSelectedImage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const slides = images.map((image: string, index: number) => (
    <SwiperSlide
      tag="li"
      key={`carousel-img-${index}`}
      onClick={() => {
        handleOpen();
        setSelectedImage(image);
      }}
      className="flex justify-center items-center h-[500px]"
    >
      <img
        src={image}
        className="rounded-lg shadow-lg max-w-full max-h-[400px]"
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        tag="section"
        wrapperTag="ul"
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        navigation
        pagination={{ dynamicBullets: true }}
        autoplay
      >
        {slides}
      </Swiper>
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
    </>
  );
}

export default Carousel;
