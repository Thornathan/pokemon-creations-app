import React from "react";

import PokemonCreationCard from "../../components/PokemonCreationCard/PokemonCreationCard";

function PokemonListPage({ pokemon, handleDeletePokemon }) {
  return (
    <>
      <h1>My Pokémon Creations</h1>
      <div className="row pokemon-list">
        {pokemon
          ? pokemon.map((p) => (
              <PokemonCreationCard
                key={p._id}
                pokemonFromParent={p}
                handleDeletePokemon={handleDeletePokemon}
              />
            ))
          : "No Pokemon"}
      </div>
    </>
  );
}

export default PokemonListPage;
