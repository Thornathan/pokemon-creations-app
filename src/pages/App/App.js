import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import "./App.css";
import PokemonListPage from "../PokemonListPage/PokemonListPage";
import AddPokemonPage from "../AddPokemonPage/AddPokemonPage";
import EditPokemonPage from "../EditPokemonPage/EditPokemonPage";
import ApiPokemonPageList from "../ApiPokemonListPage/ApiPokemonListPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as pokemonAPI from "../../utils/pokemonApi";
import * as pokemonService from "../../utils/pokemonServices";

class App extends Component {
  state = {
    types: [],
    user: userService.getUser(),
    pokemon: [],
    pokemonList: [],
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }, () => this.props.history.push("/"));
  };

  handleSignupOrLogin = async () => {
    const pokemon = await pokemonService.getAllPokemonAPI();
    const typesFromAPI = await pokemonAPI.getAllTypeAPI();
    const pokemonFromAPI = await pokemonAPI.getAllPokemonAPI();
    this.setState({
      types: typesFromAPI,
      pokemons: pokemonFromAPI,
      pokemon: pokemon,
    });
    this.setState(
      {
        user: userService.getUser(),
      },
      () => {
        this.getAllPokemon();
      }
    );
  };

  handleAddPokemon = async (newPokemonData) => {
    await pokemonService.createPokemonAPI(newPokemonData);
    this.getAllPokemon();
  };

  handleDeletePokemon = async (idOfPokemonToDelete) => {
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

  handleUpdatePokemon = async (updatedPokemonData) => {
    await pokemonService.updatePokemonAPI(updatedPokemonData);
    this.getAllPokemon();
  };

  getAllPokemon = async () => {
    const pokemon = await pokemonService.getAllPokemonAPI();
    this.setState(
      {
        pokemon,
      },
      () => this.props.history.push("/")
    );
  };

  async componentDidMount() {
    const pokemon = await pokemonService.getAllPokemonAPI();
    const typesFromAPI = await pokemonAPI.getAllTypeAPI();
    const pokemonFromAPI = await pokemonAPI.getAllPokemonAPI();
    this.setState({
      types: typesFromAPI,
      pokemonList: pokemonFromAPI,
      pokemon: pokemon,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Pokemon Creations
          <nav>
            {userService.getUser() ? (
              <>
                {userService.getUser().name
                  ? `WELCOME, ${userService.getUser().name.toUpperCase()}`
                  : ""}
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/">
                  Pokemon Creations
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/add">
                  Create A Pokemon
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/api-pokemon">
                  View All Pokemon
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/logout" onClick={this.handleLogout}>
                  LOGOUT
                </NavLink>
              </>
            ) : (
              <>
                <NavLink exact to="/signup">
                  SIGNUP
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/login">
                  LOGIN
                </NavLink>
                &nbsp;&nbsp;&nbsp;
              </>
            )}
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={({ history }) =>
                userService.getUser() ? (
                  <PokemonListPage
                    pokemon={this.state.pokemon}
                    handleDeletePokemon={this.handleDeletePokemon}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/add"
              render={() =>
                userService.getUser() ? (
                  <AddPokemonPage
                    handleAddPokemon={this.handleAddPokemon}
                    typesFromParent={this.state.types}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/edit"
              render={({ history, location }) =>
                userService.getUser() ? (
                  <EditPokemonPage
                    handleUpdatePokemon={this.handleUpdatePokemon}
                    location={location}
                    typesFromParent={this.state.types}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/api-pokemon"
              render={({ history }) => (
                <ApiPokemonPageList
                  history={history}
                  pokemonList={this.state.pokemonList}
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
