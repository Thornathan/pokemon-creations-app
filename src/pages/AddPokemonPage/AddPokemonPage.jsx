import React from "react";
// import ImageUploader from "react-images-upload";
import "./AddPokemonPage.css";

class AddPokemonPage extends React.Component {
  constructor(props) {
    super(props);
    /*--- State ---*/
    this.state = {
      formData: {
        name: "",
        description: '',
        type: "",
        type2: "",
        ability1: '',
        ability2: '',
        ability3: '',
        eggGroup: "",
        femaleRatio: '',
        height: '',
        weight: '',
        catchRate: '',
        hatchSteps: '',
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        specialAttack: "",
        specialDefense: "",
        evs: '',
        pictures: [],
      },
    };
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(picture) {
    this.setState({
      pictures: this.state.formData.pictures.concat(picture),
    });
  }

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
    return this.props.eggGroups.sort(function (a, b) {
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
  }

  abilitiesFromAPI = () => {
    return this.props.abilities.sort(function (a, b) {
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
  }

  /*--- Handle Methods ---*/

  handleChange = (e) => {
    const formDataAsUserTypes = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData: formDataAsUserTypes,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddPokemon(this.state.formData);
  };

  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div className="create-pokemon-bg">
        <h1>Create A Pokémon</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Pokemon's Name</label>
            <input
              className="form-control"
              name="name"
              placeholder="Enter A Name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
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
              required
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Type(s) (only one required)</label>
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
            <label>Pokémon's Abilities (Choose up to 3)</label>
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
            <label>Pokémon's Egg Group</label>
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
            <label>Pokémon's Hatch Steps</label>
            <input
              className="form-control"
              name="hatchSteps"
              placeholder="Enter Hatch Steps -- Range: (1-120)"
              value={this.state.formData.hatchSteps}
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label>Pokémon's Female Ratio</label>
            <select
              className="form-control"
              name="femaleRatio"
              value={this.state.formData.femaleRatio}
              onChange={this.handleChange}
              >
              <option value='-1'>0 (No Females)</option>
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
            <label>Pokémon's Height (ft)</label>
            <input
              className="form-control"
              name="height"
              placeholder="Enter A Height"
              value={this.state.formData.height}
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label>Pokémon's Weight (lbs)</label>
            <input
              className="form-control"
              name="weight"
              placeholder="Enter A Weight"
              value={this.state.formData.weight}
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label>Pokémon's Catch Rate (Max 254 = 100% Catch Rate)</label>
            <input
              className="form-control"
              name="catchRate"
              placeholder="Enter Catch Rate -- Range: 1(0%) - 255(100%)"
              value={this.state.formData.catchRate}
              onChange={this.handleChange}
              />
          </div>
          <h3>Pokemon Stat's</h3>
          <div className="form-group">
            <label>Pokémon's HP</label>
            <input
              className="form-control"
              name="hp"
              placeholder="Enter Hp Stat"
              value={this.state.formData.hp}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Attack</label>
            <input
              className="form-control"
              name="attack"
              placeholder="Enter Attack Stat"
              value={this.state.formData.attack}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Defense</label>
            <input
              className="form-control"
              name="defense"
              placeholder="Enter Defense Stat"
              value={this.state.formData.defense}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Speed</label>
            <input
              className="form-control"
              name="speed"
              placeholder="Enter Speed Stat"
              value={this.state.formData.speed}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Special Attack</label>
            <input
              className="form-control"
              name="specialAttack"
              placeholder="Enter Special Attack Stat"
              value={this.state.formData.specialAttack}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Special Defense</label>
            <input
              className="form-control"
              name="specialDefense"
              placeholder="Enter Special Defense Stat"
              value={this.state.formData.specialDefense}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Effort Values</label>
            <input
              className="form-control"
              name="evs"
              placeholder="Enter as: 1 Hp, 3 Special Attack, etc."
              value={this.state.formData.evs}
              onChange={this.handleChange}
            />
          </div>
          
          {
          // TODO: Implementing the Image Upload
          /* <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          /> */}

          <button type="submit" className="btn">
            Add Pokémon
          </button>
        </form>
      </div>
    );
  }
}

export default AddPokemonPage;
