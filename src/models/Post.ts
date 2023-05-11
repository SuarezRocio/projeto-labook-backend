export interface PostDB {
  id: string,
  creator_id : string, 
  content : string,
  likes: number,
  dislikes: number,
  update_at : string,
  createdAt: string
}

// é o modelo de Product que o front receberá (createdAt camelCase)
export interface PostModel {
  id: string,
  creator_id : string, 
  content : string,
  likes: number,
  dislikes: number,
  update_at : string,
  createdAt: string
}

export interface PostDBWhitCreatorName {
    id: string,
    creator_id : string, 
    content : string,
    likes: number,
    dislikes: number,
    update_at : string,
    createdAt: string
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
            private content: string,
            private likes: number,
            private dislikes: number,
            private createdAt: string,
            private updateAt: string,
            private creator_id: string,
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

        public addDislike = (): void  => {
            this.likes--
        }

 

    // para facilitar nossa vida, temos o método que gera um ProductDB
    public toDBModel(): PostDB {
        return {
            id: this.id,
            creator_id : this.creator_id, 
            content :  this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            update_at : this.updateAt,
            createdAt: this.createdAt       
            }
    }

    // para facilitar nossa vida, temos o método que gera um ProductModel
    public toBusinessModel(): PostModel {
        return {
            id: this.id,
            creator_id : this.creator_id, 
            content :  this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            update_at : this.updateAt,
            createdAt: this.createdAt       
            }
    }
}