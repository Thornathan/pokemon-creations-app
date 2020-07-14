var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pokemonSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
