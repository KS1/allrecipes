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

router.delete ('/:id', async (req, res) => {
  const recipeData = await Recipe.destroy({where: {id:req.params.id}})
  res.render('account-recipe', {logged_in: req.session.logged_in,
    username: req.session.username}) 
})

module.exports = router;
