import fetch from 'node-fetch';

export const Pokedex = () =>{

    function getAllPokemon(){
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`).then(
            async (response) => {
                let data = await response.json()
                return data
            }
        )
    }

    function getPokemonEncounterAreas(id){
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`).then(res => res.json())
        .then(res => {
            let fireredEncounterAreas = res.filter(location => {
                let isFirered = false;
                location.version_details.forEach(
                    version => {
                        if (version.version.name === 'firered')
                            isFirered = true;
                    }
                )
                if(isFirered)
                    return true
            });
            return fireredEncounterAreas
        })
        .then(fireredEncounterAreas => {
            let locationAreaURLs = extractLocationAreaURLs(fireredEncounterAreas)

            const promises = Promise.all(
                locationAreaURLs.map(
                    url => fetch(url).then(res => res.json())
                )
            )
            return promises
        })
    }

    function parseLocationNames(locationAreasArray){
        return locationAreasArray.map(location_area => location_area.location.name)
    }

    function extractLocationAreaURLs(fireredEncounterAreas){
        return fireredEncounterAreas.map(area => area.location_area.url)
    }

    return{
        getAllPokemon,
        getPokemonEncounterAreas,
        parseLocationNames
    }
}
