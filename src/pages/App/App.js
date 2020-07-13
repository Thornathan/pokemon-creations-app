import React, { Component } from "react";
import "./App.css";
import PokemonListPage from "../PokemonListPage/PokemonListPage";
import AddPokemonPage from "../AddPokemonPage/AddPokemonPage";

class App extends Component {
  state = {
    pokemon: [
      {
        _id: 1,
        name: "Charmander",
        type: "Fire",
      },
      {
        _id: 2,
        name: "Charmeleon",
        type: "Fire",
      },
      {
        _id: 3,
        name: "Charizard",
        type: "Fire/Flying",
      },
    ],
  };

  handleAddPokemon = newPokemonData => {
    newPokemonData._id = this.state.pokemon.length + 1;
    this.setState({
      pokemon: [...this.state.pokemon, newPokemonData]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Pokemon Creations</header>
        <main>
          <PokemonListPage pokemonFromParent={this.state.pokemon} />
          <AddPokemonPage handleAddPokemon={this.handleAddPokemon}/>
        </main>
      </div>
    );
  }
}

export default App;
