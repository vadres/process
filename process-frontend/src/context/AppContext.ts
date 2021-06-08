import { createContext } from "react";
import AuthUser from "../@types/AuthUser";

export interface AppContextType {
  user: AuthUser,
  loadUser: (login: string, password: string) => void,
  unsetUser: () => void,
  checkUser: () => boolean
} 

export const appContextDefault: AppContextType = {
  user: { 
    token: "", 
    userDetails: { 
      id: 0, 
      name: "", 
      authorities: [], 
      username: "", 
      email: "" 
    }    
  },
  loadUser: () => null,
  checkUser: () => false,
  unsetUser: () => null
}

export const AppContext = createContext<AppContextType>(appContextDefault);