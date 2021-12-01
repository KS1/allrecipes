const router = require('express').Router();
const Recipe = require('../../models/Recipe');



// get one recipe by its id
router.get('/:id', async (req, res) => {
  const recipeData = await Recipe.findByPk(req.params.id)
  const recipe = recipeData.get({ plain: true })
  res.render('recipe', {
    recipe, logged_in: req.session.logged_in,
    username: req.session.username
  })

});

// delete one recipe by its id
router.delete ('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({where: {id:req.params.id}})
    res.render('account-recipe', {logged_in: req.session.logged_in,
      username: req.session.username}) 

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }

})

module.exports = router;

