//MISC
import React, { Component } from 'react';
//COMPONENTS
import {mockPokedex} from '../mockPokedex'
//CSS
import '../CSS/Wtpmon.css'


/**
 * Idea:
 * *Multiple input guesses
 * *For each wrong input show that guess in paragraphs .guess
 * *On button click check if name is correct
 * *If there are 5 wrong guesses, player loses game
 * 
 * 
 * *WILD IDEA: find some confetti burst animation and add it on correct guess
 */
class WTPmon extends Component {
    constructor(){
        super();
        this.state={
            currentPokemon: undefined,
            correctGuess: true,
            tries: 0,
        }
    }
    componentDidMount(){
        let {correctGuess} = this.state;
        if(correctGuess === true){
            var newPokemon = this.getRandomPokemonIndex();
            console.log(`new pokemon index is: ${newPokemon}, getting pokemon number ${newPokemon+1}`)
            this.setState({currentPokemon : mockPokedex.results[newPokemon], correctGuess: false});
        }
    }
    render(){
        let {currentPokemon} = this.state;

        return(
            <>
            <h1>WHO'S THAT POKEMON?</h1>
            <h1>POGODI OVOG </h1>
            {
                currentPokemon !== undefined 
                ? <img className="wtpmon"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.number}.png`} alt="nema sliku"/>
                : <></>
            }
            <p className="guess">samo za primjer pokušaja</p>
            <p className="guess"> </p>
            <p className="guess"></p>
            <p className="guess"></p>
            <p className="guess"></p>
            <input type="text"/>
            </>
        )
    }

    getRandomPokemonIndex = () => {
        return Math.floor(Math.random() * 20)
    }
}

export default WTPmon;