import { rduRow, addRow } from '../../lib/pool.js'
import { createNewsQuery, updateNewsTitleQuery, updateNewsBodyQuery, updateNewsAuthorQuery, deleteNewsQuery, getNewsUNIQ, filter, sortTimeLow, sortTimeHigh, sortTitleLow } from "./query.js"

const readNewsUNIQ = async ({ lang, author_id, category_id, news_id }) => {
    console.log(lang, author_id, category_id, news_id);
    try {
        const tes = await addRow(getNewsUNIQ, lang, author_id, category_id, news_id)
        console.log(tes);
        return tes
    } catch (error) {
        console.log(error);
    }
}

const filterNews = async ({ lang, author_id, category_id, news_id }) => {
    console.log(lang, author_id, category_id, news_id);
    try {
        const tes = await addRow(filter, lang, author_id, category_id, news_id)
        // console.log(tes);
        return tes
    } catch (error) {
        console.log(error);
    }
}

const sortTimeNews = async ({ time }) => {
    try {
        if (time === 'low') {
            const tes = await rduRow(sortTimeLow)
            return tes
        } else if (time === 'high') {
            const tes = await rduRow(sortTimeHigh)
            return tes
        }
    } catch (error) {
        console.log(error);
    }
}

const sortTitleNews = async ({ title }) => {
    try {
        if (title === 'low') {
            const tes = await rduRow(sortTitleLow)
            return tes
        } else if (title === 'high') {
            const tes = await rduRow(sortTimeHigh)
            return tes
        }
    } catch (error) {
        console.log(error);
    }
}

const createNews = async ({ title, body, category_id, author, language_id }) => {
    try {
        return await addRow(createNewsQuery, title, body, category_id, author, language_id)
    } catch (error) {
        if (error) {
            res.json({
                message: 'There is an error',
                status: 404
            })
        }
    }
}

const updateTitleNews = async ({ new_id, title }) => {
    try {
        if (title) {
            return await addRow(updateNewsTitleQuery, new_id, title)
        }
    } catch (error) {
        console.log(error);
    }
}

const updateBodyNews = async ({ new_id, body }) => {
    try {
        if (body) {
            return await addRow(updateNewsBodyQuery, new_id, body)
        }
    } catch (error) {
        console.log(error);
    }
}

const updateAuthorNews = async ({ new_id, author }) => {
    try {
        if (author) {
            return await addRow(updateNewsAuthorQuery, new_id, author)
        }
    } catch (error) {
        console.log(error);
    }
}

const updateViewNews = async ({ new_id, view }) => {
    try {
        if (view === true) {
            return await addRow('update news set news_views = news_views + 1 where news_id = $1', new_id)
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteNews = async ({ new_id }) => {
    try {
        return await addRow(deleteNewsQuery, new_id)
    } catch (error) {
        console.log(error);
    }
}


export {
    createNews,
    updateTitleNews,
    updateBodyNews,
    updateViewNews,
    updateAuthorNews,
    deleteNews,
    filterNews,
    sortTimeNews,
    sortTitleNews
}