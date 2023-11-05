import { useState } from "react";
import { Modal } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        modules={[Pagination, Navigation, Autoplay]}
        tag="section"
        wrapperTag="ul"
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        navigation={true}
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
