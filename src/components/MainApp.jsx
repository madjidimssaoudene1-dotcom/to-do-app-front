import { useEffect } from "react";
import TodoList from "./TodoList";
import Filters from "./Filters";
import useTodos from "../hooks/useTodos";

export default function MainApp() {
  const { todos } = useTodos();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      {/* todo list */}
      <TodoList />
      {/* filters */}
      <Filters />
    </main>
  );
}
