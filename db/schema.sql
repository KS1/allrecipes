DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;
-- USE recipe_db;
-- CREATE TABLE recipe (
--     recipe_id INT(10) NOT NULL PRIMARY KEY,
--     dishName VARCHAR(255) NOT NULL, 
--     chef VARCHAR (255), 
--     prepTime VARCHAR(255), 
--     nutrition_facts VARCHAR(255), 
--     dishDesc VARCHAR(500), 
--     ingredients VARCHAR(500), 
--     directions TEXT
    
-- );

-- CREATE TABLE user (
--     userID INT(10) NOT NULL PRIMARY KEY,
--     userName VARCHAR(255) NOT NULL,
--     userPassword VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE user_recipe (
--     userRecipeId INT(10) NOT NULL,
--     user_id INT(10) NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES user(userID)ON DELETE CASCADE
-- );
