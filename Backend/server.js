import express from 'express'
import bodyParser from 'body-parser'
import { pokdex } from './pokedex/pokedex.js'

const app = express();
const pokedex = pokdex()

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send(`Server connection working`)
})

app.get('/pokedex/', (req,res)=> {
    console.log( pokedex.getAllPokemon() )
    res.send( pokedex.getAllPokemon() )
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