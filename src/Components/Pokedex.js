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
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      favorites: [],
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

    fetch(`${serverBaseURL}/get-favorites/${this.props.username}`)
      .then((resp) =>
        resp.json()
      )
      .then((resp) => {
        console.log(resp);
        let tempArray = this.handleFavoritesResponse(resp.favorites)
        this.setState({ favorites: tempArray });
      });
  }

  updateFavorites = (newFavorites) => {
    this.setState({favorites: newFavorites})
  }

  handleFavoritesResponse = (responseString) => {
    return responseString.split(",")
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
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
    let { pickedId, pokedex, favorites } = this.state;
    let { signedIn } = this.props;
    return (
      <div className="tc">
        <h1 className="f1">Pokédex</h1>
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
            signedIn={signedIn}
            username={this.props.username}
            isFavorite={favorites?.includes(pickedId) ? true : false}
            updateFavorites={this.updateFavorites}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Pokedex