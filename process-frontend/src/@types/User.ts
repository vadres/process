export default interface User {
  token: string,
  userDetails: {
    id: number
    username: string,
    name: string    
    email: string
    authorities: string[]
  }
}