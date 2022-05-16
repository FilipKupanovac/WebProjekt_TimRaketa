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
              id={i+1}
              pokemon={pokemon}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;