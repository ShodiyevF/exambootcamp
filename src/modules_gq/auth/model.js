import { rduRow, addRow } from '../../lib/pool.js'

const loginQuery = `
select
*
from users as u
where u.email = $1 AND u.password = $2

`

const register = ({ firstName, lastName, password, email, specialist }) => {
    try {
        return addRow('insert into users (first_name, last_name, password, email, specialist) values ($1, $2, $3, $4, $5)', firstName, lastName, password, email, specialist)
    } catch (error) {
        console.log('aaaaaa');
        res.json({
            message: 'There is an error',
            status: 404
        })
    }
}

const LOGIN = async ({ email, password }) => {
    console.log(email);
    try {
        const test = await addRow(loginQuery, email, password)
        // console.log(test.rows);
        return await test.rows
    } catch (error) {
        console.log(error);
    }
}

export default {
    register,
    LOGIN
}