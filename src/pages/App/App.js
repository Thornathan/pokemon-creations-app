import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import PokemonListPage from "../PokemonListPage/PokemonListPage";
import AddPokemonPage from "../AddPokemonPage/AddPokemonPage";
import EditPokemonPage from "../EditPokemonPage/EditPokemonPage";
import * as pokemonAPI from "../../utils/pokemonApi";

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
    types: [],
    apiPokemon: [],
  };

  handleAddPokemon = (newPokemonData) => {
    newPokemonData._id = this.state.pokemon.length + 1;
    this.setState(
      {
        pokemon: [...this.state.pokemon, newPokemonData],
      },
      () => this.props.history.push("/")
    );
  };

  handleDeletePokemon = (idOfPokemonToDelete) => {
    this.setState(
      (state) => ({
        pokemon: state.pokemon.filter(
          (pokemon) => pokemon._id !== idOfPokemonToDelete
        ),
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdatePokemon = (updatedPokemonData) => {
    const updatedPokemon = this.state.pokemon.map((pokemon) => {
      if (pokemon._id === updatedPokemonData._id) {
        pokemon = updatedPokemonData;
      }
      return pokemon;
    });
    this.setState(
      {
        pokemon: updatedPokemon,
      },
      () => this.props.history.push("/")
    );
  };

  async componentDidMount() {
    const typesFromAPI = await pokemonAPI.getAllTypeAPI();
    const pokemonFromAPI = await pokemonAPI.getAllPokemonAPI();
    this.setState({
      types: typesFromAPI,
      pokemons: pokemonFromAPI,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Pokemon Creations
          <nav>
            <>
              &nbsp;&nbsp;&nbsp;
              <NavLink exact to="/">
                POKEMON LIST
              </NavLink>
              &nbsp;&nbsp;&nbsp;
              <NavLink exact to="/add">
                ADD POKEMON
              </NavLink>
            </>
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={({ history }) => (
                <PokemonListPage
                  pokemonFromParent={this.state.pokemon}
                  handleDeletePokemon={this.handleDeletePokemon}
                />
              )}
            />
            <Route
              exact
              path="/add"
              render={() => (
                <AddPokemonPage
                  handleAddPokemon={this.handleAddPokemon}
                  typesFromParent={this.state.types}
                />
              )}
            />
            <Route
              exact
              path="/edit"
              render={({ history, location }) => (
                <EditPokemonPage
                  handleUpdatePokemon={this.handleUpdatePokemon}
                  location={location}
                  typesFromParent={this.state.types}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
