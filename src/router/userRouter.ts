import { Express } from "express";
import { UserController } from "../controller/UserController";

const userRouter =  express.router();

const userController = new UserController();
userRouter.get("/" , userController.getUsers)
/*userRouter.post("/",userController.createUser)
userRouter.put("/" , userController.updateUser)
userRouter.delete("/",userController.deleteUser)*/
