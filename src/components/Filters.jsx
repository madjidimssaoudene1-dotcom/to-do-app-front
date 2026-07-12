import useTodos from "../hooks/useTodos";

const filterButtons = ["all", "active", "completed"];

export default function Filters() {
  const { itemsLeft, filter, setFilter, clearCompleted } = useTodos();

  return (
    <section className="text-center text-gray-400 mt-8 card flex bg-base-100 shadow-lg rounded-lg">
      <div className="card-body">
        <p>
          {/* todos left */}
          <span>{itemsLeft}</span> items left
        </p>

        <ul className="flex justify-center gap-2 tabs" role="tablist">
          {filterButtons.map((button, i) => (
            <li
              key={button + i}
              onClick={() => setFilter(button)}
              className={`tab capitalize font-medium hover:font-extrabold ${filter === button ? "text-primary font-extrabold" : ""}`}
              role="tab"
            >
              {button}
            </li>
          ))}
        </ul>

        <button onClick={clearCompleted} className="btn btn-ghost">
          Clear Completed
        </button>
      </div>
    </section>
  );
}
