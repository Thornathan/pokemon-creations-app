import React from "react";

function PokemonCard({ pokemonFromParent, handleDeletePokemon }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{pokemonFromParent.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Type</dt>
          <dd>{pokemonFromParent.type}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => handleDeletePokemon(pokemonFromParent._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
