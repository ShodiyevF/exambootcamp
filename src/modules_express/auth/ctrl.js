import { TOKEN, VERIFY } from "../../lib/jwt.js";
import { LOGIN, REGISTER } from "./model.js";

const REGISTERctrl = async (req, res) => {
    try {
        if (await REGISTER(req.body)) {
            res.json({
                status: 200,
                message: 'user has been registered',
                token: TOKEN({ password: req.body.password }, 'test')
            })
        } else {
            res.json({
                status: 404,
                message: 'somethinks went wrong !'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const LOGINctrl = async (req, res) => {
    try {
        if (await LOGIN(req.body)) {
            
            const test = VERIFY(req.headers.token, 'test')
            if (test.password === req.body.password) {
                res.json({
                    status: 200,
                    message: 'user has been logined'
                })
            }
            
        } else {
            res.json({
                status: 404,
                message: 'somethinks went wrong !'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    REGISTERctrl,
    LOGINctrl
}