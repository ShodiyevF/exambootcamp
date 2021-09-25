const getNewsUNIQ = `
select
n.news_title
from news as n where n.languages_id = $1 and n.author_id = $2 and  n.categories_id = $3 and n.news_id = $4;
`

// GETS

const createNewsQuery = `
insert into news (news_title, news_body, author_id, news_views, categories_id, languages_id) values ($1, $2, $3, 0, $4, $5)
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

const filter = `
select
*
from news
where
case
WHEN $1 > 0 THEN  languages_id = $1
ELSE true
end and
case
WHEN $2 > 0 THEN  author_id = $2
ELSE true
end and
case
WHEN $3 >  0 THEN  categories_id = $3
ELSE true
end and
case
WHEN $4 >  0 THEN  news_id = $4
ELSE true
end
`

const sortTimeLow = `
select
*
from news as n
order by n.news_time asc;
`

const sortTimeHigh = `
select
*
from news as n
order by n.news_time desc;
`

const sortTitleLow = `
select
*
from news as n
order by n.news_title asc;
`

const sortTitleHigh = `
select
*
from news as n
order by n.news_title desc;
`

export {
    createNewsQuery,
    updateNewsTitleQuery,
    updateNewsBodyQuery,
    updateNewsAuthorQuery,
    deleteNewsQuery,
    getNewsUNIQ,
    filter,
    sortTimeLow,
    sortTimeHigh,
    sortTitleLow,
    sortTitleHigh
}