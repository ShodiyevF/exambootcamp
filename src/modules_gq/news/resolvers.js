import model from './model.js'

export default {
    Query:{
        orders: async (_,{orderId,tableId})=> await model.orders(orderId,tableId)
    },
    Mutation:{
        createNews: async (_ ,args) =>{
            // console.log(args);
            try {
                let table = await model.createNews(args)
                console.log(table);
                if (table) {
                    return {
                        status: 201,
                        message: "The new news has been added !!!",
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
        updateNews: async (_, args) => {
            try {
                const test = await model.updateTitleNews(args)
                await model.updateBodyNews(args)
                console.log(test);
                await model.updateAuthorNews(args)
                await model.updateViewNews(args)
                if (test) {
                    return {
                        status: 201,
                        message: "The new news has been updated !!!",
                        data: newTitle
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
        deleteNews: async (_, args) => {
            try {
                let table = await model.deleteNews(args)
                if (table) {
                    return {
                        status: 201,
                        message: "The new news has been deleted !!!",
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