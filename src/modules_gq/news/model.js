import { rduRow, addRow } from '../../lib/pool.js'
import { createNewsQuery, updateNewsTitleQuery, updateNewsBodyQuery, updateNewsAuthorQuery, deleteNewsQuery, getNewsUNIQ } from "./query.js"

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

const createNews = async ({ title, body, category_id, author, language_id }) => {
    try {
        return await addRow(createNewsQuery, title, body, category_id, author, language_id)
    } catch (error) {
        console.log(error);
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


export default {
    createNews,
    updateTitleNews,
    updateBodyNews,
    updateViewNews,
    updateAuthorNews,
    deleteNews
}