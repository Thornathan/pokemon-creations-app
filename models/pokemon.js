var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pokemonSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
