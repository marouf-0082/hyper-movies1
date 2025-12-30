import { useState } from "react";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <nav className="flex items-baseline text-slate-300 bg-slate-900 p-4 md:container md:mx-auto md:bg-transparent md:py-4 md:px-6">
        <div className="flex items-baseline text-white">
          <h1 className="text-3xl mr-12">
            Hyper<span className="text-yellow-500">Movies</span>
            <p className="text-xs text-center text-slate-500 font-light">
              Film Review
            </p>
          </h1>
          <ul className="hidden md:flex text-sm lg:text-base gap-4 uppercase tracking-tighter">
            <li>
              <a className="navLink" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Movies
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                TV Shows
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                People
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block text-sm lg:text-base ml-auto uppercase ">
          <ul className="flex gap-4">
            <li>
              <a className="text-white tracking-wider" href="#">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="btn primary font-bold tracking-wider">
                Sign up
              </a>
            </li>
          </ul>
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
        <div className={`md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-300 ${isOpenMenu ? "h-full py-4 border-t-2 border-slate-700" : "py-0 border-none"} uppercase text-slate-300`}
        style={{height: isOpenMenu ? 275 : 0}}>
          <ul className="flex flex-col gap-4 tracking-tighter">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Tv Shows</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
          <div className="border-t-2 border-slate-700 mt-4 pt-4">
            <ul className="flex justify-center gap-4 items-center tracking-wider">
              <li><a href="#" className="text-white">Login</a></li>
              <li><a href="#" className="bg-rose-500 px-4 py-2 rounded-2xl font-bold">Sign up</a></li>
            </ul>
          </div>
        </div>
    </>
  );
}
