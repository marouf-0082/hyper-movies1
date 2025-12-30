import MoviesListSlider from "./MoviesListSlider";

const movies = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider3.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider3.jpg",
  "/slider2.jpg",
];

export default function MoviesList() {
  return (
    <div className="container">
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">What's Popular</h2>
          <ul className="filterNav my-6 flex flex-col gap-4 md:flex md:flex-row md:gap-8 md:border-3 md:border-slate-700 py-2 px-4 rounded-4xl">
            <li tabindex="0">
              Streaming
            </li>
            <li tabindex="0">On TV</li>
            <li tabindex="0">For Rent</li>
            <li tabindex="0">In Theaters</li>
          </ul>
        </div>
        <MoviesListSlider movies={movies} />
      </div>
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">Free to Watch</h2>
          <ul className="filterNav my-6 flex flex-col gap-4 md:flex md:flex-row md:gap-8 md:border-3 md:border-slate-700 py-2 px-4 rounded-4xl">
            <li tabindex="0">
              Movie
            </li>
            <li tabindex="0">TV</li>
          </ul>
        </div>
        <MoviesListSlider movies={movies} />
      </div>
    </div>
  );
}
