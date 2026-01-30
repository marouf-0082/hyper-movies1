import { Link } from "react-router-dom";
import { imgUrl } from "../../../../help/imgUrl";

export default function TV({ item }) {
  return (
    <Link to={`/tv/${item.id}`}>
      <div className="flex gap-3 items-center text-lg">
        <img
          className="object-cover h-11 w-11 rounded-md"
          src={
            item.poster_path
              ? imgUrl(item.poster_path, "w92")
              : "/movie_default.png"
          }
          alt={item.name}
        />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}
