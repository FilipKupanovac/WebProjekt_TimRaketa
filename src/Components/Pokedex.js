//top: filter, searchbar, 
//result: pokemon image, name, evoution tree, possible encounter area, height, weight

//MISC
import React, { Component } from 'react'

//IF YOU DO NOT USE 'EXPORT DEFAULT' AT ORIGIN FILE, YOU MUST WRAP CONST INSIDE CURLY BRACKETS
import { mockPokedex } from '../mockPokedex'
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
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ pokedex: mockPokedex.results })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { pokedex, searchfield } = this.state;
        const filtered = pokedex.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        })


        return (
            <div className='tc'>
                <h1 className='f1'>Pokemon</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList pokemons={filtered} />
                </Scroll>
            </div>

        )
    }
}

export default Pokedex