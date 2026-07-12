import apiConfig from "../apiConfig";

export async function login({ email, password }) {
  const response = await apiConfig.post("/auth/login", { email, password });

  if (response.data.success && response.data.token)
    localStorage.setItem("token", response.data.token);

  return response.data;
}

export async function register(userData) {
  const response = await apiConfig.post("/auth/register", userData);

  if (response.data.success && response.data.token)
    localStorage.setItem("token", response.data.token);

  return response.data;
}

export const checkAuth = async () => {
  const response = await apiConfig.get("/auth");
  return response.data;
};
