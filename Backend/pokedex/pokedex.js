import fetch from 'node-fetch';
import { response } from 'express';

export const Pokedex = () =>{

    function getAllPokemon(){
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`).then(
            async (response) => {
                let data = await response.json()
                return data
            }
        )
    }

    return{
        getAllPokemon
    }
}