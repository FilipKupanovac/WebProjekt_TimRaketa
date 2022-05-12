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
    constructor(){
        super();
        this.state = {
            selectedArea : undefined,
        }
    }

    render(){
        let {selectedArea} = this.state;
        return(
            <>
                {selectedArea === undefined 
                    ? <h1>MAP</h1> 
                    : <h1>{selectedArea}</h1>
                }
                <div id="map-holder">
                <div id="position-container">
                    <div id="filler"></div>

        <div id="grid-container">
            {
                kantoAreas.areas.map(
                    (area, i) => {
                        return(
                            <MapArea i={i} area={area} key={i}
                                setLocationOnHover={this.setLocationOnHover}
                                getAreaInfo={this.getAreaInfo}
                            />
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

    setLocationOnHover = (areaName) => {
        this.setState({selectedArea : areaName})
    }

    getAreaInfo = () => {
        console.log("API FETCH CALL");
    }
}

export default Map