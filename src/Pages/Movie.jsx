import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import toast from "react-hot-toast";

const apiKey = "79dfd1eff0a74377d493be823af77d22";
const baseURL = "https://api.themoviedb.org/3";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { user, session } = useContext(UserContext);
  const [isInWatchList, setIsInWatchList] = useState(false);

  async function handleAddToWatchList() {
    const result = await axios.post(
      `${baseURL}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
      {
        media_type: "movie",
        media_id: movie.id,
        favorite: true,
      }
    );

    toast.success(`${movie.title} Added to your favorites!`);
    setIsInWatchList(true);
    console.log(result);
  }

  async function handleRemoveFromWatchList() {
    const result = await axios.post(
      `${baseURL}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
      {
        media_type: "movie",
        media_id: movie.id,
        favorite: false,
      }
    );
    toast.success(`${movie.title} Remove from your favorites!`);
    setIsInWatchList(false);
  }

  async function loadMovie() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=79dfd1eff0a74377d493be823af77d22`
    );
    setMovie(data);
  }

  useEffect(() => {
    loadMovie();
  }, [id]);
  return (
    <div>
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
