//MISC
import React, { Component } from 'react'
//Components
import { kantoAreas } from '../kantoAreaNames'
import MapArea from './MapArea'
import { serverBaseURL } from '../serverBaseURL'
//CSS
import '../CSS/Map.css'
import '../CSS/kanto_grid_areas.css'

class Map extends Component {
    constructor() {
        super();
        this.state = {
            selectedArea: undefined,
            clickedArea: undefined,
            pokemon_encounters: []
        }
    }

    render() {
        let { selectedArea, pokemon_encounters, clickedArea } = this.state;
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
                    clickedArea !== undefined 
                    ? 
                        <h2>At {clickedArea} you can encounter next Pokémon:</h2>
                    : <></>
                }
                {
                    pokemon_encounters.map((pokemon, i) => {
                        return <p className="location-pokemon-list" key={i}>{this.capitalizeFirstLetter(pokemon)}</p>
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
        let { selectedArea } = this.state
        this.setState({clickedArea:selectedArea})
        //Safety rename to avoid api call fail for 2nd occurence of same location
        let name = area.name === 'digletts-cave-2' ? 'digletts-cave' : area.name
        if (area.location === selectedArea) {
            fetch(`${serverBaseURL}/map-area/${name}`)
                .then(
                    res => res.json()
                )
                .then(res => this.setState({ pokemon_encounters: res }))
        }
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
}

export default Map