import AuthUser from "../@types/AuthUser"
import Process from "../@types/Process";
import User from "../@types/User";
import api from "./api"

export const getAllProcess = async (auth: AuthUser) => {
  try {
    return await api.get("/process", {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const getProcess = async (auth: AuthUser, id: number) => {
  try {
    return await api.get(`/process?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const createProcess = async (auth: AuthUser, process: Process) => {
  try {
    return await api.post("/process", {...process}, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const updateProcess = async (auth: AuthUser, process: Process, id: number) => {
  try {
    return await api.put(`/process?id=${id}`, {...process}, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const deleteProcess = async (auth: AuthUser, process: Process) => {
  try {
    return await api.delete(`/process?id=${process.id}`, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}