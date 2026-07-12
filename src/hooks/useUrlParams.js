import { useSearchParams } from "react-router";

/**
 * Simple hook for todo URL params
 */
export function useTodoParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read values
  const filter = searchParams.get("filter") || "all";
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const order = searchParams.get("order") || "desc";
  const search = searchParams.get("search") || "";

  // Build API params
  const apiParams = { sortBy, order };
  if (search.trim()) apiParams.search = search.trim();
  if (filter === "active") apiParams.status = "active";
  if (filter === "completed") apiParams.status = "completed";

  // Setters
  const setFilter = (value) => {
    setSearchParams((p) => {
      value === "all" ? p.delete("filter") : p.set("filter", value);
      return p;
    });
  };

  const setSearch = (value) => {
    setSearchParams((p) => {
      value ? p.set("search", value) : p.delete("search");
      return p;
    });
  };

  const setSort = (preset) => {
    setSearchParams((p) => {
      if (preset === "dateNewest") {
        p.set("sortBy", "createdAt");
        p.set("order", "desc");
      } else if (preset === "dateOldest") {
        p.set("sortBy", "createdAt");
        p.set("order", "asc");
      } else if (preset === "alphabetical") {
        p.set("sortBy", "text");
        p.set("order", "asc");
      }
      return p;
    });
  };

  return {
    filter,
    search,
    apiParams,
    queryKey: ["todos", apiParams],
    setFilter,
    setSearch,
    setSort,
  };
}
