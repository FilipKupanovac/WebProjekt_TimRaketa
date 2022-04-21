//upper right corner reserved for login/register/logout, profile info
//LTR: pokedex, kanto region map, random pokemon
//if user is logged in, display additional favorite pkmns


//MISC
import React, {Component} from 'react'
//COMPONENTS

//CSS
import '../CSS/Navigation.css'

//TODO
//change func to class
//class has to remember user data- login status (logged in or not)-additional renderings according to login status

class Navigation extends Component {

    logShit(){
        console.log("MARGIN CLICK")
    }
    render(){
        return (
          <nav id="navigation-main">
            <p>Pokedex</p>
            <p>Map</p>
            <p>Random</p>
            <p className="toright" onClick={this.logShit}>Signin</p>
            <p className="toright" onClick={this.logShit}>Register</p>
          </nav>
        );
    }
    /**TODO
     * EVERY p ELEMENT NEEDS TO GET PROPER STYLING, ON-HOVER STYLING, ON-CLICK ACTION ...
     * 
     * 
     */
    
}

export default Navigation;
