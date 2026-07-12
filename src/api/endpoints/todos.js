import apiConfig from "../apiConfig";


export const getTodos = async (params = {}) => {
    const response = await apiConfig.get("/todos", { params });

    return response.data;
}

export const createTodo = async ({text}) => {
    const response = await apiConfig.post("/todos", { text });
    return response.data;
}


export const deleteTodo = async (id) => {
    const response = await apiConfig.delete(`/todos/${id}`);

    return response.data;
}

export const editTodo = async (id, newText) => {
    const response = await apiConfig.put(`/todos/${id}`, { text: newText });

    return response.data;
}

export const updateTodo = async (id, isComplete) => {
    const response = await apiConfig.patch(`/todos/${id}`, { isComplete });

    return response.data;
}








