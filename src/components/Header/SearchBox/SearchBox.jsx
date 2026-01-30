import { useEffect, useState } from "react";
import { fench } from "../../../services/fench";
import Movie from "./items/Movie";
import TV from "./items/TV";
import Person from "./items/Person";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const { data } = await fench("search/multi", {
          params: {
            query,
          },
        });
        console.log(data);
        setSearchResults(data.results);
      } else {
        setSearchResults([]);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  function showItem(item) {
    switch (item.media_type) {
      case "movie":
        return <Movie item={item} key={item.id} />;
      case "tv":
        return <TV item={item} key={item.id} />;
      case "person":
        return <Person item={item} key={item.id} />;
      default:
        return null;
    }
  }

  return (
    <section className="mt-12 text-slate-200">
      <div className="relative">
        <input
          pattern="[A-Za-z] {1,9}"
          type="text"
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          className="w-full bg-slate-600 text-2xl p-3 pr-13 border-4 border-slate-900 rounded-md outline-none placeholder:text-slate-500 placeholder:text-base mb-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          className={`p-2 flex flex-col gap-2 bg-slate-600/95 border-4 border-slate-900 absolute w-full z-10 left-0 overflow-y-auto rounded-md ${searchResults && query ? "block" : "hidden"} transition-all duration-300 max-h-[300px]`}
        >
            {searchResults.length === 0 ? (
              <div className="text-center p-4">Not Found!</div>
            ) : (
              searchResults.map((item) => (
                <div className="border-b-2 border-slate-700/40 pb-2" key={item.id} onClick={() => setQuery("")}>
                  {showItem(item)}
                </div>
              ))
            )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          className="bi bi-search absolute right-4 top-1/2 -translate-y-1/2 cursor-pointe"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </section>
  );
}
