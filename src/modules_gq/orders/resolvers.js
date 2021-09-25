import model from './model.js'

export default {
    Query:{
        orders: async (_,{orderId,tableId,pagination={}})=> await model.orders(orderId,tableId,pagination)
    },
    // Mutation:{
    //     addOrder: async (_ ,args) =>{
    //         try {
    //             let table = await model.addOrderss(args)
    //             if (table) {
    //                 return {
    //                     status: 201,
    //                     message: "The new order has been added !!!",
    //                     data: table
    //                 }
    //             } else throw new Error("There is an error !")
    //         } catch (error) {
    //             return {
    //                 status: 400,
    //                 message: error,
    //                 data: null
    //             }
    //         }
    //     },
    //     updateOrder: async (_, args) => {
    //         try {
    //             let table = await model.updateOrders(args)
    //             if (table) {
    //                 return {
    //                     status: 201,
    //                     message: "The order has been updated !!!",
    //                     data: table
    //                 }
    //             } else throw new Error("There is an error !")
    //         } catch (error) {
    //             return {
    //                 status: 400,
    //                 message: error,
    //                 data: null
    //             }
    //         }
    //     },
    //     deleteTable: async (_, args) => {
    //         try {
    //             let table = await model.deleteOrder(args)
    //             if (table) {
    //                 return {
    //                     status: 201,
    //                     message: "The order has been deleted !!!",
    //                     data: table
    //                 }
    //             } else throw new Error("There is an error !")
    //         } catch (error) {
    //             return {
    //                 status: 400,
    //                 message: error,
    //                 data: null
    //             }
    //         }
    //     },
    // },
    Order: {
        orderId:        global => global.order_id ,
        tableNumber:    global => global.table_number ,
        orderPaid:      global => global.order_paid ,
        OrderSets:      global => global.order_sets ,
        orderCreatedAt: global => global.order_created_at,
        orderPrize:     global => global.order_total_price 
    },
    OrderSet: {
        orderSetId: global => global.order_set_id 
    }
}