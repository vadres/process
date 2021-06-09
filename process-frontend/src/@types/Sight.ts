import User from "./User";

export default interface Sight {
  id: number
  description: string
  user: User
  status: number
}