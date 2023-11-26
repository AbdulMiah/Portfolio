import { useState, useCallback } from "react";
import {
  IconCircleArrowRightFilled,
  IconCircleArrowLeftFilled,
  IconX,
} from "@tabler/icons-react";
import { Modal } from "@mui/material";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { motion } from "framer-motion";
import IconButton from "../../components/IconButton";

type CarouselProp = {
  images: string[];
  isMobile: boolean;
};

function Carousel({ images, isMobile }: CarouselProp) {
  const [selectedImg, setSelectedImage] = useState("");
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const slides = images.map((image: string, index: number) => (
    <SwiperSlide
      tag="li"
      key={`carousel-img-${index}`}
      onClick={() => {
        setSelectedImage(image);
        handleOpen();
      }}
      className={`${
        isMobile ? "h-[300px]" : "h-[500px]"
      } flex justify-center items-center`}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={image}
        alt={`image-${index}`}
        className={`${
          isMobile ? "max-h-[250px]" : "max-h-[400px]"
        } rounded-lg shadow-lg max-w-full`}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <IconCircleArrowLeftFilled
          className="w-8 h-8 flex-shrink-0 hover:cursor-pointer filter drop-shadow-lg"
          onClick={handlePrevious}
        />
        <Swiper
          modules={[Pagination, Autoplay, EffectCreative]}
          tag="div"
          wrapperTag="ul"
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: ["-120%", 0, -500],
            },
            next: {
              translate: ["120%", 0, -500],
            },
          }}
          grabCursor={true}
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay
          style={
            { "--swiper-pagination-color": "white" } as React.CSSProperties
          }
          onSwiper={setSwiperRef}
        >
          {slides}
        </Swiper>
        <IconCircleArrowRightFilled
          className="w-8 h-8 flex-shrink-0 hover:cursor-pointer filter drop-shadow-lg"
          onClick={handleNext}
        />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        className="flex items-center justify-center p-4"
      >
        <div className="relative">
          <img
            src={selectedImg}
            className={`${
              isMobile ? "max-h-full" : "h-[600px]"
            } max-w-full rounded-lg shadow-lg`}
            alt="Selected Image"
          />

          <div className="absolute top-0 right-0 p-4" onClick={handleClose}>
            <IconButton icon={<IconX />} tooltipText="Close" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Carousel;
