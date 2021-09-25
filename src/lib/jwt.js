import jwt from 'jsonwebtoken'

const TOKEN = (payload, aa) => jwt.sign(payload, aa)
const VERIFY = (payload, secret_key) => jwt.verify(payload, secret_key)

export {
    TOKEN,
    VERIFY
}