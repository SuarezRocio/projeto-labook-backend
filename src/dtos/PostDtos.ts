import { Post } from "../models/Post"

export interface PostDTOS {
    id: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string,
    creator_id : string
    creator_name : string  
}


export interface postDB {
  id: string,
  content: string,
  likes: number,
  dislikes: number,
  createdAt: string,
  updatedAt: string,
  creator_id : string
  creator_name : string  
}



export interface updatePost {
    id: unknown
    content: unknown
    likes: unknown
    dislikes: unknown
    createdAt: unknown
    updateAt : unknown
    creator_id : unknown 
    creator_name : unknown  
}

  export interface createPostDB {
    id: unknown
    content: unknown
    likes: unknown
    dislikes: unknown
    createdAt: unknown
    creator_id : unknown
    creator_name : unknown  
  }


export interface PostUpdateOutput{
  message: string,
  post:  {
  id: string,
  content: string,
  likes: string,
  dislikes: string,
  createdAt: string,
  updateAt : string,
  creator_id : string 
  creator_name : string  
}
}


  export interface deletePostById {
    id: unknown
  }

  export interface GetPostDB {
    id: unknown
    content: unknown
    likes: unknown
    dislikes: unknown
    createdAt: unknown
    updateAt : unknown
    creator_id : unknown 
    creator_name : unknown  
 }


export interface GetPostInput {
  q: unknown
}

export interface GetPostoutput{
  message : string,
  users: Post[]
}


export interface getDeleteOutput{
  message : string
}

export interface getPost {
    id: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string,
    creator_id : string
    creator_name : string  
}
