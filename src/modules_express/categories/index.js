import express from "express";
import { createCategoriesCtrl, deleteCategoriesCtrl, updateCategoriesCtrl } from "./ctrl.js";

const router = express.Router()

router.route('/categories')
    .post(createCategoriesCtrl)
    .put(updateCategoriesCtrl)
    .delete(deleteCategoriesCtrl)

export default router