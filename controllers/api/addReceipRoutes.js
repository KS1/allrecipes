const router = require('express').Router();
const Recipe = require('../../models/Recipe');

const withAuth = require('../../utils/auth');


// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newRecipe = await Recipe.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newRecipe);
//   } catch (err) {
//     console.log(err)
//     res.status(400).json(err);
//   }
// });



// route to create/add a recipe  who is the chef? user.id-> user.name?
router.post('/',  withAuth, async (req, res) => {
    try {
      console.log(req.body, "text")
      const recipeData = await Recipe.create({
        chef: req.body.chefName,
        dish: req.body.dish,
        dishDesc: req.body.dishDesc,
        prepTime: req.body.prepTime,
        ingredients: req.body.ingredients,
        directions1: req.body.directions1,
        directions2: req.body.directions2,
        directions3: req.body.directions3,
        directions4: req.body.directions4,
        nutrition_facts: req.body.nutrition_facts,
        user_id: parseInt(req.body.idName),
        dishPic: "/images/broiling-potato-haloumi.webp"
      });
          // console.log(recipeData, 'the data')
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  

  module.exports = router;