import React, { Component } from 'react'
//COMPONENTS
import CardList from './CardList';
import { serverBaseURL } from '../serverBaseURL'
import SearchBox from './SearchBox';
import DetailsCard from './DetailsCard';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchfield: "",
            pokedex: [],
            pickedId: undefined,
            username: this.props.username,
            favorites: [],
            favoritesID: []
        }
    }
    componentDidMount() {
        this.initUI()
    }

    initUI = () => {
        fetch(`${serverBaseURL}/get-favorites/${this.props.username}`)
            .then(async (resp) => await resp.json())
            .then((resp) => {
                if (resp.favorites !== "undefined") {
                    let tempArray = this.handleFavoritesResponse(resp.favorites)
                    fetch(`${serverBaseURL}/pokedex/`)
                        .then(async (resp) => await resp.json())
                        .then((resp) => {
                            let allPokemons = resp
                            var finalTempArray = []
                            tempArray.forEach(element => {
                                finalTempArray.push(resp[element - 1])
                            })
                            this.setState({ favorites: finalTempArray, pokedex: allPokemons, favoritesID: tempArray })
                        });
                }
            });
    }

    handleFavoritesResponse = (responseString) => {
        return responseString?.split(",")
    }

    extractNumberFromPokemon = (pokemon) => {
        var tempArray = pokemon.url.split("/")
        return tempArray[6]
    }

    pickPokemon = (pokeNumber) => {
        this.setState({ pickedId: pokeNumber });
    };

    updateFavorites = (newFavorites) => {
        var { pokedex } = this.state
        this.setState({ favoritesID: newFavorites, pickedId: undefined })
        var tempArray = []
        newFavorites.forEach(element => {
            tempArray.push(pokedex[element - 1])
        })
        this.setState({ favorites: tempArray })
        console.log(tempArray);
    }

    render() {
        let { pickedId, favorites, favoritesID, pokedex } = this.state;
        let { signedIn } = this.props;
        return (
            <div className="tc">
                <h1 className="f1">Your favorite Pokémon</h1>
                {favoritesID !== "undefined" && favorites.length === 0
                    ? <h3>You have no favorite pokemon.</h3>
                    : <SearchBox searchChange={this.onSearchChange} />}
                <CardList
                    pokemons={favorites}
                    pickedId={pickedId}
                    pickPokemon={this.pickPokemon}
                />
                <hr></hr>
                {pickedId !== undefined ? (
                    <DetailsCard
                        key={pickedId}
                        id={pickedId}
                        pokemon={pokedex[pickedId - 1]}
                        signedIn={signedIn}
                        username={this.props.username}
                        isFavorite={favoritesID.includes(pickedId)}
                        updateFavorites={this.updateFavorites}
                    />
                ) : (
                    <></>
                )}
            </div>
        );
    }

}

export default Favorites;