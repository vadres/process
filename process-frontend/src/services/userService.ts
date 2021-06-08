import AuthUser from "../@types/AuthUser"
import User from "../@types/User";
import api from "./api"

export const getAllUsers = async (user: AuthUser) => {
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


export const deleteUser = async (user: User) => {
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