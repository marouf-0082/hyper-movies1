import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import MovieCard from "../Movie/MovieCard";

export default function HeaderSlider({ setBg }) {

  
  function getImage(number) {
    return `/slider${number}.jpg`;
  }

  return (
    <div className="mt-8">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
      >
        {[1, 2, 3, 4, 5].map((number) => (
          <SwiperSlide key={number}>
            <div onMouseOver={(e) => setBg(getImage(number))}>
              <MovieCard img={getImage(number)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
