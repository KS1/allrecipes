const router = require('express').Router();
const Recipe = require('../../models/Recipe');



// get one recipe by its id
router.get('/recipe/:id', async (req, res) => {
  return res.render('recipe', recipes[req.params.num - 1]);
});


module.exports = router;
