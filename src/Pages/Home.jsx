import Title from "../components/Title";
import MoviesListSlider from "../components/Main/MoviesListSlider";
import { useState } from "react";

// const movies = [
//   "/slider1.jpg",
//   "/slider2.jpg",
//   "/slider3.jpg",
//   "/slider4.jpg",
//   "/slider3.jpg",
//   "/slider2.jpg",
//   "/slider3.jpg",
//   "/slider4.jpg",
//   "/slider3.jpg",
//   "/slider2.jpg",
// ];

export default function Home() {
  const [moviesActiveTab, setMoviesActiveTab] = useState("upcoming");
  const [tvActiveTab, setTvActiveTab] = useState("popular");

  function handleChangeMoviesActiveTab(tab) {
    setMoviesActiveTab(tab);
  }

  function handleChangeTvActiveTab(tab) {
    setTvActiveTab(tab);
  }

  function activeClass(tab) {
    return tab === moviesActiveTab ? "text-yellow-300" : "";
  }

  function activeTvClass(tab) {
    return tab === tvActiveTab ? "text-yellow-300" : "";
  }
  return (
    <div className="container">
      <Title>Home</Title>
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">What's Popular</h2>
          <ul className="filterNav my-6 flex flex-col gap-4 md:flex md:flex-row md:gap-8 md:border-3 md:border-slate-700 py-2 px-4 rounded-4xl [&>*]:cursor-pointer">
            <li
              onClick={() => handleChangeMoviesActiveTab("upcoming")}
              className={activeClass("upcoming")}
            >
              Upcoming
            </li>
            <li
              onClick={() => handleChangeMoviesActiveTab("now_playing")}
              className={activeClass("now_playing")}
            >
              Now Playing
            </li>
            <li
              onClick={() => handleChangeMoviesActiveTab("popular")}
              className={activeClass("popular")}
            >
              Popular
            </li>
            <li
              onClick={() => handleChangeMoviesActiveTab("top_rated")}
              className={activeClass("top_rated")}
            >
              Top rated
            </li>
          </ul>
        </div>
        <MoviesListSlider type="movie" activeTab={moviesActiveTab} />
      </div>
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">TV - Series</h2>
          <ul className="filterNav my-6 flex flex-col gap-4 md:flex md:flex-row md:gap-8 md:border-3 md:border-slate-700 py-2 px-4 rounded-4xl \[&>*]:cursor-pointer">
            <li
              onClick={() => handleChangeTvActiveTab("popular")}
              className={activeTvClass("popular")}
            >
              Popular
            </li>
            <li
              onClick={() => handleChangeTvActiveTab("top_rated")}
              className={activeTvClass("top_rated")}
            >
              Top Rated
            </li>
            <li
              onClick={() => handleChangeTvActiveTab("airing_today")}
              className={activeTvClass("airing_today")}
            >
              Airing Today
            </li>
            <li
              onClick={() => handleChangeTvActiveTab("on_the_air")}
              className={activeTvClass("on_the_air")}
            >
              On the Air
            </li>
          </ul>
        </div>
        <MoviesListSlider type="tv" activeTab={tvActiveTab} />
      </div>
    </div>
  );
}
