import { createContext } from "react";
import User from "../@types/User";

export interface AppContextType {
  user: User,
  loadUser: (login: string, password: string) => void,
  removeUser: () => void,
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
  removeUser: () => null
}

export const AppContext = createContext<AppContextType>(appContextDefault);