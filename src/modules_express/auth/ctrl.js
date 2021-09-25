import { TOKEN, VERIFY } from "../../lib/jwt.js";
// import { registerValidation } from "../../lib/validation.js";
import { LOGIN, REGISTER } from "./model.js";

const REGISTERctrl = async (req, res) => {
    try {
        // let vali = registerValidation.validate(req.body)
        // console.log(vali.error);
        // if (vali.error) {
        // } else{
        if (await REGISTER(req.body)) {
            console.log('aa');
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
        // }
    } catch (error) {
        console.log(error);
    }
}

const LOGINctrl = async (req, res) => {
    try {
        if (await LOGIN(req.body)) {
            
            res.json({
                status: 200,
                message: 'user has been logined'
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

export {
    REGISTERctrl,
    LOGINctrl
}