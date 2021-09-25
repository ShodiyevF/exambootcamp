import { gql } from 'apollo-server'

export default gql`

    extend type Query {
        registera(orderId:ID tableId:ID):[Register!]!
    }

    extend type Mutation {
        createCategory(category_name:String! lang_id:Int!):MutationResponse!
        updateCategories(category_name:String! category_id:Int!):MutationResponse!
        deleteCategories(category_id:Int!):MutationResponse!
    }
    
    type Registear {
        orderId:ID!
    }
`