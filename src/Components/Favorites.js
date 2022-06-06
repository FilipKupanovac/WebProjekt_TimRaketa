import React, {Component} from 'react'

//COMPONENTS
import { mockPokedex } from '../mockPokedex';
import CardList from './CardList';

class Favorites extends Component{
    constructor(props){
        super(props);
        this.state={
            username: this.props.username,
        }
    }
    componentDidMount(){
        //FAKE API CALL - add real later
        this.setState({pokemons: mockPokedex.results})
    }



    render(){
        let {username, pokemons} = this.state;
        return(
            <>
                <p>{username}</p>
                { pokemons !== undefined ?
                    <CardList 
                        pokemons={pokemons}
                        pickedId={0}
                        pickPokemon={this.fakePick}
                    />
                    : 
                    <></>
                }
            </>
        )
    }
    fakePick = (id) => {
        
    }
}

export default Favorites;