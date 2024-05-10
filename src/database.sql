-- users table
 
CREATE TABLE users (
    user_id serial primary key,
    username varchar(255) unique not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date
);

-- hospitals table
CREATE TABLE hospitals (
    hospital_id serial primary key,
    hospital_name varchar(255) unique not null,
    hospital_location varchar(255) not null,
    hospital_rating float not null,
    estimated_waiting_time time,
    created_at date default current_date
);
