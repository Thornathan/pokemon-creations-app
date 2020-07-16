import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import PokemonListPage from "../PokemonListPage/PokemonListPage";
import AddPokemonPage from "../AddPokemonPage/AddPokemonPage";
import EditPokemonPage from "../EditPokemonPage/EditPokemonPage";
import * as pokemonAPI from "../../utils/pokemonApi";
import * as pokemonService from "../../utils/pokemonServices";

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

  handleAddPokemon = async newPokemonData => {
    await pokemonService.createPokemonAPI(newPokemonData);
    this.getAllPokemon();
  };

  handleDeletePokemon = async idOfPokemonToDelete => {
    await pokemonService.deletePokemonAPI(idOfPokemonToDelete);
    this.setState(
      (state) => ({
        pokemon: state.pokemon.filter(
          (pokemon) => pokemon._id !== idOfPokemonToDelete
        ),
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdatePokemon = async updatedPokemonData => {
    await pokemonService.updatePokemonAPI(updatedPokemonData);
    this.getAllPokemon();
  };

  getAllPokemon = async () => {
    const pokemon = await pokemonService.getAllPokemonAPI();
    this.setState({
      pokemon
    }, () => this.props.history.push('/'));
  }

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
