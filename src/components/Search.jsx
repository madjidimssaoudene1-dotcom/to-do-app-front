
export default function SearchBar({ setSearch, search }) {
  return (
    <form>
      <label className="input input-ghost w-full flex-1">
        <span className="icon-[iwwa--search] -scale-x-100"></span>
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
}