import { rduRow, addRow } from '../../lib/pool.js'

const createCategoryQuery = `
insert into categories (categories_name, languages_id) values ($1, $2)
`

const updateCategoryQuery = `
update categories set categories_name = $1 where categories_id = $2
`

const deleteCategoryQuery = `
delete from categories where categories_id = $1
`

const createCategory = ({ category_name, lang_id }) => {
    try {
        return addRow(createCategoryQuery, category_name, lang_id)
    } catch (error) {
        throw console.error();
    }
}

const updateCategories = async ({ category_name, category_id }) => {
    try {
        return await addRow(updateCategoryQuery, category_name, category_id)
    } catch (error) {
        console.log(error);
    }
}

const deleteCategories = async ({ category_id }) => {
    try {
        return await addRow(deleteCategoryQuery, category_id)
    } catch (error) {
        console.log(error);
    }
}


export default {
    createCategory,
    updateCategories,
    deleteCategories
}