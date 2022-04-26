//top: filter, searchbar, 
//result: pokemon image, name, evoution tree, possible encounter area, height, weight

//MISC
import React, {Component} from 'react'

//IF YOU DO NOT USE 'EXPORT DEFAULT' AT ORIGIN FILE, YOU MUST WRAP CONST INSIDE CURLY BRACKETS
import {mockPokedex} from '../mockPokedex'
//Components
import Card from './Card'
//CSS
import '../CSS/Pokedex.css'

class Pokedex extends Component {

    constructor(){
        super();
        this.state = {
            pokedex : [],
            haveRendered : false
        }
    }

    componentDidMount(){
        this.setState({pokedex: mockPokedex.results})
    }

    render(){

        return(
            <>
                <h1>POKEDEX</h1>
                <input type='text' placeholder='search pokemon'/>
                <hr/>
                {/* MAYBE SCROLL COMPONENT HERE */}
                {/* CARDS */}
                <div className="card-container">
                    {this.state.pokedex.map((poke, i) =>{
                        //console.log(`no. ${i+1}: ${poke.name} \n`)
                        return <Card key={i} pokemon={poke}/>
                    })}
                </div>
            </>
        )
    }
}

export default Pokedex