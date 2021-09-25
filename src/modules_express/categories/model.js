import { addRow, rduRow } from "../../lib/pool.js"

const createCategoryQuery = `
insert into categories (categories_name, languages_id) values ($1, $2)
`

const updateCategoryQuery = `
update categories set categories_name = $1 where categories_id = $2
`

const deleteCategoryQuery = `
delete from categories where categories_id = $1
`

const createCategories = async ({ cate_name, lang_id }) => {
    try {
        return await addRow(createCategoryQuery, cate_name, lang_id)
    } catch (error) {
        console.log(error);
    }
}

const updateCategories = async ({ cate_name, cate_id }) => {
    try {
        return await addRow(updateCategoryQuery, cate_name, cate_id)
    } catch (error) {
        console.log(error);
    }
}

const deleteCategories = async ({ cate_id }) => {
    try {
        return await addRow(deleteCategoryQuery, cate_id)
    } catch (error) {
        console.log(error);
    }
}

export {
    createCategories,
    updateCategories,
    deleteCategories
}