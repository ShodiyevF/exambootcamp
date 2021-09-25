// import { express } from "express"
// const app = express()
// app.use(express.json())

import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import {ApolloServer, gql} from 'apollo-server'
import modules from './modules_gq/index.js'

const server = new ApolloServer(
    {
        modules,
        plugins:[
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    }
)

server.listen(process.env.PORT || 4000).then(({ url }) => console.log(url))