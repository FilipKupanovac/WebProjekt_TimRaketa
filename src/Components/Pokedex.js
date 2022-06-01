//top: filter, searchbar, 
//result: pokemon image, name, evoution tree, possible encounter area, height, weight

//MISC
import React, { Component } from 'react'

//IF YOU DO NOT USE 'EXPORT DEFAULT' AT ORIGIN FILE, YOU MUST WRAP CONST INSIDE CURLY BRACKETS
//import { mockPokedex } from '../mockPokedex'
//Components
import CardList from './CardList'
import SearchBox from './SearchBox';
import Scroll from './Scroll';
//CSS
import '../CSS/Pokedex.css'
import DetailsCard from './DetailsCard';

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
    fetch("http://localhost:3000/pokedex/")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
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