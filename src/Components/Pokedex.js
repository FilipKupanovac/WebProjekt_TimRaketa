//MISC
import React, { Component } from 'react'
//Components
import CardList from './CardList'
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import DetailsCard from './DetailsCard';
import { serverBaseURL } from '../serverBaseURL';
//CSS
import '../CSS/Pokedex.css'

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokedex: [],
      haveRendered: false,
      searchfield: "",
      pickedId: undefined,
    };
  }

  componentDidMount() {
    fetch(`${serverBaseURL}/pokedex/`)
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({ pokedex: resp });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  filterPokemons = () => {
    const { pokedex, searchfield } = this.state;

    return pokedex.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  };

  pickPokemon = (pokeNumber) => {
    this.setState({ pickedId: pokeNumber });
  };

  render() {
    var { pickedId, pokedex } = this.state;
    return (
      <div className="tc">
        <h1 className="f1">Pokémon</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList
            pokemons={this.filterPokemons()}
            pickedId={pickedId}
            pickPokemon={this.pickPokemon}
          />
        </Scroll>

        {pickedId !== undefined ? (
          <DetailsCard
            key={pickedId}
            id={pickedId}
            pokemon={pokedex[pickedId - 1]}
            //TO BE CHANGED ON DB IMPLEMENTATION
            isFavorite={false}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Pokedex