import useTodos from "../hooks/useTodos";

const sortOptions = [
  {
    value: "dateNewest",
    label: "Newest First",
    icon: "icon-[iwwa--arrow-down]",
  },
  {
    value: "dateOldest",
    label: "Oldest First",
    icon: "icon-[iwwa--arrow-up]",
  },
  {
    value: "alphabetical",
    label: "A-Z",
    icon: "icon-[iwwa--text-asc]",
  },
];

export default function SortDropdown() {
  const { setSortBy } = useTodos();
  return (
    <div className="dropdown">
      <button tabIndex={0} className="btn btn-primary m-1">
        Sort by
      </button>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {sortOptions.map((option, i) => (
          <li key={option.value + i} onClick={() => setSortBy(option.value)}>
            <a>
              <span className={`${option.icon} mr-1`}> </span>
              <span className="hidden sm:inline">{option.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
