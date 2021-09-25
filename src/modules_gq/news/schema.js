import { gql } from 'apollo-server'

export default gql`

    extend type Query {
        registeraa(orderId:ID tableId:ID):[Register!]!
    }

    extend type Mutation {
        createNews(title:String! body:String! category_id:Int! author:Int! language_id:Int!):MutationResponse!
        updateNews(new_id:Int! title:String! body:String! author:Int! view:Boolean!):MutationResponse!
        deleteNews(new_id:Int!):MutationResponse!
    }
    
    type Registeara {
        orderId:ID!
    }
`