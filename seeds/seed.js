const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const userRecipeData = require('./userRecipeData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();


function addRecipe(req, res) {
  
}