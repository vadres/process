import AuthUser from "../@types/AuthUser"
import User from "../@types/User";
import api from "./api"

export const getAllUsers = async (auth: AuthUser) => {
  try {
    return await api.get("/user", {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const getUser = async (auth: AuthUser, id: number) => {
  try {
    return await api.get(`/user?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const createUser = async (auth: AuthUser, user: User) => {
  try {
    return await api.post("/user", {...user}, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const updateUser = async (auth: AuthUser, user: User) => {
  try {
    return await api.put("/user", {...user}, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const deleteUser = async (auth: AuthUser, user: User) => {
  try {
    return await api.delete(`/user?id=${user.id}`, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}