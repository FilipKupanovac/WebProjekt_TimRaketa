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
        //FOR API CALL ON BACKEND USE SELECTEDAREA FROM STATE BECAUSE IT ACCEPTS ONLY THE AREA THAT IS HOVERED OVER
        /* console.log(selectedArea) 
        console.log("CLICKED AREA");
        console.log(area) */
        fetch(`https://pokeapi.co/api/v2/location-area/${area.name}/`)
            .then(Response => Response.json())
            .then(res => {
                let encounters = res.pokemon_encounters;
                let fireredPokemon = encounters.filter(encounter =>{
                    let isFirered = false;
                    encounter.version_details.forEach(version =>{
                        if(version.version.name === 'firered'){
                            isFirered=true;
                        }
                    })
                    return isFirered
                })
                let names = fireredPokemon.map(element => {
                    return element.pokemon.name
                })
                this.setState({pokemon_encounters : names});
            })
    }
}

export default Map