import Authority from "./Authority";

export default interface User {
  id: number
  username: string
  name: string    
  email: string
  authorities: Authority[]
}