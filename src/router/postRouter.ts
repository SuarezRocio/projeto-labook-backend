import { Express } from "express";
import { PostController } from "../controller/PostController";

const accountRouter =  express.router();

const postController = new PostController();
postRouter.get("/" , PostController.getPost)
postRouter.post("/",PostController.createPost)
postRouter.put("/" , PostController.updatePost)
postRouter.delete("/",PostController.deletePost)