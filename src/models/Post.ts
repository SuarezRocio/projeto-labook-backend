export interface PostDB {
  id: string,
  creator_id : string, 
  dislikes: number,
  likes: number,
  content : string,
  created_at: string,
  update_at : string,
}

// é o modelo de Product que o front receberá (createdAt camelCase)
export interface PostModel {
  id: string,
  dislikes: number,
  likes: number,
  content : string,
  created_at: string,
  update_at : string,
  creator: {
    id: string,
    name: string
  }
}

export enum POST_LIKE{
ALREDY_LIKED = "ALREDY LIKED",
ALREDY_DISLIKED = "ALREDY DISLIKED"
}


export interface PostDBWhitCreatorName {
    id: string,
    creator_id : string, 
    dislikes: number,
    likes: number,
    content : string,
    created_at: string,
    update_at : string,
    creator_name: string
  }
  

  export interface PostDTOS {
    id: string,
    creator_id : string, 
    dislikes: number,
    likes: number,
    content : string,
    created_at: string,
    update_at : string,
    creator_name: string
  }
  




  export interface LikeDislikeDB{
      user_id: string,
      post_id: string, 
      like: number
  }   

  
    export class Post {
        constructor(
            private id: string,
            private creator_id: string,
            private dislikes: number,
            private likes: number,
            private content: string,
            private createdAt: string,
            private updateAt: string,
            private creator_name: string,
            
            ) {}
    
        public getId(): string {
            return this.id
        }
    
        public setId(value: string): void {
            this.id = value
        }
    
        public getContent(): string {
            return this.content
        }
    
        public setContent(value: string): void {
            this.content = value
        }
    
        public getLikes(): number {
            return this.likes
        }
    
        public setLikes(value: number): void {
            this.likes = value
        }
    
        public getDislikes(): number {
            return this.dislikes
        }
    
        public setDislikes(value: number): void {
            this.dislikes = value
        }
    
        public getCreatedAt(): string {
            return this.createdAt
        }
    
        public setCreatedAt(value: string): void {
            this.createdAt = value
        }
       
        public getUpdateAt(): string {
            return this.updateAt
        }
    
        public setUpdatedAt(value: string): void {
            this.updateAt = value
        }
    
        
        public getCreator_id(): string {
            return this.creator_id
        }
    
        public setCreator_id(value: string): void {
            this.creator_id = value
        }
    
        
        public getCreator_name(): string {
            return this.creator_name
        }
    
        public setCreator_name(value: string): void {
            this.creator_name = value
        }
    
        public addLike = (): void => {
            this.likes++
        }

        public removeLike = (): void  => {
            this.likes--
        }

       
        public addDisLike = (): void  => {
            this.likes--
        }
        
        public removeDisLike = (): void  => {
            this.likes--
        }
        
    // para facilitar nossa vida, temos o método que gera um ProductDB
    public toDBModel(): PostDB {
        return {
            id: this.id,
            creator_id : this.creator_id, 
            dislikes: this.dislikes,
            likes: this.likes,
            created_at: this.createdAt,       
            content :  this.content,
            update_at : this.updateAt,
            }
    }

    // para facilitar nossa vida, temos o método que gera um ProductModel
    public toBusinessModel(): PostModel {
        return {
            id: this.id,
            dislikes: this.dislikes,
            likes: this.likes,
            content :  this.content,
            created_at: this.createdAt,
            update_at : this.updateAt,
            creator: {
                id: this.creator_id,
                name: this.creator_name
            }       
            }
    }
}


/*
id TEXT PRIMARY KEY UNIQUE NOT NULL,
creator_id TEXT UNIQUE NOT NULL,
dislikes INTEGER DEFAULT (0) NOT NULL, 
likes INTEGER DEFAULT (0) NOT NULL, 
content TEXT NOT NULL,  
createdAt TEXT DEFAULT (DATETIME()) NOT NULL,
update_at
*/
