import React, { Component } from "react";
import "./AddPokemonPage.css";

class AddPokemonPage extends Component {
  /*--- State ---*/

  state = {
    formData: {
      name: "",
      type: "",
      type2: "",
    },
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
      <>
        <h1>Add Pokemon</h1>
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
            <label>Pokemon's Type(s) (only one required)</label>
            <select
              className="form-control"
              name="type"
              value={this.state.formData.type}
              onChange={this.handleChange}
            >
              <option>Choose a Type</option>
              {this.props.typesFromParent.sort(function(a,b) {
                if(a.name < b.name) {return -1;}
                if(a.name > b.name) {return 1; }
                return 0;
                }).map((type, idx) => (
                <option key={idx} value={type.name} defaultValue={type.name === this.state.formData.type}>
                  {type.name.toUpperCase()}
                </option>
              ))}
            </select>
            <select
              className="form-control"
              name="type2"
              value={this.state.formData.type2}
              onChange={this.handleChange}
            >
              <option>Choose a Type</option>
              {this.props.typesFromParent.sort(function(a,b) {
                if(a.name < b.name) {return -1;}
                if(a.name > b.name) {return 1; }
                return 0;
                }).map((type, idx) => (
                <option key={idx} value={type.name} defaultValue={type.name === this.state.formData.type2}>
                  {type.name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn">
            ADD POKEMON
          </button>
        </form>
      </>
    );
  }
}

export default AddPokemonPage;
