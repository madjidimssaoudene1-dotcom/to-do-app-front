import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "../api/endpoints/todos";

export default function TodoItem({ todo, handleEdit }) {
  const queryClient = useQueryClient();

  // const { toggleTodoCompletion, deleteTodo } = useTodos();
  const { mutate: toggleTodoCompletion } = useMutation({
    mutationFn: () => updateTodo(todo._id, { isComplete: !todo.isComplete }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const { mutate: removeTodo } = useMutation({
    mutationFn: () => deleteTodo(todo._id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  return (
    <li className="flex justify-between items-center py-4 border-b border-base-200">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={() => toggleTodoCompletion(todo._id)}
          checked={todo.isComplete}
          className="checkbox checkbox-primary hover:scale-110 transition-transform cursor-pointer"
        />
        <p className={todo.isComplete ? "line-through text-gray-400" : ""}>
          {todo.text}
        </p>
      </div>
      <div className="flex">
        <button
          onClick={() => handleEdit(todo._id, todo.text)}
          className="btn btn-ghost btn-sm hover:btn-primary hover:scale-110 transition-all"
        >
          <span className="icon-[iwwa--edit] text-base-content"></span>
        </button>
        <button
          onClick={() => removeTodo(todo._id)}
          className="btn btn-ghost btn-sm hover:btn-error hover:scale-110 transition-all"
        >
          <span className="icon-[iwwa--delete] text-base-content"></span>
        </button>
      </div>
    </li>
  );
}
