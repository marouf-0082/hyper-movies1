import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import MovieCard from "../Movie/MovieCard";
import { useEffect, useState } from "react";
import { fench } from "../../services/fench";

export default function HeaderSlider({ setBg }) {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    try {
      const { data } = await fench.get(
        "/movie/popular"
      );
      setMovies(data.results);
    } catch (e) {
      alert("Error Loading Movies");
      console.log(e.message);
    }
  }

  useEffect(() => {
    loadMovies();
  }, []);

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
        autoplay={{
          delay: 2000,
          // pauseOnMouseEnter: true,
        }}
        speed={1500}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              onMouseOver={() =>
                setBg(`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`)
              }
            >
              <MovieCard
                movie={movie}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
