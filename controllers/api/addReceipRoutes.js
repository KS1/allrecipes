const router = require('express').Router();
const Recipe = require('../../models/Recipe');

const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get ('/', (req,res) =>{
  res.render('add-recipe')
})


// route to create/add a recipe  who is the chef? user.id-> user.name?
router.post('/', async (req, res) => {
    try {
      const recipeData = await Recipe.create({
        dish: req.body.dish,
        dishDesc: req.body.dishDesc,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        nutrition_facts: req.body.nutrition_facts,
        dishPic: req.body.dishPic
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  

  module.exports = router;