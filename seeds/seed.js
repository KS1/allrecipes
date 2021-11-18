const sequelize = require('../config/connection');
const { User } = require('../models');
const { Recipe } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');


const stringified = recipeData.map(recipe => {
  recipe.ingredients = JSON.stringify(recipe.ingredients);
  recipe.directions = JSON.stringify(recipe.directions);
  return recipe;
  });
  console.log(stringified)


const seedDatabase = async () => {
  try {

 
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  await Recipe.bulkCreate(stringified, {
    individualHooks: true,
    returning: true,
  });
  


  process.exit(0);
} catch (err) {
  console.log(err)
}
};

seedDatabase();

