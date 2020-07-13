import React from 'react';
import './PokemonListPage.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function PokemonListPage({ pokemonFromParent }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <div className='PokemonListPage-grid'>
        {pokemonFromParent.map(pokemon =>
            <PokemonCard
                key={pokemon._id}
                pokemonFromParent={pokemon}
            />
        )}
      </div>
    </>
  );
}

export default PokemonListPage;