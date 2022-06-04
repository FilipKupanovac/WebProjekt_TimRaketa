//image of map, on hover show info about hovered part of map
//info content: area name, area contents-gyms,markets,etc.

//MISC
import React, { Component } from 'react'
import { kantoAreas } from '../kantoAreaNames'
//Components
import MapArea from './MapArea'
//CSS
import '../CSS/Map.css'
import '../CSS/kanto_grid_areas.css'

class Map extends Component {
    constructor() {
        super();
        this.state = {
            selectedArea: undefined,
            pokemon_encounters: []
        }
    }

    render() {
        let { selectedArea, pokemon_encounters } = this.state;
        return (
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
                                        return (
                                            <MapArea i={i} area={area} key={i}
                                                setLocationOnHover={this.setLocationOnHover}
                                                getAreaInfo={this.getAreaInfo}
                                            />
                                        )
                                    }
                                )
                            }
                        </div>

                    </div>
                </div>
                {
                    pokemon_encounters.map((pokemon,i) => {
                        return <p key={i}>{pokemon}</p>
                    })
                }
                <hr />
            </>
        )
    }

    setLocationOnHover = (areaName) => {
        this.setState({ selectedArea: areaName })
    }

    getAreaInfo = (area) => {
        let {selectedArea} = this.state
        //Safety rename to avoid api call fail for 2nd occurence of same location
        let name = area.name === 'digletts-cave-2' ? 'digletts-cave' : area.name
        if(area.location === selectedArea){
            fetch(`http://localhost:3000/map-area/${name}`)
            .then(
                res => res.json()
            )
            .then(res => this.setState({pokemon_encounters: res}))
        }
    }
}

export default Map