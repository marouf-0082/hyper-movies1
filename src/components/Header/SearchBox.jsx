export default function SearchBox() {
  return (
    <section className="mt-12 text-slate-200">
      <div className="relative">
        <input
          pattern="[A-Za-z] {1,9}"
          type="text"
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          className="w-full bg-slate-600 text-2xl p-3 pr-13 border-4 border-slate-900 rounded-md outline-none placeholder:text-slate-500 placeholder:text-base"
        />
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
