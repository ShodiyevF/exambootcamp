import express from "express";
import { LOGINctrl, REGISTERctrl } from "./ctrl.js";

const router = express.Router()

router.post('/auth/registration', REGISTERctrl)
router.post('/auth/login', LOGINctrl)

export default router;