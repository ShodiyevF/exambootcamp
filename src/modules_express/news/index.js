import express from "express";
import { createNewsCtrl, updateNewsCtrl, deleteNewsCtrl, filterNewsCtrl, sortNewsCtrl } from "./ctrl.js";

const router = express.Router()

router.route('/news')
    .get(filterNewsCtrl)
    .get(sortNewsCtrl)
    .post(createNewsCtrl)
    .put(updateNewsCtrl)
    .delete(deleteNewsCtrl)

export default router