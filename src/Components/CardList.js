//MISC
import React from 'react';
//Components
import Card from './Card';

const CardList = ({ pokemons, pickedId, pickPokemon }) => {
  return (
    <div>
      {
        pokemons.map((pokemon, i) => {
          let isPicked = (pokemon.url.split("/")[6] === pickedId)
          return (
            <Card
              key={pokemon.url.split("/")[6]}
              id={pokemon.url.split("/")[6]}
              pokemon={pokemon}
              pickPokemon={pickPokemon}
              isPicked={isPicked}
            />
          )
        })
      }
    </div>
  );
}

export default CardList;