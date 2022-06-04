import fetch from 'node-fetch'
import { response } from 'express'

export const Areas = () => {

    function getArea(name){
        return fetch(`https://pokeapi.co/api/v2/location/${name}`).then( res =>  res.json() )
        .then(res => {
            const promises = Promise.all(
                res.areas.map(area => fetch(area.url).then(res => res.json()))
            )
            return promises
        }
        )
    }

    function getPokemonEncounters(responseArray){
        let pokemonArray = []
        responseArray.forEach(element => {
            let pokeNames = element.pokemon_encounters.filter(
                pokemon => {
                    if(isPokemonFirered(pokemon))
                        return pokemon.pokemon.name
                }
            )
            pokeNames.forEach(pokeName =>{
                pokemonArray.push(pokeName.pokemon.name)
            })
        });
        return pokemonArray;
    }

    function isPokemonFirered(pokemon){
        let version_details = pokemon.version_details
        let isFirered = false;
        version_details.forEach(details => {
            if(details.version.name === "firered")
                isFirered = true;
        })
        return isFirered;
    }

    return{
        getArea,
        getPokemonEncounters
    }
}