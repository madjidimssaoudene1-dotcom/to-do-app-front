import { useState } from "react";
import useTodos from "../hooks/useTodos";

export default function AddTodo() {
  const { addTodo } = useTodos();

  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText("");
    }
  };

  return (
    <div className="card bg-base-100 shadow-lg p-4 mb-4 rounded-lg">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex itens-center gap-2"
      >
        <input
          type="text"
          placeholder="Create a new todo..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
          className="input input-ghost w-full flex-1"
        />
        <button
          onClick={handleAddTodo}
          className="btn btn-circle btn-sm btn-ghost border border-zinc-500"
        >
          <span className="icon-[iwwa--add] text-base-content"></span>
        </button>
      </form>
    </div>
  );
}
