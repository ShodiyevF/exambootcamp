// News-website

users 
	{ first_name, last_name, email, password, specialist }

languages
	{ lang_name }

categories 
	{ name, lang_id }

news
	{ title, body, time, views, author_id, category_id, lang_id }


REST API
	POST
	registration
	login

	createCategory
		[ name, lang_id ]
	PUT
	updateCategory
		[ category_id, name ]
	DELETE
	deleteCategory
		[ category_id ]

	POST
	createNews
		[ title, body, category_id, author, lang_id ]
	PUT
	updateNews
		[ news_id, title, body, author ]
	DELETE
	deleteNews
		[ news_id ]

	GET
	categories
		{ filter(lang) }

	news
		{ filter(lang, author_id, category_id, newsid), sort(time, title) }

	users




GRAPHQL API


50
50






