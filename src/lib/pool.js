import pg from 'pg'
import {pgConfig} from '../config.js'


const pool = new pg.Pool(pgConfig)

const addRow = async (query, ...arr) => {

    const client = await pool.connect()
    const data = await client.query(query, arr)
    client.release()
    return data
    
}

const rduRow = async (query) => {
    
    const client = await pool.connect()
    const data = await client.query(query)
    client.release()
    return data.rows

}

export {
    addRow,
    rduRow
}