const getNewsUNIQ = `
select
    n.news_title
from news as n where n.languages_id = $1 and n.author_id = $2 and  n.categories_id = $3 and n.news_id = $4;
`

// GETS

const createNewsQuery = `
insert into news (news_title, news_body, author_id, categories_id, languages_id) values ($1, $2, $3, $4, $5)
`

const updateNewsTitleQuery = `
update news set news_title = $2 where news_id = $1;
`

const updateNewsBodyQuery = `
update news set news_body = $2 where news_id = $1;
`

const updateNewsAuthorQuery = `
update news set author_id = $2 where news_id = $1;
`

const deleteNewsQuery = `
delete from news where news_id = $1
`

export {
    createNewsQuery,
    updateNewsTitleQuery,
    updateNewsBodyQuery,
    updateNewsAuthorQuery,
    deleteNewsQuery,
    getNewsUNIQ
}