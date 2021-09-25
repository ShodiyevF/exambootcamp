import { gql } from 'apollo-server'

export default gql`

    extend type Query {
        orders(orderId:ID tableId:ID pagination:Pagination):[Order!]!
    }

    extend type Mutation {
        addOrder(tableNumber:Int!):MutationResponse!
        updateOrder(orderId:ID! tableId:ID! orderPaid:String):MutationResponse!
        deleteOrder(steakId:ID!):MutationResponse!
    }
    
    type Steak {
        addOrder(tableNumber:Int!):MutationResponse!
        updateOrder(orderId:ID! tableId:ID! orderPaid:String):MutationResponse!
        deleteOrder(steakId:ID!):MutationResponse!
    }
    
    type Order {
        orderId:ID!
        tableNumber:Int!
        orderPaid:Boolean!
        OrderSets:[OrderSet]!
        orderCreatedAt:Date!
        orderPrize:Int!
    }

    

    type OrderSet {
        orderSetId:ID!
        steak:Steak!
        count:Int!
        price:Int!
    }
`