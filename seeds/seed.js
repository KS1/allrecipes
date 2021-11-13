const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
<<<<<<< HEAD
//const recipeData = require('./recipeData.json');
=======
const recipeData = require('./recipeData.json');

>>>>>>> 7bfb90ec21ddf801d5c298d3e1704dbf8ae23c4b
const userRecipeData = require('./userRecipeData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // await Recipe.bulkCreate(recipeData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();


function addRecipe(req, res) {
  
}