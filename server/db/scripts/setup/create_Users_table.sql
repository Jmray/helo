CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(50),
    profile_image text
);