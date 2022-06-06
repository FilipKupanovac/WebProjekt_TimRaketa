import express from 'express'
import bodyParser from 'body-parser'
import { Pokedex } from './pokedex/pokedex.js'
import cors from 'cors'
import { Areas } from './area/Areas.js'
import { Register } from './user-auth/register.js'
import { SignIn } from './user-auth/signin.js'
import { Database } from './database/database.js'

const app = express();

const pokedex = Pokedex()
const areas = Areas()
const register = Register()
const signin = SignIn()
const database = Database()

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send(`Server connection working`)
})

app.get('/pokedex/', (req, res) => {
    const promise = pokedex.getAllPokemon()
    promise.then(
        async (response) => {
            res.status(200).send(response.results)
        }
    )
})

app.get(`/map-area/:name`, (req, res) => {
    let { name } = req.params;
    const promise = areas.getArea(name)

    promise.then(
        async (response) => {
            let encounterablePokemon = areas.getPokemonEncounters(response)
            res.send([... new Set(encounterablePokemon)])
        }
    )
})

app.get(`/encounters/:id`, (req, res) => {
    let { id } = req.params;
    const promise = pokedex.getPokemonEncounterAreas(id)

    promise.then(
        async (locationAreasArray) => {
            let locations = pokedex.parseLocationNames(locationAreasArray)
            res.status(200).send([... new Set(locations)])
        }
    )
})

app.post('/register/:email/:password', (req, res) => {
    let { email, password } = req.params;
    const promise = register.tryRegister(email, password)

    promise.then(
        async (response) => {
            console.log(response);
            res.send(response)
        }
    )
})

app.post('/signin/:email/:password', (req, res) => {
    let { email, password } = req.params;
    const promise = signin.trySignIn(email, password)

    promise.then(
        async (response) => {
            console.log(response);
            res.send(response)
        }
    )

})

app.post('/put-favorites/:email/:pokemons', (req, res) => {
    let { email, pokemons } = req.params;
    const promise = database.putFavorites(email, pokemons)

    promise.then(
        async (response) => {
            res.send(response)
        }
    )
})

app.get('/get-favorites/:email', (req, res) => {
    let { email } = req.params;
    const promise = database.getFavorites(email)

    promise.then(
        async (response) => {
            res.send(response)
        }
    )
})


app.listen(3000, () => {
    console.log("Listening on port 3000...")
})