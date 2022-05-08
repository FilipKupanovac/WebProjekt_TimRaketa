//image of map, on hover show info about hovered part of map
//info content: area name, area contents-gyms,markets,etc.

//MISC
import React, {Component} from 'react'
import {kantoAreas} from '../kantoAreaNames'
//Components
import MapArea from './MapArea'
//CSS
import '../CSS/Map.css'
import '../CSS/kanto_grid_areas.css'

class Map extends Component {
    render(){
        return(
            <>
                <h1>Map</h1>
                <div id="map-holder">
                <div id="position-container">
                    <div id="filler"></div>

        <div id="grid-container">
            {
                kantoAreas.areas.map(
                    (area, i) => {
                        return(
                            <MapArea i={i} area={area} key={i}/>
                    )}
                )
            }
        </div>

                </div>
                </div>
                <hr/>
            </>
        )
    }
}

export default Map