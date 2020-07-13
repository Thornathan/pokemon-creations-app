import React from 'react';

function PokemonCard({ pokemonFromParent }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{pokemonFromParent.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Type</dt>
                    <dd>{pokemonFromParent.type}</dd>
            
                </dl>
            </div>
        </div>
    )
}

export default PokemonCard;