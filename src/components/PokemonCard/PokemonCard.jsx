import React from "react";
import { Link } from "react-router-dom";

function PokemonCard({ pokemonFromParent, handleDeletePokemon }) {
  console.log(pokemonFromParent);
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{pokemonFromParent.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Owner</dt>
          <dd>{`${pokemonFromParent.user.name
            .charAt(0)
            .toUpperCase()}${pokemonFromParent.user.name.slice(1)}`}</dd>
          <dt>Type</dt>
          {pokemonFromParent.type2 ? (
            <dd>
              {pokemonFromParent.type.charAt(0).toUpperCase()}
              {pokemonFromParent.type.slice(1)}/
              {pokemonFromParent.type2.charAt(0).toUpperCase()}
              {pokemonFromParent.type2.slice(1)}
            </dd>
          ) : (
            <dd>
              {pokemonFromParent.type.charAt(0).toUpperCase()}
              {pokemonFromParent.type.slice(1)}
            </dd>
          )}
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
