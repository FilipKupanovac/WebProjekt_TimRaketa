import fetch from 'node-fetch';

export function pokdex(){

    function getAllPokemon(){
        /* let pokedex = {
            results : []
        };
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
            .then(resp =>
                resp.json()
            )
            .then(resp => {
                console.log(resp)
                return resp
            })
        while(pokedex.results.length !== 151){
            
        }
        return pokedex; */
        return "Getting all pokemon"
    }

    return{
        getAllPokemon
    }
}
