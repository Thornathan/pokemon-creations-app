var express = require('express');
var router = express.Router();
var pokemonCtrl = require('../../controllers/api/pokemon');

router.get('/', pokemonCtrl.index);
router.post('/', pokemonCtrl.create);
router.put('/:id', pokemonCtrl.update);
router.delete('/:id', pokemonCtrl.delete);

module.exports = router;