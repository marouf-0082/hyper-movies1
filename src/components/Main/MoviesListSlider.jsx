import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import MovieCard from "../Movie/MovieCard";
import { useEffect, useState } from "react";
import {fench} from "../../services/fench";

export default function MoviesListSlider({ type, activeTab}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await fench(`${type}/${activeTab}`);
      setMovies(data.results);
    })();
  }, [type, activeTab])

  return (
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          // pauseOnMouseEnter: true,
        }}
        speed={1500}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} imgSize="w342" type={type}/>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
