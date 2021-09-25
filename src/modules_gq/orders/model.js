import { rduRow, addRow } from './../../lib/pool.js'

const orders = async () => {
    try{
        //,orderId,tableId,(page-1)*limit,limit
        return await rduRow('select * from test')
    }catch(error){
        throw console.error();
    }
}
const addOrderss = ({ tableNumber }) => {
    try {
        return fetch('insert into orders (table_id) values ($1)', tableNumber)
    } catch (error) {
        throw console.error();
    }
}

const updateOrders = ({ orderId, tableId, orderPaid }) => {
    try {
        fetch('update orders set table_id = $1 where order_id = $2', tableId, orderId)
        fetch('update orders set order_paid = $1 where order_id = $2', orderPaid, orderId)
    } catch (error) {
        throw console.error();
    }
}

const deleteOrder = ({ tableId }) => {
    console.log(tableId);
    try {
        return fetch('delete from tables where table_id = $1', tableId)
    } catch (error) {
        throw console.error();
    }
}

export default {
    orders,
    addOrderss,
    updateOrders,
    deleteOrder
}