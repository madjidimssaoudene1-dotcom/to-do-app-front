import { useDispatch, useSelector } from "react-redux";
import {
  addTodo as addTodoAction,
  editTodo as editTodoAction,
  deleteTodo as deleteTodoAction,
  toggleTodoCompletion as toggleTodoAction,
  clearCompleted as clearCompletedAction,
  setFilter as setFilterAction,
  setSortBy as setSortByAction,
  setSearchQuery as setSearchQueryAction,
} from "../app/slices/todoSlice";
import { useCallback, useMemo } from "react";

export default function useTodos() {
  const dispatch = useDispatch();
  const { todos, filter, sortBy, searchQuery } = useSelector(
    (state) => state.todos,
  );

  const displayedTodos = useMemo(() => {
    // filtering
    const filteredTodos = todos.filter((todo) => {
      if (filter === "active") return !todo.isComplete;
      if (filter === "completed") return todo.isComplete;
      return true; // all
    });

    // searching
    const searched =
      searchQuery.trim() === ""
        ? filteredTodos
        : filteredTodos.filter((todo) =>
            todo.text.toLowerCase().includes(searchQuery.toLowerCase()),
          );

    // sorting
    const sorted = [...searched];

    switch (sortBy) {
      case "dateNewest":
        return sorted.sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
        );
      case "dateOldest":
        return sorted.sort(
          (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0),
        );
      case "alphabetical":
        return sorted.sort((a, b) =>
          a.text.localeCompare(b.text, undefined, { sensitivity: "base" }),
        );
      default:
        return sorted;
    }
  }, [todos, sortBy, filter, searchQuery]);

  const itemsLeft = useMemo(
    () => todos.filter((todo) => !todo.isComplete).length,
    [todos],
  );

  const addTodo = useCallback(
    (text) => {
      dispatch(addTodoAction(text));
    },
    [dispatch],
  );

  const editTodo = useCallback(
    (id, newText) => {
      dispatch(editTodoAction({ id, newText }));
    },
    [dispatch],
  );

  const deleteTodo = useCallback(
    (id) => {
      dispatch(deleteTodoAction(id));
    },
    [dispatch],
  );

  const toggleTodoCompletion = useCallback(
    (id) => {
      dispatch(toggleTodoAction(id));
    },
    [dispatch],
  );

  const clearCompleted = useCallback(() => {
    dispatch(clearCompletedAction());
  }, [dispatch]);

  const setFilter = useCallback(
    (filter) => {
      dispatch(setFilterAction(filter));
    },
    [dispatch],
  );

  const setSortBy = useCallback(
    (sortBy) => {
      dispatch(setSortByAction(sortBy));
    },
    [dispatch],
  );

  const setSearchQuery = useCallback(
    (query) => {
      dispatch(setSearchQueryAction(query));
    },
    [dispatch],
  );
  return {
    // states
    todos: displayedTodos,
    filter,
    sortBy,
    searchQuery,
    itemsLeft,
    // actions
    addTodo,
    editTodo,
    deleteTodo,
    toggleTodoCompletion,
    clearCompleted,
    setFilter,
    setSortBy,
    setSearchQuery,
  };
}
