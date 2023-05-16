import { User } from "../models/User"

 export interface UserDtosLogin
   {
     email: string,
     password: string
  }

  export interface GetUserInput {
    q: unknown
  }
  
  export interface GetUseroutput{
    message : string,
    users: User[]
  }