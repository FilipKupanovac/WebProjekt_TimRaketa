//upper right corner reserved for login/register/logout, profile info
//LTR: pokedex, kanto region map, random pokemon
//if user is logged in, display additional favorite pkmns


//MISC
import React, {Component} from 'react'
//COMPONENTS
import SignedProfile from './SignedProfile'
//CSS
import '../CSS/Navigation.css'

class Navigation extends Component {
    /* OVO JE NEPOTREBNO, JUST FOR EXAMPLE
    constructor(props){
      super(props);
      this.state = {
        signedIn : false
      }
    } */
    render(){
        return (
          <nav className="flex" id="navigation-main">
            <p className="nav-par" 
              onClick={() => this.props.changeCurrentTab(`pokedex`)}>
              Pokedex
            </p>
            <p className="nav-par" 
              onClick={() => this.props.changeCurrentTab(`map`)}>
              Map
            </p>
            <p className="nav-par" 
              onClick={() => this.props.changeCurrentTab(`wtpmon`)}>
              Who's that POKEMON?
            </p>

            <SignedProfile 
              signedIn={this.props.signedIn} 
              changeCurrentTab={this.props.changeCurrentTab}
              username={this.props.username}
              logout={this.props.logout}
            />
          </nav>
        );
    }
    /**TODO
     * EVERY p ELEMENT NEEDS TO GET PROPER STYLING, ON-HOVER STYLING, ON-CLICK ACTION ...
     * PICKED TAB SHOULD HAVE SLIGHTLY DIFFERENT BG-COLOR
     * 
     */
    
}

export default Navigation;
