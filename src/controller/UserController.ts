import {Request, Response} from "express"
import { UserDatabase } from "../database/UserDataBase"
import { User } from "../models/User"
import { GetUserInput} from "../types"
import { UserBusiness } from "../business/UserBusiness"
import { BaseError } from "../error/BaseError"


/**UserDtosSingUp , UpdateUser, UserDB, createUserDB, deleteUserById */

export class UserController{
//Metodos (constructos, get, set)
public getUsers = async (req: Request, res: Response) => {
    try {

        //req.query.q as string | undefined
        const input : GetUserInput = {
            q : req.query.q
        }

        const userBusiness = new UserBusiness()
        const output = await userBusiness.getUsers(input)

        res.status(200).send(output)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
}
/*
public createUser =  async (req: Request, res: Response) => { 
    try {
    const input: createUserDB = { 
      id: req.body.id, 
      name: req.body.name, 
      email:  req.body.email, 
      password:  req.body.password 
    } 
    const userBusiness = new UserBusiness()
    const output = await userBusiness.createUser(input)

   res.status(201).send(output)
} catch (error) {
    console.log(error)

    if (req.statusCode === 200) {
        res.status(500)
    }

    if (error instanceof Error) {
        res.send(error.message)
    } else {
        res.send("Erro inesperado")
    }
}
}


public updateUser = async (req: Request, res: Response) => {
    try {
        const input : UpdateUser = {            
         id : req.params.id,
         name :  req.body.name, 
         email :  req.body.email,
         password :  req.body.password,
         created_at :  req.body.created_at    
        }
        
        const userBusiness = new UserBusiness()
        const output = await userBusiness.updateUser(input)    

        res.status(201).send(output)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
}

public deleteUser =  async (req: Request, res: Response) => {
    try {
        const input: deleteUserById = {
          id:req.params.id
        }
  
        const business = new UserBusiness()
        const output = await business.deleteUser(input)
  
        res.status(200).send(output)
      } catch (error) {
        console.log(error)
  
        if (req.statusCode === 200) {
          res.status(500)
        }
  
        if (error instanceof Error) {
          res.send(error.message)
        } else {
          res.send("Unexpected Error")
        }
      }
    }*/
  }