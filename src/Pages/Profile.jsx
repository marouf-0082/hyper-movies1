import { useContext } from "react";
import { userContext } from "../context/Usercontext";
import { Navigate } from "react-router-dom";
import { imgUrl } from "../help/imgUrl";

export default function Profile() {
  const { user, session } = useContext(userContext);
  console.log(user, session);
  return session ? (
    <div className="flex flex-col justify-center items-center gap-3 mt-10">
      <img
        className="rounded-full"
        src={imgUrl(user?.avatar?.tmdb?.avatar_path, "w185")}
        alt=""
      />
      <h2>{user?.name}</h2>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
