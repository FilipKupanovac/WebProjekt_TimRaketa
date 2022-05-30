//MISC
import React, { Component } from 'react'
//Components

//CSS
import '../CSS/DetailsCard.css'

/** TODO
 * 
 * ADD STYLING TO THE CARD IN CARD.CSS FILE
 * 
 * ASSIGN TYPES ACCORDINGLY AT TOP RIGHT CORNER
 */

class DetailsCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemon: this.props.pokemon,
      id: this.props.id,
      isFavorite: this.props.isFavorite,
      evolutionChain: [],
      areas: [],
      types: []
    }
  }

  componentDidMount() {
    //TO FETCH POKEMON'S ENCOUNTER AREAS, USE THIS CHUNK OF CODE
    //idea: use expanded view when pokemon is clicked to show detailed info about it
    var { areas, id, pokemon } = this.state
    this.setState({ id: this.extractNumberFromPokemon(pokemon) })

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
      .then(resp => resp.json())
      .then(resp => {
        //eslint-disable-next-line
        areas = resp.filter(area => {
          var foundEncounterArea = false;
          area.version_details.forEach(element => {
            if (element.version.name === 'firered')
              foundEncounterArea = true;
          });
          if (foundEncounterArea === true) {
            return area;
          }

        })
        this.setState({ areas: areas })
      })

    //get pokemon types
    fetch(pokemon.url)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ types: resp.types })
      })

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(resp => resp.json())
      .then(resp => {
        fetch(resp.evolution_chain.url)
          .then(resp => resp.json())
          .then(resp => {
            // tempEvolutions.push(resp.chain.species.url.split("/")[6])
            var temp = this.fillEvolutionChain(resp.chain).filter((value) => {
              return value > 0 && value < 152
            })
            this.setState({ evolutionChain: temp })
          })
      })
  }


  render() {
    var { pokemon, id, areas, types, isFavorite, evolutionChain } = this.state;
    console.log(evolutionChain);
    return (
      <div className='tc bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 card detailed'>
        {/* <h2>#{id} {this.capitalizeFirstLetter(pokemon.name)}</h2> */}
        <div className="info-container">
          <div className="icon-container">
            <img src={
              isFavorite ? "https://cdn-icons-png.flaticon.com/512/1828/1828614.png"
                : "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
            }
              alt='star'
              className='favorite-icon'
              onClick={this.toggleIsFavorite}
            />
          </div>
          <div className="icon-container">
            <h2>#{id} {this.capitalizeFirstLetter(pokemon.name)}</h2>
          </div>
          <div className="icon-container types">
            {
              types.map((type, i) => {
                return (
                  <img
                    key={i}
                    src={this.handleTypesDisplay(type)}
                    className="pokemon-type-icon"
                    alt={type.type.name}
                  ></img>
                )
              })
            }
          </div>
        </div>
        <div className='main-container'>
          <div>
            {
              <img className="official-artwork-detailed"
                alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
            }

          </div>
          <div>
            {
              evolutionChain.length === 1
                ? <></>
                : <h5>Evolution tree:</h5>
            }
            {
              evolutionChain.length === 1
                ? <></>
                : evolutionChain.map((pokemonID, i) => {
                  return (
                    <img className="evolution-tree-official-artwork"
                      key={i}
                      alt={pokemonID} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`} />

                  )
                })
            }
          </div>
        </div>
        <div>
          {areas.length
            ? <h5>Can be caught at: </h5>
            : <h5>Pokemon cannot be caught in the game.</h5>
          }
          {
            areas.map((location, i) => {
              return (
                <p key={i}>{this.prepareLocationNameForRender(location.location_area.name)}</p>
              )
            })
          }
        </div>
      </div>
    );
  }


  fillEvolutionChain = (chain) => {
    var currentPokemon = [chain.species.url.split("/")[6]]
    if (chain.evolves_to.length === 0) {
      return [chain.species.url.split("/")[6]]
    } else if (chain.evolves_to.length === 1) {
      return currentPokemon.concat(this.fillEvolutionChain(chain.evolves_to[0]))
    } else {
      for (var i = 0; i < chain.evolves_to.length; i++) {
        currentPokemon = currentPokemon.concat(this.fillEvolutionChain(chain.evolves_to[i]))
      }
      return currentPokemon
    }
  }

  toggleIsFavorite = () => {
    var { isFavorite } = this.state
    this.setState({ isFavorite: isFavorite ? false : true })
  }

  prepareLocationNameForRender = (locationName) => {
    var splitLocationName = locationName.split("-")
    var capitalizedSplitLocationName = splitLocationName.map(word => {
      return this.capitalizeFirstLetter(word)
    })
    return capitalizedSplitLocationName.join(" ")
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  extractNumberFromPokemon = (pokemon) => {
    var tempArray = pokemon.url.split("/")
    return tempArray[6]
  }

  handleTypesDisplay = (type) => {
    switch (type.type.name) {
      case "bug":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/1920px-Pok%C3%A9mon_Bug_Type_Icon.svg.png"
      case "dragon":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1920px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png"
      case "electric":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1920px-Pok%C3%A9mon_Electric_Type_Icon.svg.png"
      case "fairy":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1920px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"
      case "fighting":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/1920px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png"
      case "fire":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1920px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
      case "flying":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/1920px-Pok%C3%A9mon_Flying_Type_Icon.svg.png"
      case "ghost":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1920px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png"
      case "grass":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1920px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"
      case "ground":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/1920px-Pok%C3%A9mon_Ground_Type_Icon.svg.png"
      case "ice":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/1920px-Pok%C3%A9mon_Ice_Type_Icon.svg.png"
      case "normal":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1920px-Pok%C3%A9mon_Normal_Type_Icon.svg.png"
      case "poison":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1920px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"
      case "psychic":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/1920px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png"
      case "rock":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1920px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
      case "steel":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1920px-Pok%C3%A9mon_Steel_Type_Icon.svg.png"
      case "water":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1920px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
      case "dark":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1920px-Pok%C3%A9mon_Dark_Type_Icon.svg.png"
      default:
      // code block
    }
  }

}

export default DetailsCard;