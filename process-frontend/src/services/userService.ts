import User from "../@types/User"
import api from "./api"

export const getAllUsers = async (user: User) => {
  console.log(user.token);
  try {
    return await api.get("/user", {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}