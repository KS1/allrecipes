const router = require('express').Router();
const Recipe = require('../../models/Recipe');



// route to get all recipes
router.get('/', async (req, res) => {
  // We find all recipes in the db and set the data equal to recipeData
  const recipeData = await Recipe.findAll().catch((err) => {
    res.json(err);
  });
  // We use map() to iterate over recipeData and then add .get({ plain: true }) each object to serialize it. 
  const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  // We render the template, 'all', passing in recipes, a new array of serialized objects.
  res.render('all', { recipes });
});


// route to create/add a recipe
router.post('/userRecipe/', async (req, res) => {
  try {
    const recipeData = await Recipe.create({
      dish: req.body.dish,
      dishDesc: req.body.dishDesc,
      chef: req.body.chef,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      nutrition_facts: req.body.nutrition_facts,
      dishPic: req.body.dishPic
    });
    res.status(200).json(dishData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to delete a recipe
router.delete('/userRecipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        recipe_id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
})



// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/userRecipe/:id', async (req, res) => {
  // It is sending the data to the Model so that one recipe can be updated with new data in the database.
  try {
    const recipe = await Recipe.update(
      {
        dish: req.body.dish,
        dishDesc: req.body.dishDesc,
        chef: req.body.chef,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        nutrition_facts: req.body.nutrition_facts,
        dishPic: req.body.dishPic
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    // The updated data (dish) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
