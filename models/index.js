
const User = require('./User');
const Recipe = require('./Recipe');
// const Painting = require('./Painting');

// ???
User.hasMany(Recipe, {
  foreignKey:'recipe_id',
  onDelete:'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Recipe };
