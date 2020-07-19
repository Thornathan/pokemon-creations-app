import React from "react";
import "./PokemonListPage.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

function PokemonListPage({ pokemon, handleDeletePokemon }) {
  return (
    <>
      <h1>My Pokémon Creations</h1>
      <div className="row pokemon-list">
        {pokemon ? pokemon.map((p) => (
          <PokemonCard
            key={p._id}
            pokemonFromParent={p}
            handleDeletePokemon={handleDeletePokemon}
          />
        )) : 'No Pokemon'}
      </div>
    </>
  );
}

export default PokemonListPage;
