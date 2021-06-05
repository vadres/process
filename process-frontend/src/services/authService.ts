import api from "./api"

export const authenticate = async (username: string, password: string) => {
  try {
    return await api.post("/auth/login", {
      username,
      password
    });
  } catch (e) {
    throw e;
  } 
}