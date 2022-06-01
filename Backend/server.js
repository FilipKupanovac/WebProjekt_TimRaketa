import express, { response } from 'express'
import bodyParser from 'body-parser'
import { Pokedex } from './pokedex/pokedex.js'
import fetch from 'node-fetch'

const app = express();
const pokedex = Pokedex()

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send(`Server connection working`)
})

app.get('/pokedex/', (req,res)=> {
    const promise = pokedex.getAllPokemon()
    promise.then(
        async (response) => {
            res.status(200).send(response.results)
        }
    )
    /* fetch(`https://pokeapi.co/api/v2/pokemon/?limit=11`).then(
        async (response) => {
            let data = await response.json()
            res.status(200).send(data.results)
        }
    ) */
})

app.post('/signin', (req,res) => {
    if(
        req.body.credentials.length >= 5
        && req.body.password === "pokedex"
        ){
            res.json(`success`)
    }
})

app.listen(3000, () =>{
    console.log("Listening on port 3000...")
})