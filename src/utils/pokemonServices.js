const BASE_URL = "/api/pokemon";

export function getAllPokemonAPI() {
  return fetch(BASE_URL).then((allPokemon) => allPokemon.json());
}

export function createPokemonAPI(pokemonToCreate) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(pokemonToCreate),
  }).then((newPokemon) => newPokemon.json());
}

export function deletePokemonAPI(pokemonIdToDelete) {
  return fetch(`${BASE_URL}/${pokemonIdToDelete}`, {
    method: "DELETE",
  }).then((deletedPokemon) => deletedPokemon.json());
}

export function updatePokemonAPI(pokemonToUpdate) {
  return fetch(`${BASE_URL}/${pokemonToUpdate._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(pokemonToUpdate),
  }).then((updatedPokemon) => updatedPokemon.json());
}
