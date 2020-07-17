import React from "react";

function ApiPokemonCard({ pokemonFromParent }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{pokemonFromParent.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          
        </dl>
      </div>
      <div className="panel-footer">
        
      </div>
    </div>
  );
}

export default ApiPokemonCard;
