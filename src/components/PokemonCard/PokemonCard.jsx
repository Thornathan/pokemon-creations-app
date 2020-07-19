import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PokemonCard({ pokemonFromParent, handleDeletePokemon }) {


  const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

  const ownerText = () => {
    let result = "";
    result = pokemonFromParent.user.name
      ? `${pokemonFromParent.user.name
          .charAt(0)
          .toUpperCase()}${pokemonFromParent.user.name.slice(1)}`
      : "No Owner";
    return <dd>{result}</dd>;
  };

  const pokemonTypes = () => {
    let result = "";
    result = pokemonFromParent.type
      ? `${pokemonFromParent.type[0].toUpperCase()}${pokemonFromParent.type.slice(
          1
        )}/`
      : "";
    result =
      result.length > 1 && !pokemonFromParent.type2
        ? result.slice(0, -1)
        : result;
    result = pokemonFromParent.type2
      ? `${result}${pokemonFromParent.type2[0].toUpperCase()}${pokemonFromParent.type2.slice(
          1
        )}`
      : `${result}`;
    return <dd>{result}</dd>;
  };

  return (
    <div className="col-md-3 col-sm-6 mb-5">

      <div className="card">
        <h3 className="card-header">{pokemonFromParent.name}</h3>
      
      <div className="card-body mx-auto">
        <dl>
          <dt>Owner</dt>
          {ownerText()}
          <dt>Type</dt>
          {pokemonTypes()}
        </dl>
      </div>
      <div className="card-footer">
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
    </div>
  );
}

export default PokemonCard;
