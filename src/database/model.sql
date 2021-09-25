create database exam;

drop table if exists users cascade;
create table users(
    user_id int generated always as identity primary key,
    first_name varchar(26) not null,
    last_name varchar(26) not null,
    password varchar(36) not null,
    email varchar(26) UNIQUE not null,
    specialist varchar(36) not null
);

drop table if exists languages cascade;
create table languages(
    languages_id int generated always as identity primary key,
    languages_name varchar(26) not null
);

drop table if exists categories cascade;
create table categories(
    categories_id int generated always as identity primary key,
    categories_name varchar(26) not null,
    languages_id int references languages(languages_id) 
);

drop table if exists news cascade;
create table news(
    news_id int generated always as identity primary key,
    news_title varchar(126) not null,
    news_body text not null,
    news_time timestamptz default current_timestamp, 
    news_views int,
    author_id smallint not null,
    categories_id int not null references categories(categories_id), 
    languages_id int not null references languages(languages_id) 
);


insert into users (first_name, last_name, password, email, specialist) values
('Akbar', 'shavkatov', 'f3616757Sh$', 'akbarov77@gmail.com', 'photogref'),
('Anvar', 'abdurahmonov', '77777777fS$', 'anvar99@gmail.com', 'photogref'),
('abubakr', 'hudoynazarov', '77777777fS$', 'khudoynazarov@gmail.com', 'contentmaker'),
('Abdulhamid', 'shodiyev', '77777777fS$', 'abdulhamid1@gmail.com', 'contentmaker'),
('Abdulatif', 'gulomov', '77777777fS$', 'jone@gmail.com', 'jurnalist');

insert into languages (languages_name) values
('uz'),
('ru'),
('en');

insert into categories (categories_name, languages_id) values
('O''zbekiston', 1),
('Jahon', 1),
('Iqdisot', 1),
('Jamiyat', 1),
('Fan va tehnika', 1),
('Sport', 1),
('Light', 1),
('Business class', 1),
('Audio', 1),
('УЗБЕКИСТАН', 2),
('УЗБЕКИСТАН', 2),
('ОБЩЕСТВО', 2),
('СПОРТ', 2),
('POLITICS', 3),
('SOCIETY', 3),
('BUSINESS', 3),
('TECH', 3),
('CULTURE', 3),
('SPORT', 3),
('TOURISM', 3);