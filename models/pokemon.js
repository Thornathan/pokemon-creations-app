var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pokemonSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    type: { type: String, required: true },
    type2: {type: String},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
