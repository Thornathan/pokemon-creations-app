import React from "react";
import ImageUploader from "react-images-upload";
import "./AddPokemonPage.css";

class AddPokemonPage extends React.Component {
  constructor(props) {
    super(props);
    /*--- State ---*/
    this.state = {
      formData: {
        name: "",
        type: "",
        type2: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        specialAttack: "",
        specialDefense: "",
        eggGroup: "",
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
            <label>Pokemon's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
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
            <label>Pokémon's HP</label>
            <input
              className="form-control"
              name="hp"
              value={this.state.formData.hp}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Attack</label>
            <input
              className="form-control"
              name="attack"
              value={this.state.formData.attack}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Defense</label>
            <input
              className="form-control"
              name="defense"
              value={this.state.formData.defense}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Speed</label>
            <input
              className="form-control"
              name="speed"
              value={this.state.formData.speed}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Special Attack</label>
            <input
              className="form-control"
              name="specialAttack"
              value={this.state.formData.specialAttack}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pokémon's Special Defense</label>
            <input
              className="form-control"
              name="specialDefense"
              value={this.state.formData.specialDefense}
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
