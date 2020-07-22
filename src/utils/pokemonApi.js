const BASE_URL = "https://pokeapi.co/api/v2";

export function getAllTypeAPI() {
  return fetch(`${BASE_URL}/type`)
    .then((res) => res.json())
    .then((pokemonData) => pokemonData["results"]);
}

export function getAllEggGroupsAPI() {
  return fetch(`${BASE_URL}/egg-group`)
    .then((res) => res.json())
    .then((pokemonData) => pokemonData["results"]);
}

export function getAllAbilitiesAPI() {
  return fetch(`${BASE_URL}/ability?limit=293`)
    .then((res) => res.json())
    .then((pokemonData) => pokemonData["results"]);
}
