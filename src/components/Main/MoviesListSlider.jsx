import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ThreeDots } from "react-loader-spinner";
import { Autoplay } from "swiper/modules";
import MovieCard from "../Movie/MovieCard";
import { useMovieDB } from "../../hooks/useMovieDB";

export default function MoviesListSlider({ type, activeTab }) {
  const [data, loading] = useMovieDB({ endpoint: `/${type}/${activeTab}` });

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center py-13">
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
          {data?.results?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} imgSize="w342" type={type} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
