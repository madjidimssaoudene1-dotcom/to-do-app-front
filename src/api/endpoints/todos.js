import apiConfig from "../apiConfig";

export const getTodos = async (params = {}) => {
  const response = await apiConfig.get("/todos", { params });
  return response.data;
};

export const createTodo = async (text) => {
  const response = await apiConfig.post("/todos", { text });
  return response.data;
};

export const updateTodo = async (id, todoData) => {
  const response = await apiConfig.put(`/todos/${id}`, todoData);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await apiConfig.delete(`/todos/${id}`);
  return response.data;
};

export const deleteCompletedTodos = async () => {
  const response = await apiConfig.delete("/todos/completed");
  return response.data;
};
