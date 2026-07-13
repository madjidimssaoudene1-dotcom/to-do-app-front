import { useRef, useState } from "react";
import AddTodo from "./AddTodo";
import EditModal from "./EditModal";
import TodoItem from "./TodoItem";
import SortDropdown from "./SortDropdown";
import SearchBar from "./SearchBar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../api/endpoints/todos";

export default function TodoList({ todos, isLoading, isFetching }) {
  const queryClient = useQueryClient();

  // const { editTodo } = useTodos();
  const [editText, setEditText] = useState({ id: null, text: "" });
  const dialogRef = useRef(null);

  const { mutate: editTodo } = useMutation({
    mutationFn: ({ id, text }) => updateTodo(id, { text }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const saveEdit = () => {
    if (editText.text.trim() === "") return;

    editTodo({ id: editText.id, text: editText.text });
    dialogRef.current?.close();
  };

  const handleEdit = (id, currentValue) => {
    setEditText({ id, text: currentValue });
    dialogRef.current?.showModal();
  };

  return (
    <section>
      {/* input */}
      <AddTodo />
      {/* list  */}
      <div className="card bg-base-100 shadow-lg rounded-lg">
        <div className="card-body">
          <div className="flex justify-between items-center gap-2">
            <SearchBar />
            <SortDropdown />
          </div>
          {isLoading || isFetching ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : (
            <ul>
              {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} handleEdit={handleEdit} />
              ))}
            </ul>
          )}
        </div>
      </div>

      <EditModal
        dialogRef={dialogRef}
        editText={editText}
        setEditText={setEditText}
        saveEdit={saveEdit}
      />
    </section>
  );
}
