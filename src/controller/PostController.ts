import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { deletePostById , GetPostInput} from "../dtos/PostDtos"

/** deletePost, updatePost, getPost*/


export class PostController {
    public getPost = async (req: Request, res: Response) => {
        try {

            //req.query.q as string | undefined
            const input : GetPostInput = {
                q : req.query.q
            }
            const posttBusiness = new PostBusiness()
            const output = await posttBusiness.getPost(input)
    
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


    public createPost = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.params.id,
                content: req.params.content,
                likes:  req.params.likes,
                dislikes: req.params.dislikes,
                createdAt: req.params.created_at,
                updateAt: req.params.updateAt,
                creator: req.params.creator
            }

            const postBusiness = new PostBusiness()
            const output = await postBusiness.createPost(input)
    
            res.status(201).send(output)
        } catch (error) {
            console.log(error)
    
            if (res.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public updatePost = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.params.id,
                content: req.params.content,
                likes:  req.params.likes,
                dislikes: req.params.dislikes,
                createdAt: req.params.created_at,
                updateAt: req.params.updateAt,
                creator: req.params.creator
            }

            const postBusiness = new PostBusiness()
            const output = await postBusiness.updatePost(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)
    
            if (res.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public deletePost =  async (req: Request, res: Response) => {
        try {
            const input: deletePostById = {
              id:req.params.id
            }
      
            const business = new PostBusiness()
            const output = await business.deletePost(input)
      
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
        }

}