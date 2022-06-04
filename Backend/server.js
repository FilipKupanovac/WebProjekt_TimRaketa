import express, { response } from 'express'
import bodyParser from 'body-parser'
import { Pokedex } from './pokedex/pokedex.js'
import cors from 'cors'
import fetch from 'node-fetch'
import {Areas} from './area/Areas.js'

const app = express();

const pokedex = Pokedex()
const areas = Areas()

app.use(bodyParser.json())
app.use(cors());

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
})

app.get(`/map-area/:name`, (req,res) => {
    let {name} = req.params;
    const promise = areas.getArea(name)

    promise.then(
        async (response) => {
            let encounterablePokemon = areas.getPokemonEncounters(response)
            res.send([... new Set(encounterablePokemon)])
        }
    )
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