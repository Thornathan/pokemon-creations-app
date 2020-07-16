var express = require('express');
var router = express.Router();
var pokemonCtrl = require('../../controllers/api/pokemon');

router.get('/',checkAuth, pokemonCtrl.index);
router.post('/',checkAuth, pokemonCtrl.create);
router.put('/:id',checkAuth, pokemonCtrl.update);
router.delete('/:id',checkAuth, pokemonCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;