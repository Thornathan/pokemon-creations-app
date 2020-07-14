var express = require('express');
var router = express.Router();
var pokemonCtrl = require('../../controllers/api/pokemon');

router.get('/', pokemonCtrl.index);

module.exports = router;