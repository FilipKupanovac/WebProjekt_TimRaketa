//MISC
import React, { Component } from 'react'
//Components

//CSS
import '../CSS/Card.css'

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
       areas: []
     }
   }

   componentDidMount() {
     //#region FETCHING AREAS
     //TO FETCH POKEMON'S ENCOUNTER AREAS, USE THIS CHUNK OF CODE
     //idea: use expanded view when pokemon is clicked to show detailed info about it
     var { areas, id, pokemon } = this.state
     this.setState({id: this.extractNumberFromPokemon(pokemon)})

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
     //#endregion
   }

   render() {
     var { pokemon, id, areas } = this.state;
     return (
       <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 card detailed'
         onClick={() => { this.logEncounterAreas() }}
       >
         {/* <img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} /> */}
         {/* THIS IS WITH OFFICIAL ARTWORK - CHOOSE WHICH ONE YOU LIKE MORE*/
           <img className="official-artwork"
             alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />}
         <div>
           <h2>{ this.capitalizeFirstLetter(pokemon.name) }</h2>
           <h3>#{ id }</h3>
           {/* <p>Can be caught at: { areas }</p> */}
           {
             areas.map((location, i) => {
               return(
                 <p key={i}>{location.location_area.name}</p>
               )
             })
           }
         </div>
       </div>
     );
   }

   logEncounterAreas = () => {
     /**
      * JUST FOR EXAMPLE, INSTEAD OF THIS, EXPAND VIEW FOR SPECIFIC POKEMON 
      */
     var { areas } = this.state;
     console.log(this.state.pokemon.name + " can be encountered at these areas:")
     console.log(areas)
   }

   capitalizeFirstLetter = (string) => {
     return string.charAt(0).toUpperCase() + string.slice(1)
   }

   extractNumberFromPokemon = (pokemon) => {
     var tempArray = pokemon.url.split("/")
     return tempArray[6]
   }
 }

export default DetailsCard;