import { gql } from 'apollo-server'

export default gql`

    extend type Query {
        register(orderId:ID tableId:ID):[Register!]!
    }

    extend type Mutation {
        register(firstName:String! lastName:String! password:String! email:String! specialist:String):MutationResponse!
        login(email:String! password:String!):MutationResponse!
    }
    
    type Register {
        orderId:ID!
    }
`