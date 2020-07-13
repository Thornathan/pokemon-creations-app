import React from "react";
import "./PokemonListPage.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

function PokemonListPage({ pokemonFromParent, handleDeletePokemon }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <div className="PokemonListPage-grid">
        {pokemonFromParent.map((pokemon) => (
          <PokemonCard
            key={pokemon._id}
            pokemonFromParent={pokemon}
            handleDeletePokemon={handleDeletePokemon}
          />
        ))}
      </div>
    </>
  );
}

export default PokemonListPage;
