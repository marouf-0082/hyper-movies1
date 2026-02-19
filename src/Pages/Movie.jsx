import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../context/Usercontext";
import toast from "react-hot-toast";
import { fench } from "../services/fench";
import { Helmet } from "react-helmet";
import Title from "../components/Title";

const apiKey = "79dfd1eff0a74377d493be823af77d22";
const baseURL = "https://api.themoviedb.org/3";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { user, session } = useContext(userContext);
  const [isInWatchList, setIsInWatchList] = useState(false);

  async function handleAddToWatchList() {
    const result = await fench.post(`/account/${user.id}/favorite`, {
      media_type: "movie",
      media_id: movie.id,
      favorite: true,
    });

    toast.success(`${movie.title} Added to your favorites!`);
    setIsInWatchList(true);
    console.log(result);
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
    <div>
      <Title>{movie?.title}</Title>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt={movie.title}
          />
          {user && !isInWatchList && (
            <button
              className="btn secandry mt-4"
              onClick={handleAddToWatchList}
            >
              Add to Favorites
            </button>
          )}
          {user && isInWatchList && (
            <button
              className="btn secandry mt-4"
              onClick={handleRemoveFromWatchList}
            >
              Remove from Favorites
            </button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
