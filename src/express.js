import express from "express"
import auth from "./modules_express/auth/index.js"
import cate from "./modules_express/categories/index.js"
const app = express()
app.use(express.json())
app.use(auth)
app.use(cate)



app.listen(4000, console.log('server manimcha http://localhost:4000 da ishlayapti'))