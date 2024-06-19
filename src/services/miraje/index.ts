import { Factory, Model, createServer } from "miragejs"
import {  faker } from '@faker-js/faker';

type User = {
    name: string;
    email: string;
    created_at: string
}

export function makeServer({ environment = "teste" } = {}){
    let server = createServer({
        environment,
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {
                    return faker.date.recent()
                }
            })
        },

        seeds(server) {
            server.createList('user', 10)
        },
        routes() {
            this.namespace = '/api'
            this.timing = 750

            this.get("/users")
            this.post("/users")
            this.passthrough()
            this.namespace = ''
           
        }
    })

    return server;
}