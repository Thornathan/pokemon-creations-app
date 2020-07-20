var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pokemonSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    // TODO: Adding a picture, incorporate at a later date
    // pictures: {type: File},
    type: { type: String },
    type2: { type: String },
    hp: { type: String },
    attack: { type: String },
    defense: { type: String },
    speed: { type: String },
    specialAttack: { type: String },
    specialDefense: { type: String },
    pokemonIndex: { type: String },
    description: { type: String },
    height: { type: String },
    weight: { type: String },
    eggGroup: { type: String },
    catchRate: { type: String },
    abilities: { type: String },
    genderRatioMale: { type: String },
    genderRatioFemale: { type: String },
    evs: { type: String },
    hatchSteps: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
