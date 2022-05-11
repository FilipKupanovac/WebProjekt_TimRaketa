//MISC
import React, { Component } from 'react';
//COMPONENTS
import { mockPokedex } from '../mockPokedex'
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
    constructor() {
        super();
        this.state = {
            currentPokemon: undefined,
            guesses: [],
            correctGuess: true,
            firstLetterRevealed: false,
            lettersNumberRevealed: false,
            typeRevealed: false,
        }
    }
    componentDidMount() {
        this.startNewGame()
    }

    startNewGame = () => {
        var newPokemon = this.getRandomPokemonIndex();
        this.enableInput();
        this.setState({
            currentPokemon: mockPokedex.results[newPokemon],
            guesses: [],
            correctGuess: false,
            firstLetterRevealed: false,
            lettersNumberRevealed: false,
            typeRevealed: false
        });
    }

    render() {
        let {
            currentPokemon,
            guesses,
            correctGuess,
            firstLetterRevealed,
            lettersNumberRevealed
        } = this.state;

        return (
            <>
                <div className='tc fireworks-container'>
                    <h1>WHO'S THAT POKEMON?</h1>
                    {correctGuess ? <div class="animate three">
                        <span>C</span><span>o</span><span>n</span><span>g</span><span>r</span><span>a</span><span>t</span><span>u</span><span>l</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span><span>!</span>
                    </div> : <></>}
                    {
                        currentPokemon !== undefined
                            ? <img
                                className={correctGuess ? "wtpmon" : "wtpmon pokemon-image-black"}
                                id="pokemonImage"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.number}.png`}
                                alt="nema sliku" />
                            : <></>
                    }
                    <div>
                        {
                            firstLetterRevealed ? <p>First letter: {currentPokemon.name.toUpperCase().at(0)}</p> : <button className='no-underline  bg-animate hover-bg-green inline-flex items-center ma2 tc br2 pa2' onClick={this.showFirstLetter} >Show first letter</button>
                        }
                    </div>

                    <div>
                        {
                            lettersNumberRevealed ? <p>Letters number: {currentPokemon.name.length}</p> : <button className='no-underline  bg-animate hover-bg-green inline-flex items-center ma2 tc br2 pa2' onClick={this.showLettersNumber} >Show letters number</button>
                        }
                    </div>


                    <p className="guess">{guesses.at(0)}</p>
                    <p className="guess">{guesses.at(1)}</p>
                    <p className="guess">{guesses.at(2)}</p>
                    <p className="guess">{guesses.at(3)}</p>
                    <p className="guess">{guesses.at(4)}</p>

                    <form
                        onSubmit={this.handleSubmit} id="inputForm"
                        autoComplete='off'>
                        <input type="text" id="guess" placeholder="Guess" />
                    </form>

                    {correctGuess || guesses.length > 4 ? <button className='no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2' onClick={this.startNewGame} >Start new game?</button> : <></>}
                </div>

            </>
        )
    }

    handleSubmit = (event) => {
        let { correctGuess } = this.state
        event.preventDefault();

        var currentGuess = event.target.elements.guess.value.trim()

        if (currentGuess.length < 3 || currentGuess.length > 11 || this.containsSpecialChar()) {
            alert("Invalid input!")
        } else {
            if (!correctGuess) {

                let { guesses } = this.state
                var tempGuesses = guesses

                tempGuesses.push(this.capitalizeFirstLetter(currentGuess.toLowerCase()))

                this.setState({ guesses: tempGuesses })
                this.resetInputForm()
                this.checkForCorrectAnswer()

                if (guesses.length === 5) {
                    this.handleGameOver(false)
                }
            }
        }

    }

    checkForCorrectAnswer = () => {
        let { guesses, currentPokemon } = this.state
        if (guesses.includes(this.capitalizeFirstLetter(currentPokemon.name))) {
            this.handleGameOver(true)
        }
    }

    handleGameOver = (isCorrect) => {
        let { currentPokemon } = this.state
        this.disableInput()
        if (isCorrect) {
            this.setState({ correctGuess: true })
        } else {
            alert(`Incorrect. The answer is ${this.capitalizeFirstLetter(currentPokemon.name)}.`);
        }
    }

    resetInputForm = () => {
        document.getElementById("inputForm").reset();
    }

    getRandomPokemonIndex = () => {
        return Math.floor(Math.random() * 20)
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    disableInput = () => {
        document.getElementById("guess").disabled = true;
    }

    enableInput = () => {
        document.getElementById("guess").disabled = false;
    }

    showFirstLetter = () => {
        this.setState({ firstLetterRevealed: true })
    }

    showLettersNumber = () => {
        this.setState({ lettersNumberRevealed: true })
    }

    containsSpecialChar = (string) => {
        return !/^[a-zA-Z]+$/.test(string)
    }
}

export default WTPmon;