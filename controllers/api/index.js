const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const userRecipeRoutes = require('./userRecipeRoutes');
const addRecipeRoutes = require ('./addReceipRoutes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/userRecipe', userRecipeRoutes);
router.use('/addRecipe', addRecipeRoutes);

module.exports = router;
