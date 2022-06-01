import fetch from 'node-fetch';

export const pokdex = () =>{

    function getAllPokemon(){
        /* let pokedex = "AAAA"
        await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=11`)
            .then(resp =>
                resp.json()
            )
            .then(resp => {
                pokedex = resp
                console.log(pokedex)
                return resp
            })
        while(true){
            pokedex === undefined
                ? console.log("DIFFF")
                : pokedex
        } */
        //return pokedex;
    }

    return{
        getAllPokemon
    }
}
