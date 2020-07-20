import React, { Component } from "react";
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
        pictures: [],
      },
    };
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(picture) {
    console.log(this.state);
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
            <label>Pokémon's HP</label>
            <input
              className="form-control"
              name="hp"
              value={this.state.formData.hp}
              onChange={this.handleChange}
            />
          </div>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          <button type="submit" className="btn">
            Add Pokémon
          </button>
        </form>
      </div>
    );
  }
}

export default AddPokemonPage;
