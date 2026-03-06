import { useEffect, useState } from "react";
import { fench } from "../services/fench";
import { useParams } from "react-router-dom";

export default function Tv() {
  const [tv, setTv] = useState(null);
  const { id } = useParams();

  async function loadTv() {
    const { data } = await fench.get(`/tv/${id}`);
    setTv(data);
    console.log(data);
  }

  useEffect(() => {
    loadTv();
  }, [id]);
  return (
    <div>
      {tv ? (
        <div>
          <h2>{tv.name}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w780/${tv.poster_path}`}
            alt={tv.title}
          />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
