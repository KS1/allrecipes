DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;
<<<<<<< HEAD
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
=======

CREATE TABLE recipe (
    recipe_id INT(10) NOT NULL AUTO_INCREMENT,
    dishName VARCHAR(255) NOT NULL, 
    chef VARCHAR (255), 
    prepTime VARCHAR(255), 
    nutrition_facts VARCHAR(255), 
    dishDesc VARCHAR(500), 
    ingredients VARCHAR(500), 
    directions TEXT,
    PRIMARY KEY (`recipe_id`)
);
>>>>>>> 7bfb90ec21ddf801d5c298d3e1704dbf8ae23c4b

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
