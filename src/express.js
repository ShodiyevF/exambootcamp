import express from "express"
import auth from "./modules_express/auth/index.js"
import cate from "./modules_express/categories/index.js"
import news from "./modules_express/news/index.js"
const app = express()
app.use(express.json())
app.use(auth)
app.use(cate)
app.use(news)



app.listen(4000, console.log('server manimcha http://localhost:4000 da ishlayapti'))