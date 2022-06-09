//MISC
import React, { Component } from 'react'
//Components

//CSS
import '../CSS/Card.css'


class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemon: this.props.pokemon,
      id: this.props.id,
      areas: []
    }
  }

  render() {
    var { pokemon, id } = this.state;
    return (
      <div
        className={this.props.isPicked
          ? 'tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 card'
          : 'tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 card'}
        onClick={() => { this.props.pickPokemon(id) }}
      >
        {
          <img className="official-artwork"
            alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
          />
        }
        <div>
          <h2>{this.capitalizeFirstLetter(pokemon.name)}</h2>
          <h3>#{id}</h3>
        </div>
      </div>
    );
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  extractNumberFromPokemon = (pokemon) => {
    var tempArray = pokemon.url.split("/")
    return tempArray[6]
  }
}

export default Card;