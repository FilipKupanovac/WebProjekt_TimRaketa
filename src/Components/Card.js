//MISC
import React, { Component } from 'react'
//Components

//CSS
import '../CSS/Card.css'

/** TODO
 * 
 * ADD STYLING TO THE CARD IN CARD.CSS FILE
 * 
 * MAKE THIS COMPONENT A CLASS AND ASSIGN TYPES ACCORDINGLY AT TOP RIGHT CORNER
 */

/* const Card = ({ pokemon }) => {
    
} */

class Card extends Component {

  constructor(props){
    super(props)
    this.state = {
      pokemon : this.props.pokemon,
      areas : []
    }
  }

  componentDidMount(){
    //#region FETCHING AREAS
    //TO FETCH POKEMON'S ENCOUNTER AREAS, USE THIS CHUNK OF CODE
    //idea: use expanded view when pokemon is clicked to show detailed info about it
    var {areas,pokemon} = this.state
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.number}/encounters`)
      .then(resp => resp.json())
      .then(resp => {
        //eslint-disable-next-line
        areas = resp.filter(area =>{
          var foundEncounterArea = false;
          area.version_details.forEach(element => {
            if(element.version.name === 'firered')
              foundEncounterArea = true;
          });
          if(foundEncounterArea === true){
            return area;
          }
          
        })
        this.setState({areas : areas})
      })
      //#endregion
  }

  render(){
    var {pokemon} = this.state;
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'
        onClick={() => {this.logEncounterAreas()}}
      >
        <img alt={ pokemon.name } src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.number }.png`} />
        {/* THIS IS WITH OFFICIAL ARTWORK - CHOOSE WHICH ONE YOU LIKE MORE*/
        <img className="official-artwork" 
          alt={ pokemon.name } src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png`} /> }
        <div>
          <h2>{ pokemon.name }</h2>
          <p>{ pokemon.number }</p>
        </div>
      </div>
    );
  }

  logEncounterAreas = () => {
    /**
     * JUST FOR EXAMPLE, INSTEAD OF THIS, EXPAND VIEW FOR SPECIFIC POKEMON 
     */ 
    var {areas} = this.state;
    console.log(this.state.pokemon.name + " can be encountered at")
    console.log("these areas:\n ")
    console.log(areas)
  }
}

export default Card