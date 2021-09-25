import model from './model.js'

export default {
    Query:{
        orders: async (_,{orderId,tableId})=> await model.orders(orderId,tableId)
    },
    Mutation:{
        createCategory: async (_ ,args) =>{
            // console.log(args);
            try {
                let table = await model.createCategory(args)
                console.log(table);
                if (table) {
                    return {
                        status: 201,
                        message: "The new categories has been added !!!",
                        data: table
                    }
                } else throw new Error("There is an error !")
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        updateCategories: async (_, args) => {
            try {
                let table = await model.updateCategories(args)
                if (table) {
                    return {
                        status: 201,
                        message: "The new categories has been updated !!!",
                        data: table
                    }
                } else throw new Error("There is an error !")
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        deleteCategories: async (_, args) => {
            try {
                let table = await model.deleteCategories(args)
                if (table) {
                    return {
                        status: 201,
                        message: "The new categories has been deleted !!!",
                        data: table
                    }
                } else throw new Error("There is an error !")
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        }
    },
    Registera: {
        orderId:        global => global.order_id ,
        tableNumber:    global => global.table_number ,
        orderPaid:      global => global.order_paid ,
        OrderSets:      global => global.order_sets ,
        orderCreatedAt: global => global.order_created_at,
        orderPrize:     global => global.order_total_price 
    }
}