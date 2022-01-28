CREATE DATABASE perntest;

CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   name VARCHAR(20),
   email VARCHAR(50),
   message VARCHAR(255)
);