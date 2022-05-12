import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div>
      {
        pokemons.map((pokemon, i) => {
          return (
            <Card
              key={i}
              pokemon={pokemon}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;