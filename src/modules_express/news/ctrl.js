import { createNews, deleteNews, updateTitleNews, updateBodyNews, updateAuthorNews, updateViewNews, filterNews,sortTitleNews, sortTimeNews} from "./model.js";

const filterNewsCtrl = async (req, res) => {
    try {
        if (await filterNews(req.query)) {
            const data = await filterNews(req.query)
            res.json({
                data: data.rows
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

const sortNewsCtrl = async (req, res) => {
    try {
        if (await sortTimeNews(req.query), await sortTitleNews(req.query)){
            await sortTimeLow(req.query)
            await sortTitleNews(req.query)
            res.json({
                data: await sortTimeLow(req.query)
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

const createNewsCtrl = async (req, res) => {
    try {
        if (await createNews(req.body)) {
            res.json({
                status: 200,
                message: 'the news has been created'
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

const updateNewsCtrl = async (req, res) => {
    try {
        if (await updateTitleNews(req.body), await updateBodyNews(req.body), await updateAuthorNews(req.body), await updateViewNews(req.body)) {

            res.json({
                status: 200,
                message: 'the news has been updated'
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

const deleteNewsCtrl = async (req, res) => {
    try {
        if (await deleteNews(req.body)) {

            res.json({
                status: 200,
                message: 'the news has been deleted'
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
    filterNewsCtrl,
    createNewsCtrl,
    updateNewsCtrl,
    deleteNewsCtrl,
    sortNewsCtrl
}