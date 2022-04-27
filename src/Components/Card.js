//MISC
import React from 'react'
//Components

//CSS
import '../CSS/Card.css'

/** TODO
 * 
 * ADD STYLING TO THE CARD IN CARD.CSS FILE
 * 
 */

const Card = ({ key, pokemon }) => {
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt={ pokemon.name } src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.number }.png`} />
        <div>
          <h2>{ pokemon.name }</h2>
          <p>{ pokemon.number }</p>
        </div>
      </div>
    );
  }

export default Card