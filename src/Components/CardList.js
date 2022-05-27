import React, { Component } from 'react';
import Card from './Card';
import DetailsCard from './DetailsCard';


class CardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredPokemons: this.props.pokemons,
      clickedPokemon: undefined
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

export default CardList;