DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;
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

CREATE TABLE user (
    userID INT(10) NOT NULL,
    userName VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL

);

CREATE TABLE user_recipe (
    userRecipeId INT(10) NOT NULL,
    category VARCHAR(255),
    CONSTRAINT `user_recipe_1`
        FOREIGN KEY (`userID`)
        REFERENCES `users` (`userID`)
)
