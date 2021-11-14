const router = require('express').Router();
const Recipe = require('../models/Recipe');
// Here is where we provide hardcoded data to render dynamically
// const dishes = [
//   {
//     dish: 'French Bread with Brie Cheese',
//     ingredients: ["French baguette with warm brie"],
//     directions:["step1, step2, step3"],
//     nutrition_facts:"good for you"
//   },
//   {
//     dish_name: 'Cheese Plate with Spanish Chorizo',
//     description:
//       'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
//   },
//   {
//     dish_name: 'Fish Tacos',
//     description:
//       'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
//   },
//   {
//     dish_name: 'Tropical Fruit Salad',
//     description: 'Guava, papaya, pineapple, mango, and star fruit',
//   },
//   {
//     dish_name: 'Pork Gyoza',
//     description:
//       'Homemade japanese dumplings stuffed with a pork and green onion filling',
//   },
//   {
//     dish_name: 'Yebeg Tibs with Injera Bread',
//     description:
//       'Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
//   },
//   {
//     dish_name: 'Cape Malay Curry',
//     description: 'Chicken and vegitable curry dish with basmati rice',
//   },
// ];


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
router.post('/add-recipe/', async (req, res) => {
  try {
    const recipeData = await Recipe.create({
      dish: req.body.dish,
      description: req.body.description,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      nutrition_facts: req.body.nutrition_facts,
      filename: req.body.filename
    });
    res.status(200).json(dishData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // route to delete a recipe
  router.delete('/account-recipe/:id', async (req, res) => {
    try {
      const recipeData = await Recipe.destroy({
        where: {
          id: req.params.id,
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
  });

// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/account-recipe/:id', async (req, res) => {
  // It is sending the data to the Model so that one recipe can be updated with new data in the database.
  try {
    const recipe = await Recipe.update(
      {
        dish: req.body.dish,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        nutrition_facts: req.body.nutrition_facts,
        filename: req.body.filename
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // If the database is updated successfully, what happens to the updated data below?
    // The updated data (dish) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
