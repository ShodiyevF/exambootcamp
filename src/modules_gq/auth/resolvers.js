import model from './model.js'

export default {
    Query:{
        orders: async (_,{orderId,tableId,pagination={}})=> await model.orders(orderId,tableId,pagination)
    },
    Mutation:{
        register: async (_ ,args) =>{
            // console.log(args);
            try {
                let table = await model.register(args)
                console.log(table);
                if (table) {
                    return {
                        status: 201,
                        message: "The new order has been added !!!",
                        data: table
                    }
                } else throw new Error("There is an error !")
            } catch (error) {
                return {
                    status: 400,
                    message: 'There is an error'
                }
            }
        },
        login: async (_, args) => {
            // console.log(args);
            try {
                let table = await model.LOGIN(args)
                if (table) {
                    return {
                        status: 201,
                        message: "The new user has been logined !!!",
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
    }
}