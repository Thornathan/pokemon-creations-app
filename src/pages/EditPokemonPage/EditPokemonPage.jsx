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
            <input
              className="form-control"
              name="type"
              value={this.state.formData.type}
              onChange={this.handleChange}
              required
            />
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
