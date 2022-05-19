import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div>
      {
        pokemons.map((pokemon, i) => {
          return (
            <Card
              key={pokemon.url.split("/")[6]}
              pokemon={pokemon}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;