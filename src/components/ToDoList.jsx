import { useRef, useState } from "react";
import AddTodo from "./AddTodo";
import EditModal from "./EditModal";
import TodoItem from "./TodoItem";
import SortDropdown from "./SortDropdown";
import SearchBar from "./SearchBar";
import useTodos from "../hooks/useTodos";

export default function TodoList() {
  const { todos, editTodo } = useTodos();
  const [editText, setEditText] = useState({ id: null, text: "" });
  const dialogRef = useRef(null);

  const saveEdit = () => {
    if (editText.text.trim() === "") return;

    editTodo(editText.id, editText.text);
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

          <ul>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
            ))}
          </ul>
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
