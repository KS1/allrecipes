const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const userRecipeRoutes = require('./userRecipeRoutes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/userRecipe', userRecipeRoutes);

module.exports = router;
