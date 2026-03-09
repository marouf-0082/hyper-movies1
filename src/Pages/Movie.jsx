import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import { fench } from "../services/fench";
import Title from "../components/Title";
import { imgUrl } from "../help/imgUrl";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const { user, session, favoriteMovies, fetchFavoriteMovies } = useContext(UserContext);

  useEffect(() => {
    if (movie && favoriteMovies.length) {
      const favMovie = favoriteMovies.find((f) => f.id === movie?.id);
      setIsFavorite(Boolean(favMovie));
      console.log(favMovie);
    }
  }, [movie, favoriteMovies]);

  async function handleFavorite() {
    if(session) {
      const result = await fench.post(`/account/${user.id}/favorite`, {
      media_type: "movie",
      media_id: movie.id,
      favorite: !isFavorite,
    });
    fetchFavoriteMovies();

    toast.success(`${movie.title} ${isFavorite ? 'removed' : 'added'} to your favorites.`);
    } else {
      toast.error("Please Login!");
    }
    
  }

  async function handleRemoveFromWatchList() {
    const result = await fench.post(`/account/${user.id}/favorite`, {
      media_type: "movie",
      media_id: movie.id,
      favorite: false,
    });
    toast.success(`${movie.title} Remove from your favorites!`);
    setIsInWatchList(false);
  }

  async function loadMovie() {
    const { data } = await fench.get(`/movie/${id}`);
    setMovie(data);
  }

  useEffect(() => {
    loadMovie();
  }, [id]);
  return (
    <div className="-mt-[320px]">
      <Title>{movie?.title}</Title>
      {movie ? (
        <div className="container grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <img src={imgUrl(movie.poster_path, "w500")} alt={movie.title} />
          </div>
          <div className="col-span-3">
            <div className="flex gap-3 items-center">
              <h1 className="text-3xl">{movie.title}</h1>
              <time className="text-white">
                {movie.release_date.split("-")[0]}
              </time>
            </div>
            <div className="flex gap-8 mt-8 text-yellow-300">
              <button
                className="flex flex-row gap-2 items-center "
                onClick={handleFavorite}
              >
                <p className="border border-yellow-300 w-8 h-8 rounded-full flex items-center justify-center">
                  {isFavorite ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  )}
                </p>
                {isFavorite ? 'Remove from' : 'Add to'} Favorite
              </button>
              <button className="flex flex-row gap-2 items-center">
                <p className="border border-yellow-300 w-8 h-8 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                </p>
                Share
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
