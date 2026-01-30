import { Link } from "react-router-dom";
import { imgUrl } from "../../../../help/imgUrl";

export default function Person({ item }) {
  return (
    <Link to={`/people/${item.id}`}>
      <div className="flex gap-3 items-center text-lg">
        <img
          className="object-cover h-11 w-11 rounded-md"
          src={
            item.profile_path
              ? imgUrl(item.profile_path, "w45")
              : "/default_profile.webp"
          }
          alt={item.name}
        />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}
