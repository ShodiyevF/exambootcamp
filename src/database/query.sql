select
*
from users as u
where u.email = 'fayzu@gmail.com' AND u.password = 'f777777Sh$';


select 
    n.news_title
from news as n where n.languages_id = 1;

select 
    n.news_title
from news as n where n.author_id = 1;

select 
    n.news_title
from news as n where n.categories_id = 3;

select 
    n.news_title
from news as n where n.news_id = 2;
-- inner join languages as l on l.languages_id = n.languages_id;