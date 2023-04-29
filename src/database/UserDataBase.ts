import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    public async findUsers(q: string | undefined) {
        let usersDB

        if (q) {
            const result: UserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .where("name", "LIKE", `%${q}%`)

            usersDB = result
        } else {
            const result: UserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)

            usersDB = result
        }

        return usersDB
    }

    public async findUserById(id: string) {
        const [ userDB ]: UserDB[] | undefined[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where({ id })

        return userDB
    }

    
    public async updateUserById(id: string, newUser: object) {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .update({ user: newUser })
            .where({ id })
    }
    
    public async insertUser(newUserDB: UserDB) {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(newUserDB)
    }

    public async deleteUserById(UserToDeleteDB : string) {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(UserToDeleteDB)
    }
}
