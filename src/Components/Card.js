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
const Card = ({pokemon}) => {
    return(
        <div className="">
            <h1>{pokemon.name}</h1>
        </div>
    )
}

export default Card