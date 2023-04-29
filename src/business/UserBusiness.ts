import { UserDatabase } from "../database/UserDataBase";
import { UserDtosSingUp } from "../dtos/UserDtosSingUp";
import { BadRequestError } from "../error/BaseRequestError";
import { NotFoundError } from "../error/NotFoundError";
import { User } from "../models/User";
import { GetUserInput, GetUseroutput} from "../dtos/UserDtosLogin";

/**, GetUsersDB, UpdateUser, UserDB, UserUpdateOutput, deleteUser, deleteUserById, getDeleteOutput  */

export class UserBusiness {
     getUsers = async (input : GetUserInput): Promise<GetUseroutput>  => {
      const {q} = input

      if(typeof q !== "string" && q !== undefined){
        throw new Error("'q' must be string or undefined")
      }
      
      
      const userDatabase = new UserDatabase();
      const usersDB = await userDatabase.findUsers(q);
   //q: string | undefined
      const users: User[] = usersDB.map(
        (userDB) =>
          new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at
          )
      )

      const output: GetUseroutput = {
        message: "Users in DB",
        users
      } 

      return output;
    };

 /* createUser = async (input: any) => {
    const { id, name, email, password } = input;

    if (typeof id !== "string") {
      throw new NotFoundError("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }

    if (typeof email !== "string") {
      throw new BadRequestError("'email' deve ser string");
    }

    if (typeof password !== "string") {
      throw new BadRequestError("'password' deve ser string");
    }

    const userDatabase = new UserDatabase();
    const userDBExists = await userDatabase.findUserById(id);

    if (userDBExists) {
      throw new Error("'id' já existe");
    }

    const newUser = new User(
      id,
      name,
      email,
      password,
      new Date().toISOString()
    ); // yyyy-mm-ddThh:mm:sssZ

    const newUserDB: UserDtosSingUp = {
      id: newUser.getId(),
      name: newUser.getName(),
      email: newUser.getEmail(),
      password: newUser.getPassword(),
      created_at: newUser.getCreatedAt(),
    };

    await userDatabase.insertUser(newUserDB);
    const output: any = {
      message: "Cadastro realizado com sucesso",
      user: newUser,
    };

    return output;
  }*/

}