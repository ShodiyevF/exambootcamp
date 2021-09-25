import { createCategories, deleteCategories, updateCategories } from "./model.js";

const createCategoriesCtrl = async (req, res) => {
    try {
        if (await createCategories(req.body)) {
            
            res.json({
                status: 200,
                message: 'the category has been created'
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

const updateCategoriesCtrl = async (req, res) => {
    try {
        if (await updateCategories(req.body)) {

            res.json({
                status: 200,
                message: 'the category has been updated'
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

const deleteCategoriesCtrl = async (req, res) => {
    try {
        if (await deleteCategories(req.body)) {

            res.json({
                status: 200,
                message: 'the category has been deleted'
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
    createCategoriesCtrl,
    updateCategoriesCtrl,
    deleteCategoriesCtrl
}