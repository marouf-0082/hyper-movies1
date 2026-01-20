
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

export default function Home() {
  return (
    <div className="container">
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">What's Popular</h2>
          <ul className="filterNav my-6 flex flex-col gap-4 md:flex md:flex-row md:gap-8 md:border-3 md:border-slate-700 py-2 px-4 rounded-4xl">
            <li>
              Streaming
            </li>
            <li>On TV</li>
            <li>For Rent</li>
            <li>In Theaters</li>
          </ul>
        </div>
        {/* <MoviesListSlider movies={movies} /> */}
      </div>
      <div className="pt-8">
        <div className="md:flex gap-8 items-center md:mb-4">
          <h2 className="text-slate-300 text-2xl">Free to Watch</h2>
          <ul className="filterNav my-6 flex flex-col gap-4 md:flex md:flex-row md:gap-8 md:border-3 md:border-slate-700 py-2 px-4 rounded-4xl">
            <li>
              Movie
            </li>
            <li>TV</li>
          </ul>
        </div>
        {/* <MoviesListSlider movies={movies} /> */}
      </div>
    </div>
  );
}
