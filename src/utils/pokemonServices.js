import tokenService from "./tokenService";
const BASE_URL = "/api/pokemon";

export function getAllPokemonAPI() {
  return fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${tokenService.getTokenFromLocalStorage()}`,
    },
  }).then((allPokemon) => allPokemon.json());
}

export function getPokemonDetailAPI(pokemonId) {
  return fetch(`${BASE_URL}/${pokemonId}`, {
    headers: {
      Authorization: `Bearer ${tokenService.getTokenFromLocalStorage()}`,
    },
  }).then((pokemon) => pokemon.json());
}

export function getPokemonByNameAPI(pokemonName) {
  return fetch(`${BASE_URL}/${pokemonName}`, {
    headers: {
      Authorization: `Bearer ${tokenService.getTokenFromLocalStorage()}`,
    },
  }).then((pokemon) => pokemon.json());
}

export function createPokemonAPI(pokemonToCreate) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${tokenService.getTokenFromLocalStorage()}`,
    },
    body: JSON.stringify(pokemonToCreate),
  }).then((newPokemon) => newPokemon.json());
}

export function deletePokemonAPI(pokemonIdToDelete) {
  return fetch(`${BASE_URL}/${pokemonIdToDelete}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokenService.getTokenFromLocalStorage()}`,
    },
  }).then((deletedPokemon) => deletedPokemon.json());
}

export function updatePokemonAPI(pokemonToUpdate) {
  return fetch(`${BASE_URL}/${pokemonToUpdate._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${tokenService.getTokenFromLocalStorage()}`,
    },
    body: JSON.stringify(pokemonToUpdate),
  }).then((updatedPokemon) => updatedPokemon.json());
}
