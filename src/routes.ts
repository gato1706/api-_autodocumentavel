import { FastifyInstance } from "fastify/types/instance";
import z from "zod";
import { FastifyTypedInstance } from "./types";
import { randomUUID } from "node:crypto";

interface User {
    id: string,
    name: string,
    email: string
}

const users: User[] = []

export async function routes(app: FastifyTypedInstance) {
    app.get('/users', {
        schema: {
            tags: ['users'],
            description: 'lit users',
            response: {
                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string(),
                }))
            }
        }
    }, () => {
        return users
    })

    app.post('/users', {
        schema: {
            description: 'Create a nwe user',
            body: z.object({
                name: z.string(),
                email: z.string().email(),
            }),
            response:{
                201: z.null().describe('user created'),
            }
        }
    }, async (req, res) => {
        const { name, email } = req.body

        users.push({
            id: randomUUID(),
            name, 
            email,
        })

        return res.status(201).send()
    })
}