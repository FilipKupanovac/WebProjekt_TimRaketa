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

class Pokedex extends Component {

    constructor() {
        super();
        this.state = {
            pokedex: [],
            haveRendered: false,
            searchfield: '',
            //ADED
            pickedId: undefined
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({ pokedex: resp.results })
            })

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
    }

    filterPokemons = () => {
        const { pokedex, searchfield } = this.state;

        return pokedex.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    }

    pickPokemon = (pokeNumber) => {
        this.setState({pickedId: pokeNumber})

        console.log(`PICKED POKEMON IS NOW ${pokeNumber}`)
    }

    render() {
        return (
            <div className='tc'>
                <h1 className='f1'>Pokémon</h1>
                <SearchBox searchChange={this.onSearchChange} />
                {/* <Scroll> */}
                    <CardList 
                        pokemons={this.filterPokemons()} 
                        pickedId={this.state.pickedId} 
                        pickPokemon={this.pickPokemon}
                    />
                {/* </Scroll> */}
            </div>
        )
    }
}

export default Pokedex