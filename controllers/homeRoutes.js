const router = require('express').Router();
const { User } = require('../models');
const Recipe =require ('../models/Recipe');
const withAuth = require('../utils/auth');




// route to get all recipes
router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const recipes = recipeData.map((recipe) => 
      recipe.get({ plain: true })
    );
    console.log(recipes);
    res.render('homepage', {
      recipes
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to get one recipe
router.get('/:id', async (req, res) => {
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


// Use withAuth middleware to prevent access to route
router.get('/api/addRecipe', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    res.render('add-recipe', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User login area
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
