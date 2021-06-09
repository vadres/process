import AuthUser from "../@types/AuthUser"
import api from "./api"

export const getAllFinishers = async (auth: AuthUser) => {
  try {
    return await api.get("/sight/finishers", {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const getProcess = async (auth: AuthUser) => {
  try {
    return await api.get(`/process/sights/open?id=${auth.userDetails.id}`, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const createSight = async (auth: AuthUser, user: number, process: number) => {
  try {
    return await api.post("/sight", { user, process }, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}

export const createSightResponse = async (auth: AuthUser, description: string, process: number) => {
  try {
    return await api.post("/sight/response", {  
      user: auth.userDetails.id, 
      process, 
      description 
    }, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  } catch (e) {
    throw e;
  }
}
