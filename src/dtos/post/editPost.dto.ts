import z from 'zod'
export interface EditPostInputDTO {
name: string ,
token: string, 
idToEdit: string
}

export interface EditPostOutputDTO {
    
}

export const EditPostSchema = z.object({
    name: z.string().min(1),
    token: z.string().min(1), 
    idToEdit: z.string().min(1)
}).transform(data => data as EditPostInputDTO)