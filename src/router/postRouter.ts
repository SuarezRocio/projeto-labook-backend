import express from "express"
import { IdGenerator } from "../services/IdGenerator"
import { PostDatabase } from "../database/PostDatabase"
import { PostController } from "../controller/PostController"
import {PostBusiness} from '../business/PostBusiness'
 
export const postRouter = express.Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator()
    )
)

postRouter.get("/", postController.getPost)
postRouter.post("/", postController.createPost)
postRouter.put("/", postController.editPost)
postRouter.delete("/", postController.deletePost)

