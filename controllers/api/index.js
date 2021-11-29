const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const userRecipeRoutes = require('./userRecipeRoutes');
const addRecipeRoutes = require ('./addReceipRoutes');



router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/user-recipe', userRecipeRoutes);
router.use('/add-recipe', addRecipeRoutes);



module.exports = router;
