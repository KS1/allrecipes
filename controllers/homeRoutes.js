const router = require('express').Router();
const { User } = require('../models');
const Recipe =require ('../models/Recipe');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// route to get all recipes
router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['recipe_id', 'description'],
        },
      ],
    });

    const recipes = recipeData.map((recipe) =>
      recipe.get({ plain: true })
    );

    res.render('/', {
      recipes,
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

module.exports = router;


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
