import useTodos from "../hooks/useTodos";

export default function TodoItem({ todo, handleEdit }) {
  const { toggleTodoCompletion, deleteTodo } = useTodos();
  return (
    <li className="flex justify-between items-center py-4 border-b border-base-200">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={() => toggleTodoCompletion(todo.id)}
          checked={todo.isComplete}
          className="checkbox checkbox-primary hover:scale-110 transition-transform cursor-pointer"
        />
        <p className={todo.isComplete ? "line-through text-gray-400" : ""}>
          {todo.text}
        </p>
      </div>
      <div className="flex">
        <button
          onClick={() => handleEdit(todo.id, todo.text)}
          className="btn btn-ghost btn-sm hover:btn-primary hover:scale-110 transition-all"
        >
          <span className="icon-[iwwa--edit] text-base-content"></span>
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-ghost btn-sm hover:btn-error hover:scale-110 transition-all"
        >
          <span className="icon-[iwwa--delete] text-base-content"></span>
        </button>
      </div>
    </li>
  );
}
