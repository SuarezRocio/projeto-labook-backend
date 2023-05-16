import { PostDTOS } from "../dtos/PostDtos";
import { BaseDatabase } from "./BaseDataBase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_POST = "post"

    public async findPost(q: string | undefined) {
        let postDB

        if (q) {
            const result: PostDTOS[] = await BaseDatabase
                .connection(PostDatabase.TABLE_POST)
                .where("name", "LIKE", `%${q}%`)

                postDB = result
        } else {
            const result: PostDTOS[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POST)
                
            postDB = result
        }

        return  postDB
    }

    public async findPostById(id: string) {
        const [ postDB ]: PostDTOS[] | undefined[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POST)
        .where({ id })

        return PostDTOS
    }

    
    public async updatePostById(id: string, newPost: object) {
        await BaseDatabase
        .connection(PostDatabase.TABLE_POST)
        .update({ post: newPost })
            .where({ id })
    }
    
    public async insertPost(newPostDB: PostDTOS) {
        await BaseDatabase
        .connection(PostDatabase.TABLE_POST)
        .insert(newPostDB)
    }

    public async deletePostById(PostToDeleteDB : string) {
        await BaseDatabase
        .connection(PostDatabase.TABLE_POST)
        .insert(PostToDeleteDB)
    }
}
