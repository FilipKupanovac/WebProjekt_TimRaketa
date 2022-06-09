//MISC
import React, { Component } from 'react';
//COMPONENTS
//CSS
import '../CSS/Wtpmon.css'
//IMGs
import pokeball_open from '../pictures/pokeball-open.png'
import pokeball_closed from '../pictures/pokeball-closed.png'

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
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.getRandomPokemonIndex()}`)
            .then(resp => resp.json())
            .then(resp => {
                //eslint-disable-next-line
                this.setState({
                    currentPokemon: resp,
                    guesses: [],
                    correctGuess: false,
                    firstLetterRevealed: false,
                    lettersNumberRevealed: false,
                    typeRevealed: false
                });
            })

        this.enableInput();

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
            <div className="tc fireworks-container">
              <h1>WHO'S THAT POKEMON?</h1>
              {correctGuess ? (
                <div className="animate three">
                  <span>C</span>
                  <span>o</span>
                  <span>n</span>
                  <span>g</span>
                  <span>r</span>
                  <span>a</span>
                  <span>t</span>
                  <span>u</span>
                  <span>l</span>
                  <span>a</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                  <span>s</span>
                  <span>!</span>
                </div>
              ) : guesses.length === 5 ? (
                <p>Better luck next time!</p>
              ) : (
                <div id="congrats-container"></div>
              )}
              {currentPokemon !== undefined ? (
                <img
                  className={
                    correctGuess ? "wtpmon" : "wtpmon pokemon-image-black"
                  }
                  id="pokemonImage"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
                  alt="nema sliku"
                />
              ) : (
                <></>
              )}
              <div className="flexi wtpmon-helper">
                {firstLetterRevealed ? (
                  <>
                    <img
                      className="wtpmon-joker"
                      src={`${pokeball_open}`}
                      alt="pokeball-open"
                    ></img>
                    <p>
                      First letter: {currentPokemon.name.toUpperCase().at(0)}
                    </p>
                  </>
                ) : (
                  <button
                    className="no-underline  bg-animate hover-bg-green inline-flex items-center ma2 tc br2 pa2"
                    onClick={this.showFirstLetter}
                  >
                    <img
                      className="wtpmon-joker"
                      src={`${pokeball_closed}`}
                      alt="pokeball-closed"
                    ></img>
                    Show first letter
                  </button>
                )}
              </div>

              <div className="flexi wtpmon-helper">
                {lettersNumberRevealed ? (
                  <>
                    <img
                      className="wtpmon-joker"
                      src={`${pokeball_open}`}
                      alt="pokeball-open"
                    ></img>
                    <p>Letters number: {currentPokemon.name.length}</p>
                  </>
                ) : (
                  <button
                    className="no-underline  bg-animate hover-bg-green inline-flex items-center ma2 tc br2 pa2"
                    onClick={this.showLettersNumber}
                  >
                    <img
                      className="wtpmon-joker"
                      src={`${pokeball_closed}`}
                      alt="pokeball-closed"
                    ></img>
                    Show letters number
                  </button>
                )}
              </div>

              <div>
                {currentPokemon !== undefined ? (
                  <div>
                    <p
                      className={
                        guesses.at(0) === undefined
                          ? "guess"
                          : guesses.at(0) ===
                            this.capitalizeFirstLetter(currentPokemon.name)
                          ? "guess-correct"
                          : "guess-incorrect"
                      }
                    >
                      {guesses.at(0)}
                    </p>
                    <p
                      className={
                        guesses.at(1) === undefined
                          ? "guess"
                          : guesses.at(1) ===
                            this.capitalizeFirstLetter(currentPokemon.name)
                          ? "guess-correct"
                          : "guess-incorrect"
                      }
                    >
                      {guesses.at(1)}
                    </p>
                    <p
                      className={
                        guesses.at(2) === undefined
                          ? "guess"
                          : guesses.at(2) ===
                            this.capitalizeFirstLetter(currentPokemon.name)
                          ? "guess-correct"
                          : "guess-incorrect"
                      }
                    >
                      {guesses.at(2)}
                    </p>
                    <p
                      className={
                        guesses.at(3) === undefined
                          ? "guess"
                          : guesses.at(3) ===
                            this.capitalizeFirstLetter(currentPokemon.name)
                          ? "guess-correct"
                          : "guess-incorrect"
                      }
                    >
                      {guesses.at(3)}
                    </p>
                    <p
                      className={
                        guesses.at(4) === undefined
                          ? "guess"
                          : guesses.at(4) ===
                            this.capitalizeFirstLetter(currentPokemon.name)
                          ? "guess-correct"
                          : "guess-incorrect"
                      }
                    >
                      {guesses.at(4)}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <form
                onSubmit={this.handleSubmit}
                id="inputForm"
                autoComplete="off"
              >
                <input type="text" id="guess" placeholder="Guess" />
              </form>

              {correctGuess || guesses.length > 4 ? (
                <button
                  className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
                  onClick={this.startNewGame}
                >
                  Start new game?
                </button>
              ) : (
                <></>
              )}
            </div>
          </>
        );
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
        this.disableInput()
        if (isCorrect) {
            this.setState({ correctGuess: true })
        }
    }

    resetInputForm = () => {
        document.getElementById("inputForm").reset();
    }

    getRandomPokemonIndex = () => {
        return Math.floor(Math.random() * 151)
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