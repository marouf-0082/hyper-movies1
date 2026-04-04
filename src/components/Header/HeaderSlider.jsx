import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ThreeDots } from "react-loader-spinner";
import { Autoplay } from "swiper/modules";
import MovieCard from "../Movie/MovieCard";
import { useMovieDB } from "../../hooks/useMovieDB";

export default function HeaderSlider({ setBg }) {
  const [data, loading] = useMovieDB({endpoint: "/movie/popular"});

  return (
    <div className="mt-8">
     {loading ? (
      <div className="flex justify-center items-center py-26">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#ffd700"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin: "20px" }}
          wrapperClass="custom-loader"
          visible={loading && true}
        />
      </div>
     ) : (
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
        {data && data.results.map((movie) => (
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
     ) }
    </div>
  );
}
