import { PostDatabase } from "../database/PostDataBase";
import { BadRequestError } from "../error/BaseRequestError";
import { NotFoundError } from "../error/NotFoundError";
import { Post } from "../models/Post";
import { GetPostInput, GetPostoutput,  PostDTOS, PostUpdateOutput, deletePostById } from "../dtos/PostDtos";
import { getDeleteOutput } from "../types";

/**deleteUser*/
/**GetUserInput, GetUseroutput, GetUsersDB, UpdateUser, UserDB, UserUpdateOutput, deleteUserById, getDeleteOutput */

export class PostBusiness {
     getPost = async (input : GetPostInput): Promise<GetPostoutput>  => {
      const {q} = input

      if(typeof q !== "string" && q !== undefined){
        throw new Error("'q' must be string or undefined")
      }
      
      
      const postDatabase = new PostDatabase();
      const PostDtos = await postDatabase.findPost(q);
   //q: string | undefined
      const post: Post[] = PostDtos.map(
        (PostDTOS) =>
          new Post(
            PostDTOS.id,
            PostDTOS.content,
            PostDTOS.likes,
            PostDTOS.dislikes,
            PostDTOS.createdAt,            
            PostDTOS.updateAt,
            PostDTOS.creator,
          )
      )


      const output: GetPostoutput = {
        message: "Post in DB",
        posts
      } 

      return output;
    };

  createPost = async (input: any) => {
    const { id, content, likes, dislikes, createdAt, updateAt, creator_id, creator_name } = input;

    if (typeof id !== "string") {
      throw new NotFoundError("'id' deve ser string");
    }

    if (typeof content !== "string") {
      throw new BadRequestError("'content' deve ser string");
    }

    if (typeof likes !== "number") {
      throw new BadRequestError("'likes' deve ser string");
    }

    if (typeof dislikes !== "number") {
      throw new BadRequestError("'dislikes' deve ser string");
    }

    
    if (typeof createdAt !== "string") {
      throw new BadRequestError("'createdAt' deve ser string");
    }
    
    if (typeof updateAt !== "string") {
      throw new BadRequestError("'updatedAt' deve ser string");
    }

    
    if (typeof creator_id !== "string") {
      throw new BadRequestError("'creator' deve ser string");
    }

    
    if (typeof creator_name !== "string") {
      throw new BadRequestError("'creator' deve ser string");
    }

    const postDatabase = new PostDatabase();
    const postDBExists = await postDatabase.findPostById(id);

    if (postDBExists) {
      throw new Error("'id' já existe");
    }

    const newPost = new Post(
      id,
      content,
      likes,
      dislikes,
      createdAt,
      updateAt,
      creator_id,
      creator_name  
//      new Date().toISOString()
    ); // yyyy-mm-ddThh:mm:sssZ

    const newPostDB: PosDTOS = {
      id: newPost.getId(),
      content: newPost.getContent(),
      likes: newPost.getLikes(),
      dislikes: newPost.getDislikes(),
      createdAt: newPost.getCreatedAt(),
      updatedAt: newPost.getUpdateAt(),
      creator_id: newPost.getCreator_id(),
      creator_name : newPost.getCreator_name()
    };

    await postDatabase.insertPost(newPostDB);
    const output: any = {
      message: "Cadastro realizado com sucesso",
      posts: newPostDB,
    };

    return output;
  }
  
    updatePost = async (input: PostDTOS): Promise<PostUpdateOutput> => {
      const {id, content , likes, dislikes, 
      createdAt, updatedAt, creator_id, creator_name
      } = input
      
      //  const id = req.params.id
      //  const value = req.body.value

      if (!id) {
        //  res.status(404)
          throw new NotFoundError("'id' não encontrado")
      }

      /*const databases = new UserDatabase()
      const userToEdit = await databases.findUserById(id)*/

      if (typeof content !== "string") {
        //  res.status(400)
          throw new BadRequestError("'value' deve ser number")
      }
      
      //const databases = new UserDatabase()
      //findUserByName
      const database = new PostDatabase()
      const userToEdits = await database.findPostById(id)

      if (!postToEdit) {
        //  res.status(400)
          throw new BadRequestError("'userToEdits' no encontrado")
      }
    

      /*id(findUserByName){
        throw new Error(`'${name}' have been taken`)
      }*/

      if (typeof likes !== "string") {
        //  res.status(400)
          throw new BadRequestError("'email' deve ser number")
      }
    
      if (typeof dislikes !== "string") {
          //  res.status(400)
            throw new BadRequestError("'password' deve ser number")
        }  
        
        if (typeof createdAt !== "string") {
          //  res.status(400)
            throw new BadRequestError("'created_at' deve ser number")
        }

        
        if (typeof updatedAt !== "string") {
          //  res.status(400)
            throw new BadRequestError("'created_at' deve ser number")
        }

        
        if (typeof creator_id !== "string") {
          //  res.status(400)
            throw new BadRequestError("'created_at' deve ser number")
        }

        
        if (typeof creator_name !== "string") {
          //  res.status(400)
            throw new BadRequestError("'created_at' deve ser number")
        }

        const updateApost = new Post(
            postToEdit.id,
            postToEdit.content,
            postToEdit.likes,
            postToEdit.dislikes,
            postToEdit.createdAt,
            postToEdit.updatedAt,
            postToEdit.creator_id,
            postToEdit.creator_name
        )

        /*const newUser = user.getId() + value
        user.setId(newUser)*/

        //await userDatabase.updateUserById(id, newUser)
       await database.updatePostById( id, updateApost )
        
        const output: any = {
            message: "Cadastro realizado com sucesso",
            user: {
              id:   updateApost.getId(),
              content: updateApost.getContent(),
              likes : updateApost.getLikes(),
              dislikes : updateApost.getDislikes(),
              created_at : updateApost.getCreatedAt(),
              update_at : updateApost.getUpdateAt(),
              creator_id : updateApost.getCreator_id(),
              creator_name : updateApost.getCreator_name(),
            }
          };
       return output
}


public deletePost = async (input: deletePostById): Promise<getDeleteOutput> => {
  const { id } = input

  if (!id) {
    throw new BadRequestError("'id' must be informed")
  }
  if (typeof id !== "string") {
    throw new BadRequestError("'id' must be string")
  }

  const database = new PostDatabase()
  const PostToDeleteDB = await database.findPostById(id)

  if (!PostToDeleteDB) {
    throw new Error("'id' do not exists")
  }
  await database.deletePostById( PostToDeleteDB.id)


  const output: getDeleteOutput = {
    message: "Character deleted",
  }
  return output
}

}