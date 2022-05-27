/* import React, { Component } from 'react';
import Card from './Card';
import DetailsCard from './DetailsCard';


class CardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredPokemons: this.props.pokemons,
      clickedPokemon: 'bulbasaur'
    }
  }

  render() {
    var { filteredPokemons } = this.state
    console.log(filteredPokemons);

    return (
      <div>
        {
          filteredPokemons.map((pokemon, i) => {
            return (
              pokemon === this.state.clickedPokemon
                ?
                <DetailsCard
                  key={pokemon.url.split("/")[6]}
                  pokemon={pokemon}
                />
                :
                <Card
                  key={pokemon.url.split("/")[6]}
                  pokemon={pokemon}
                  onClick={this.setState({ clickedPokemon: pokemon })}
                />
            );
          })
        }
      </div>
    )
  }
}

export default CardList; */

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
              id={pokemon.url.split("/")[6]}
              pokemon={pokemon}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;