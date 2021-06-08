interface Authority {
  id: number
  description: string
  authority: string
}

export default interface User {
  token: string,
  userDetails: {
    id: number
    username: string
    name: string    
    email: string
    authorities: Authority[]
  }
}