import Authority from "./Authority";
import User from "./User";

export default interface AuthUser {
  token: string,
  userDetails: User
}