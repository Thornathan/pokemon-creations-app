import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import "./App.css";
import PokemonListPage from "../PokemonListPage/PokemonListPage";
import AddPokemonPage from "../AddPokemonPage/AddPokemonPage";
import EditPokemonPage from "../EditPokemonPage/EditPokemonPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as pokemonAPI from "../../utils/pokemonApi";
import * as pokemonService from "../../utils/pokemonServices";
import Dashboard from "../../components/layout/Dashboard";
import Pokemon from "../../components/pokeApi/Pokemon";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails"
import Pokeball from "../../pokeball.png";

const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
`;

class App extends Component {
  state = {
    types: [],
    user: userService.getUser(),
    pokemon: [],
    pokemonList: [],
    hoverNavBar: false,
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

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  async componentDidMount() {
    const pokemon = await pokemonService.getAllPokemonAPI();
    const typesFromAPI = await pokemonAPI.getAllTypeAPI();
    const pokemonFromAPI = await pokemonAPI.getAllPokemonAPI();
    window.addEventListener("scroll", this.hoverNavBar.bind(this), true);
    this.setState({
      types: typesFromAPI,
      pokemonList: pokemonFromAPI,
      pokemon: pokemon,
    });
  }

  componentWillUnmount() {
    // Added True To End To LIsten to All Events On Page
    window.removeEventListener("scroll", this.hoverNavBar.bind(this), true);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav
            className="navbar navbar-dark bg-dark fixed-top"
            style={
              this.state.hoverNavBar
                ? {
                    boxShadow:
                      "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    backgroundColor: "#ef5350 !important",
                  }
                : { backgroundColor: "transparent !important" }
            }
          >
            <Branding
              href="/"
              className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
            >
              <div className="logo">
                <Logo src={Pokeball} />
                <h5>P C</h5>
              </div>
            </Branding>
            {userService.getUser() ? (
              <>
                {userService.getUser().name
                  ? `WELCOME, ${userService.getUser().name.toUpperCase()}`
                  : ""}

                <NavLink exact to="/add">
                  Create A Pokémon
                </NavLink>

                <NavLink exact to="/pokemon">
                Pokédex
                </NavLink>

                <NavLink exact to="/logout" onClick={this.handleLogout}>
                  LOGOUT
                </NavLink>
              </>
            ) : (
              <>
                <NavLink exact to="/signup">
                  SIGNUP
                </NavLink>

                <NavLink exact to="/login">
                  LOGIN
                </NavLink>
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
                    component={Dashboard}
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
            <Route exact path="/:id" component={PokemonDetails} />
            <Route exact path="/pokemon" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
