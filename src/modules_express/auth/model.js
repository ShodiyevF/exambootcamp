import { addRow, rduRow } from "../../lib/pool.js"

const loginQuery = `
select
*
from users as u
where u.email = $1 AND u.password = $2

`

const REGISTER = async ({ first_name, last_name, password, email, specialist}) => {
    try {
        return await addRow('insert into users (first_name, last_name, password, email, specialist) values ($1, $2, $3, $4, $5)', first_name, last_name, password, email, specialist)
    } catch (error) {
        console.log(error);
    }
}

const LOGIN = async ({ email, password  }) => {
    try {
        const test = await addRow(loginQuery, email, password)
        return await test
    } catch (error) {
        console.log(error);
    }
}

// REGISTER({
//     first_name: 'fayzulloh',
//     last_name: 'shodiyev',
//     password: 'f3616757Sh$',
//     email: 'fayzulloh6757@gmail.com',
//     specialist: 'programist'
// })

export {
    REGISTER,
    LOGIN
}