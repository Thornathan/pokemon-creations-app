import React from "react";
import { Link } from "react-router-dom";

function PokemonCard({ pokemonFromParent, handleDeletePokemon }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{pokemonFromParent.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Type</dt>
          <dd>{pokemonFromParent.type.toUpperCase()}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/edit",
            state: { clickedOnPokemon: pokemonFromParent },
          }}
        >
          EDIT
        </Link>
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
