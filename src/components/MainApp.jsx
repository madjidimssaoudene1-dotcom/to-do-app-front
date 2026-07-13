import TodoList from "./temp2";
import Filters from "./Filters";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/endpoints/todos";
import { useTodoParams } from "../hooks/useUrlParams";

export default function MainApp() {
  const { apiParams } = useTodoParams();

  // const { todos } = useTodos();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["todos", apiParams],
    queryFn: () => getTodos(apiParams),
  });

  const todos = data?.data || [];
  const itemsLeft = todos.filter((todo) => !todo.isComplete).length;

  return (
    <main>
      {/* todo list */}
      <TodoList todos={todos} isFetching={isFetching} isLoading={isLoading} />
      {/* filters */}
      <Filters itemsLeft={itemsLeft} />
    </main>
  );
}
