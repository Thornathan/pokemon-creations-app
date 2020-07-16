const Pokemon = require('../../models/pokemon');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne,
};

// index
async function index(req, res) {
    try{
        const pokemon = await Pokemon.find({user: req.user._id}).populate('user');
        res.status(200).json(pokemon);
    }
    catch(err){
        res.status(500).json(err);
    }
}

// create
async function create(req, res) {
    try{
        const newPokemon = await Pokemon.create(req.body);
        res.status(201).json(newPokemon);
    }
    catch(err){
        res.status(500).json(err);
    }
}

// update
async function update(req, res) {
    try{
        const updatedPokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedPokemon);
    }
    catch(err){
        res.status(500).json(err);
    }
}

// delete
async function deleteOne(req, res) {
    try{
        const deletedPokemon = await Pokemon.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedPokemon);
    }
    catch(err){
        res.status(500).json(err);
    }
}