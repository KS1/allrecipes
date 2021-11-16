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

// Recipe area??
router.get('/:id', (req, res) => {
  //get recipe by its id
  res.render("recipe", {
    directions: ["A", "B", "C", "S"]
  })
})

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

    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to get one recipe
router.get('/recipe/:id', async (req, res) => {
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

// GET all galleries for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findAll({
//       include: [
//         {
//           model: Painting,

//           attributes: ['dishPic', 'description'],

//         },
//       ],
//     });

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );

//     res.render('homepage', {
//       galleries,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
