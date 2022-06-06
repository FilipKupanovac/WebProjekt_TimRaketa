import React, { Component } from 'react'

//COMPONENTS
import CardList from './CardList';
import { serverBaseURL } from '../serverBaseURL'
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import DetailsCard from './DetailsCard';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchfield: "",
            pokedex: [],
            pickedId: undefined,
            username: this.props.username,
            favorites: []
        }
    }
    componentDidMount() {
        fetch(`${serverBaseURL}/get-favorites/${this.props.username}`)
            .then(async (resp) => await resp.json())
            .then((resp) => {
                let favorites = resp
                let tempArray = this.handleFavoritesResponse(resp.favorites)
                fetch(`${serverBaseURL}/pokedex/`)
                    .then(async (resp) => await resp.json())
                    .then((resp) => {
                        let allPokemons = resp
                        var finalTempArray = []
                        tempArray.forEach(element => {
                            finalTempArray.push(resp[element - 1])
                        })
                        this.setState({ favorites: finalTempArray, pokedex: allPokemons })
                    });
            });
    }

    handleFavoritesResponse = (responseString) => {
        return responseString?.split(",")
    }

    pickPokemon = (pokeNumber) => {
        this.setState({ pickedId: pokeNumber });
    };

    render() {
        let { pickedId, favorites, pokedex } = this.state;
        let { signedIn } = this.props;
        console.log("picked id: " + pickedId);
        console.log("picked id: " + pickedId);
        return (
            <div className="tc">
                <h1 className="f1">Pokémon</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList
                        pokemons={favorites}
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
                    />
                ) : (
                    <></>
                )}
            </div>
        );
    }

}

export default Favorites;