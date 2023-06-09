import express, { Request, Response } from 'express'
import cors from 'cors'
import {userRouter} from './router/userRouter'
import {postRouter} from './router/postRouter'


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
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
})

//caminho base
app.get("/user", userRouter) 
//middlewares
app.post("/user/:id", userRouter)
app.put("/user", userRouter)
app.delete("/user", userRouter)


//caminho base
app.get("/post", postRouter) 
//middlewares
app.post("/post/:id", postRouter)
app.put("/post", postRouter)
app.delete("/post", postRouter)


