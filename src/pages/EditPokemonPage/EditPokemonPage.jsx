import React, { Component } from "react";
import { Link } from "react-router-dom";

//TODO: implement checking database for pokemon
// import { getPokemonByNameAPI } from "../../utils/pokemonServices";

class EditPokemonPage extends Component {
  state = {
    formData: this.props.location.state.clickedOnPokemon,
  };

  /*--- Handle Methods ---*/

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.formData.name)
      this.setState({
        error: `Missing Name`,
      });
    else if (!this.state.formData.type && !this.state.formData.type2)
      this.setState({
        error: "Missing Type",
      });
    else this.props.handleUpdatePokemon(this.state.formData);
  };

  removeErrorMessage = () => {
    this.setState({
      error: "",
    });
  };

  /*--- Lifecycle Methods ---*/

  typesFromAPI = () => {
    return this.props.typesFromParent
      .sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      .map((type, idx) => (
        <option
          key={idx}
          value={type.name}
          defaultValue={type.name === this.state.formData.type}
        >
          {type.name.toUpperCase()}
        </option>
      ));
  };

  eggGroupsFromAPI = () => {
    return this.props.eggGroups
      .sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      .map((eggGroup, idx) => (
        <option
          key={idx}
          value={eggGroup.name}
          defaultValue={eggGroup.name === this.state.formData.eggGroup}
        >
          {eggGroup.name.toUpperCase()}
        </option>
      ));
  };

  abilitiesFromAPI = () => {
    return this.props.abilities
      .sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      .map((ability, idx) => (
        <option
          key={idx}
          value={ability.name}
          defaultValue={ability.name === this.state.formData.abilities}
        >
          {ability.name.toUpperCase()}
        </option>
      ));
  };

  render() {
    return (
      <>
        <div className="pokemon-form-bg">
          <h1>Edit Pokémon</h1>
          {this.state.error && (
            <div className="create-pokemon-error">
              {this.state.error}
              <button
                className="error-remove-btn"
                onClick={this.removeErrorMessage}
              >
                X
              </button>
            </div>
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <h3>Info</h3>
                <div className="form-group">
                  <label> Name (required)</label>
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Enter A Name"
                    value={this.state.formData.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    className="form-control"
                    name="description"
                    placeholder="Enter A Description"
                    value={this.state.formData.description}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Type(s) (only one required)</label>
                  <select
                    className="form-control"
                    name="type"
                    value={this.state.formData.type}
                    onChange={this.handleChange}
                  >
                    <option>Choose a Type</option>
                    {this.typesFromAPI()}
                  </select>
                  <select
                    className="form-control"
                    name="type2"
                    value={this.state.formData.type2}
                    onChange={this.handleChange}
                  >
                    <option>Choose a Type</option>
                    {this.typesFromAPI()}
                  </select>
                </div>
                <div className="form-group">
                  <label> Abilities</label>
                  <select
                    className="form-control"
                    name="ability1"
                    value={this.state.formData.ability1}
                    onChange={this.handleChange}
                  >
                    <option>Choose Abilities</option>
                    {this.abilitiesFromAPI()}
                  </select>
                  <select
                    className="form-control"
                    name="ability2"
                    value={this.state.formData.ability2}
                    onChange={this.handleChange}
                  >
                    <option>Choose Abilities</option>
                    {this.abilitiesFromAPI()}
                  </select>
                  <select
                    className="form-control"
                    name="ability3"
                    value={this.state.formData.ability3}
                    onChange={this.handleChange}
                  >
                    <option>Choose Abilities</option>
                    {this.abilitiesFromAPI()}
                  </select>
                </div>

                <div className="form-group">
                  <label> Female Ratio</label>
                  <select
                    className="form-control"
                    name="femaleRatio"
                    value={this.state.formData.femaleRatio}
                    onChange={this.handleChange}
                  >
                    <option value="-1">0 (No Females)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4 (Half Male/Female)</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="">8 (All Females)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label> Height (ft)</label>
                  <input
                    className="form-control"
                    name="height"
                    placeholder="Enter A Height ex. 6.3=6'3"
                    value={this.state.formData.height}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Weight (lbs)</label>
                  <input
                    className="form-control"
                    name="weight"
                    placeholder="Enter A Weight ex.(100.30)"
                    value={this.state.formData.weight}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    className="form-control"
                    name="imageURL"
                    placeholder=""
                    value={this.state.formData.imageURL}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3>Stats</h3>
                <div className="form-group">
                  <label> HP</label>
                  <input
                    className="form-control"
                    name="hp"
                    placeholder="Enter Hp Stat"
                    value={this.state.formData.hp}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Attack</label>
                  <input
                    className="form-control"
                    name="attack"
                    placeholder="Enter Attack Stat"
                    value={this.state.formData.attack}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Defense</label>
                  <input
                    className="form-control"
                    name="defense"
                    placeholder="Enter Defense Stat"
                    value={this.state.formData.defense}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Speed</label>
                  <input
                    className="form-control"
                    name="speed"
                    placeholder="Enter Speed Stat"
                    value={this.state.formData.speed}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Special Attack</label>
                  <input
                    className="form-control"
                    name="specialAttack"
                    placeholder="Enter Special Attack Stat"
                    value={this.state.formData.specialAttack}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Special Defense</label>
                  <input
                    className="form-control"
                    name="specialDefense"
                    placeholder="Enter Special Defense Stat"
                    value={this.state.formData.specialDefense}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Effort Values</label>
                  <input
                    className="form-control"
                    name="evs"
                    placeholder="Enter as: 1 Hp, 3 Special Attack, etc."
                    value={this.state.formData.evs}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Egg Group</label>
                  <select
                    className="form-control"
                    name="eggGroup"
                    value={this.state.formData.eggGroup}
                    onChange={this.handleChange}
                  >
                    <option>Choose an Egg Group</option>
                    {this.eggGroupsFromAPI()}
                  </select>
                </div>
                <div className="form-group">
                  <label> Catch Rate </label>
                  <input
                    className="form-control"
                    name="catchRate"
                    placeholder="Enter Catch Rate - (1-255)"
                    value={this.state.formData.catchRate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Hatch Steps</label>
                  <input
                    className="form-control"
                    name="hatchSteps"
                    placeholder="Enter Hatch Steps - (1-120)"
                    value={this.state.formData.hatchSteps}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="center">
              <button type="submit" className="btn btn-xs">
                Save Pokémon
              </button>
            </div>
            <Link to="/">CANCEL</Link>
          </form>
        </div>
      </>
    );
  }
}

export default EditPokemonPage;
