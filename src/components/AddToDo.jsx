import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../api/endpoints/todos";

export default function AddTodo() {
  const queryClient = useQueryClient();

  // const { addTodo } = useTodos();
  const { mutate: addTodo, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      console.log(newTodoText);
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
          {isPending ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <span className="icon-[iwwa--add] text-base-content"></span>
          )}
        </button>
      </form>
    </div>
  );
}
