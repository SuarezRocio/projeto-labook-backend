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
}