//image of map, on hover show info about hovered part of map
//info content: area name, area contents-gyms,markets,etc.

//MISC
import React, {Component} from 'react'
//Components

//CSS
import '../CSS/Map.css'

class Map extends Component {
    render(){
        return(
            <>
                <h1>Map</h1>
                <div id="map-holder">
                    {/* <img id="map"
                        src="https://i.imgur.com/y5U6bmY.jpg" alt='ubaci mapu kanto regije'/> */}
                    <div className="map-area"></div>
                </div>

                <hr/>
            </>
        )
    }
}

export default Map