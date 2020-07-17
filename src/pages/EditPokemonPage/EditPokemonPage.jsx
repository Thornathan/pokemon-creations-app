import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditPokemonPage extends Component {
  state = {
    formData: this.props.location.state.clickedOnPokemon,
  };

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
    this.props.handleUpdatePokemon(this.state.formData);
  };

  render() {
    return (
      <>
        <h1>Edit Pokemon</h1>
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
            <label>Pokemon's Type (required)</label>
            <select
              className="form-control"
              name="type"
              value={this.state.formData.type}
              onChange={this.handleChange}
            >
              <option>Choose a Type</option>
              {this.props.typesFromParent
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
                ))}
            </select>
            <select
              className="form-control"
              name="type2"
              value={this.state.formData.type2}
              onChange={this.handleChange}
            >
              <option>Choose a Type</option>
              {this.props.typesFromParent
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
                    defaultValue={type.name === this.state.formData.type2}
                  >
                    {type.name.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <button type="submit" className="btn btn-xs">
            SAVE POKEMON
          </button>
          &nbsp;&nbsp;
          <Link to="/">CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditPokemonPage;
