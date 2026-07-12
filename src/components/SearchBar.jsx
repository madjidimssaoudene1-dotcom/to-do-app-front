import { useTodoParams } from "../hooks/useUrlParams";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useTodoParams();

  return (
    <form action="">
      <label className="input input-ghost w-full flex-1">
        <span className="icon-[iwwa--search] -scale-x-100"></span>
        <input
          type="search"
          placeholder="Search todos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
    </form>
  );
}
