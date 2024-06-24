import { Factory, Model, Response, createServer, ActiveModelSerializer } from "miragejs"
import {  faker } from '@faker-js/faker';

type User = {
    name: string;
    email: string;
    created_at: string
}

export function makeServer({ environment = "test" } = {}){
    let server = createServer({
        serializers: {
            application: ActiveModelSerializer
        },

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
            server.createList('user', 200)
        },
        routes() {
            this.namespace = '/api'
            this.timing = 750

            this.get("/users", function (this: any, schema, request) {
                const {page = 1, per_page = 10} = request.queryParams
                const total = schema.all('user').length
                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

              

                const users = this.serialize(schema.all('user'))
                .users.slice(pageStart, pageEnd)

                return new Response (
                    200,
                    {"x-total-count" : String(total)},
                    {users}
                )
            })
            this.get("/users/:id")
            this.post("/users")
            this.passthrough()
            this.namespace = ''
           
        }
    })

    return server;
}