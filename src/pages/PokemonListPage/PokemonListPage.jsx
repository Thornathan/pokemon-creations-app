import React from "react";
import "./PokemonListPage.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

function PokemonListPage({ pokemon, handleDeletePokemon }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <div className="PokemonListPage-grid">
        {pokemon ? pokemon.map((p) => (
          <PokemonCard
            key={p._id}
            pokemonFromParent={p}
            handleDeletePokemon={handleDeletePokemon}
          />
        )) : 'no pokemon'}
      </div>
    </>
  );
}

export default PokemonListPage;
