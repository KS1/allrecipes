const router = require('express').Router();
const { User } = require('../models');
const Recipe = require('../models/Recipe');
const withAuth = require('../utils/auth');


// router.post('/signup', async (req, res) => {
//   try {
//     console.log(req, 'signup in homeRoutes.js')
//     const userDate = await User.create ({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//     })

//     res.render('account-recipe', {logged_in:true, username: req.body.name})

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// })

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
    const recipeLarge = recipes.splice(0,2)
    const recipeSmall = recipes
    console.log(recipeLarge)
    console.log(recipeSmall)
    if (req.session.logged_in) {
      res.render('homepage', {
        recipeLarge, recipeSmall,
        logged_in: req.session.logged_in,
        username: req.session.username
      });
    } else {
      res.render('homepage', {
        recipeLarge, recipeSmall
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to get one recipe
router.get('/recipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    if (!recipeData) {
      res.status(404).json({ message: 'No recipe with this id!' });
      return;
    }
    const recipe = recipeData.get({ plain: true });
    res.render('recipe', recipe);
  } catch (err) {
    res.status(500).json(err);
  };
});


// Use withAuth middleware to prevent access to route
router.get('/add-recipe', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });
    const username = user.name.split(' ').join('');
    res.render('add-recipe', {
      ...user,
      username: username,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/signup', (req, res) => {
  if (req.session.signed_up) {
    res.redirect('/account-recipe');
    return;
  }
  res.render('signup');
});


router.get('/account-recipe', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const recipeData = await Recipe.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: [
          {
            model: User,
            attributes: ['name'],
          }
        ]
      })
      // console.log(recipeData.length, 'the lenght of the data')
      if (recipeData.length === 0) {
        console.log('there is no data, but here is the user name', req.session.username)
        res.render('account-recipe', {
          logged_in: true,
          username: req.session.username
        })
        return;
      }
      // console.log(recipeData, 'the data')
      const recipes = recipeData.map((recipe) =>
        recipe.get({ plain: true })
      );

      res.render('account-recipe', {
        recipes,
        logged_in: req.session.logged_in,
        username: req.session.username
      });
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// User login area
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/account-recipe');
    return;
  }

  res.render('login');
});


module.exports = router;
