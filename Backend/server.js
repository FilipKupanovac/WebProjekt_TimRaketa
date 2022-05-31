const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send(`Server connection working`)
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