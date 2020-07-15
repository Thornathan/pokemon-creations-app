const BASE_URL = 'https://pokeapi.co/api/v2'

export function getAllPokemonAPI() {
  return fetch(`${BASE_URL}/pokemon`)
  .then(res => res.json())
  .catch(err => err);
}

export function getAllTypeAPI() {
  return fetch(`${BASE_URL}/type`)
  .then(res => res.json())
  .then(pokemonData => pokemonData['results']);
}