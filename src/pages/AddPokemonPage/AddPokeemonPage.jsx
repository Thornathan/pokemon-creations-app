import React, { Component } from "react";

class AddPokemonPage extends Component {
  state = {
    formData: {
      name: "",
      type: "",
    },
  };
  render() {
    return (
      <>
        <h1>Add Pokemon</h1>
        <form>
          <div className="form-group">
            <label>Pokemon's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              required
            />
          </div>
          <div className="form-group">
            <label>Pokemon's Type (required)</label>
            <input
              className="form-control"
              name="type"
              value={this.state.formData.type}
              required
            />
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
