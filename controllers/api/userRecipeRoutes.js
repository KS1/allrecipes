const router = require('express').Router();
const Recipe = require('../../models/Recipe');


// route to get one recipe
router.get('/userRecipe/:id', async (req, res) => {
    try{ 
        const recipeData = await Recipe.findByPk(req.params.id);
        if(!recipeData) {
            res.status(404).json({message: 'No recipe with this id!'});
            return;
        }
        const recipe = recipeData.get({ plain: true });
        res.render('recipe', recipe);
      } catch (err) {
          res.status(500).json(err);
      };     
  });


  module.exports = router;