import { PostDatabase } from "../database/PostDatabase"
import { CreatePostInputDTO, CreatePostOutputDTO } from "../dtos/post/createPost.dto"
import { DeletePostInputDTO, DeletePostOutputDTO } from "../dtos/post/deletePost.dto"
import { EditPostInputDTO, EditPostOutputDTO } from "../dtos/post/editPost.dto"
import { GetPostOutputDTO, GetPostInputDTO } from "../dtos/post/getPost.dto"
import { LikeOrDislikeInputDTO, LikeOrDislikeOuputDTO } from "../dtos/post/likeOrDislike.dto"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { LikeDislikeDB, Post } from "../models/Post"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export class ProductBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager
  ) { }

  public getPost = async (
    input: GetPostInputDTO
  ): Promise<GetPostOutputDTO> => {
    const { token } = input

    const payload = this.tokenManager.getPayload(token)

    if (payload === null) {
      throw new BadRequestError("Token inválido.")
    }

    const postDadosDB = await this.postDatabase.getPostDBWhitCreatorName()

    const postsDB = postDadosDB
      .map((postDB) => {
        const postDB = new Post(
          postDB.id,
          postDB.createdAt,
          postDB.creator_name,
          postDB.dislikes,
          postDB.likes,
          postDB.update_at,
          postDB.content
        )
        return postDB.toBusinessModel()
      })

    const output: GetPostOutputDTO = postsDB

    return output
  }


  public editPost = async (
    input: EditPostInputDTO
  ): Promise<EditPostOutputDTO> => {
    const { token, name, idToEdit } = input

    const payload = this.tokenManager.getPayload(token)

    if (payload === null) {
      throw new BadRequestError("Token inválido.")
    }

    const postDadosDB = await this.postDatabase.findPostById(idToEdit)

    if (!postDadosDB) {
      throw new NotFoundError("post com esse id nao existe")
    }

    /* if(payload.id !== postDadosDB.creator_id){
       throw new Error ForbidEnError("soamente que crio o post pode editarlo")
     }*/

    const post = new PostDB {
      postDadosDB.id,
      postDadosDB.createdAt,
      postDadosDB.creator_name,
      postDadosDB.dislikes,
      postDadosDB.likes,
      postDadosDB.update_at,
      postDadosDB.content
    }


    const updatePostDB = post.toDBModel()
    await this.postDatabase.updatePost(updatePostDB)


    const output: EditPostOutputDTO = undefined

    return output
  }



  public deletePost = async (
    input: DeletePostInputDTO
  ): Promise<DeletePostOutputDTO> => {
    const { token, idToDelete } = input

    const payload = this.tokenManager.getPayload(token)

    if (payload === null) {
      throw new BadRequestError("Token inválido.")
    }

    const postDadosDB = await this.postDatabase.findPostById(idToDelete)

    /*if(!payload){
      throw new Error UnauthorizedError()
    }*/

    if (!postDadosDB) {
      throw new NotFoundError("post com esse id nao existe")
    }

    /* if(payload.id !== postDadosDB.creator_id){
       throw new Error ForbidEnError("soamente que crio o post pode editarlo")
     }*/

    const post = new PostDB {
      postDadosDB.id,
      postDadosDB.createdAt,
      postDadosDB.creator_name,
      postDadosDB.dislikes,
      postDadosDB.likes,
      postDadosDB.update_at,
      postDadosDB.content
    }


    const updatePostDB = post.toDBModel()
    await this.postDatabase.updatePost(updatePostDB)


    const output: DeletePostOutputDTO = undefined

    return output
  }


  public likeOrDislikePost = async (
    input: LikeOrDislikeInputDTO
  ): Promise<LikeOrDislikeOuputDTO> => {
    const { token, postId } = input

    const payload = this.tokenManager.getPayload(token)

    if (payload === null) {
      throw new BadRequestError("Token inválido.")
    }

    const postDadosDB = await this.postDatabase.findPostById(token)

    /*if(!payload){
      throw new Error UnauthorizedError()
    }*/

    if (!postDadosDB) {
      throw new NotFoundError("post com esse id nao existe")
    }

    /* if(payload.id !== postDadosDB.creator_id){
       throw new Error ForbidEnError("soamente que crio o post pode editarlo")
     }*/


    const postDBWhitCreatorName =
      await this.postDatabase.findPostDBWhitCreatorNameById(postId)

    if (!postDBWhitCreatorName) {
      throw new NotFoundError("post com essa id nao existe")
    }

    const posts = new Post{
      postDBWhitCreatorName.id,
      postDBWhitCreatorName.name,
      postDBWhitCreatorName.createdAt,
      postDBWhitCreatorName.update_at,
      postDBWhitCreatorName.creator_name,
      postDBWhitCreatorName.creator_id,
      postDBWhitCreatorName.likes,
      postDBWhitCreatorName.dislikes
    }

    const likeSQLlite = like ? 1 : 0


    const likeOrDislike: LikeDislikeDB = {
      user_id: payload.id,
      post_id: postId,
      like: likeSQLlite
    }

    const likeDislikesExits =
      await this.postDatabase.findDislikeLike(likeDislikesExits)

    if (likeDislikesExits === POST_LIKE.ALREADY_LIKED) {
      if (like) {
        await this.postDatabase.removeLikeDislike(likesDislikeDB)
        Post.removeLike
      } else {
        await this.postDatabase.updateLikeDislike(likesDislikeDB)
        Post.removeLike
        Post.addDislike()

      }
    } else if (likeDislikesExits === POST_LIKE.ALREADY_LIKED) {
      if (like === false) {
        await this.postDatabase.removeLikeDislike(likesDislikeDB)
        Post.removeLikeDislike()
      } else {
        await this.postDatabase.updateLikeDislike(likesDislikeDB)
        Post.removeLikeDislike()
        Post.addLike()
      }
    } else {
      await this.postDatabase.insertLikeDislike(likesDislikeDB)
      like ? Post.addLike() : Post.addDislike()
    }

    const updatePostDB = Post.toDBModel()
    await this.PostDatabase.updatePost(updatePostDB)

    const output: LikeOrDislikeOuputDTO = undefined
    return output
  }

  public createPost = async (
    input: CreatePostInputDTO
  ): Promise<CreatePostOutputDTO> => {
    // const { id, name, price } = input
    const { name, token } = input
 
    const payload = this.tokenManager.getPayload(token)

    if(!payload){
      throw new Error()
    }

    const id = this.idGenerator()

    const post = new Post(
      id,
      name,
      0,
      0,
     // new.Date().toISOString(),
     payload.id,
     payload.name
    )


    const PostDB = Post.toDBModel()
    await this.postDatabase.insertPost(PostDB)

    const output: CreatePostInputDTO = undefined
    return output
    

}
}
