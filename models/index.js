
const User = require('./User');
const Recipe = require('./Recipe');
// const Painting = require('./Painting');

// ?? create userRecipe model?
const UserRecipe = require ('./UserRecipe');
UserRecipe.belongsTo(User, {
  foreignKey: 'recipe_id',
});

module.exports = { User, Recipe };
