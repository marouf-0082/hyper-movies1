import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../context/Usercontext";

const menuItems = [
  {
    path: "/movies",
    text: "Movies",
  },
  {
    path: "/tv",
    text: "TV Shows",
  },
  {
    path: "/people",
    text: "People",
  },
  {
    path: "/more",
    text: "More",
  },
];

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { user, logout } = useContext(userContext);
  return (
    <>
      <nav className="flex items-baseline text-slate-300 bg-slate-900 p-4 md:container md:mx-auto md:bg-transparent md:py-4 md:px-6">
        <div className="flex items-baseline text-white">
          <Link to="/">
            <h1 className="text-3xl mr-12">
              Hyper<span className="text-yellow-500">Movies</span>
              <p className="text-xs text-center text-slate-500 font-light">
                Film Review
              </p>
            </h1>
          </Link>
          <ul className="hidden md:flex text-sm lg:text-base gap-4 uppercase tracking-tighter">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink className="navLink" to={item.path}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block text-sm lg:text-base ml-auto">
          {user ? (
            <div className="flex items-center justify-baseline gap-3">
              <NavLink to="/profile">
                <h2>{user.name}</h2>
              </NavLink>
              <button className="btn secandry" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <ul className="flex gap-4">
              <li>
                <NavLink className="text-white tracking-wider" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="btn primary font-bold tracking-wider"
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-200 ${isOpenMenu ? "py-4 border-t-2 border-slate-700" : "py-0 border-none"} uppercase text-slate-300`}
        style={{ height: isOpenMenu ? 275 : 0 }}
      >
        <ul className="flex flex-col gap-4 tracking-tighter">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                className="navLink"
                to={item.path}
                onClick={() => setIsOpenMenu(false)}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="border-t-2 border-slate-700 mt-4 pt-4">
          <ul className="flex justify-center gap-4 items-center tracking-wider">
            <li>
              <NavLink to="#" className="text-white">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="bg-rose-500 px-4 py-2 rounded-2xl font-bold"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
