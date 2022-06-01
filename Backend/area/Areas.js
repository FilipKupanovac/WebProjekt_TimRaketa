import fetch from 'node-fetch'

export const Areas = () => {

    function getArea(name){
        return fetch(`https://pokeapi.co/api/v2/location/${name}`).then( res =>  res.json() )
        .then(res => res.areas
            //POZVATI SVAKI LOCATION-AREA UNUTAR LOCATION-a
            //NA NAČIN DA SE PROĐE KROZ res.areas
        )
        .catch(e => {return e})
    }

    return{
        getArea
    }
}