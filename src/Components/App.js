//MISC
import React, { Component } from 'react';
//COMPONENTS
import Navigation from '../Components/Navigation'
import Pokedex from '../Components/Pokedex'
import Map from '../Components/Map'
//CSS
import '../CSS/App.css';

/*TODO
 *class has to remember user data- login status (logged in or not)-additional renderings according to login status
 * signinClick MUST be changed in a way:
 *  -click opens new View, just as click on pokedex, map or 'WTPmon?'
 *  -after filling form correctly for signin/register to change signedIn status and return user to the homepage, 'Pokedex'
 * Pokemon-wordle-guess pokemon by type with silhouette provided, like footdle.com for soccer players
 *
 * ADVANCED : after clicking log out, state isn't changing, make special function to both change state of signed in and current tab
 * 
 */

class App extends Component {
  constructor(){
    super();
    this.state = {
      signedIn : false,
      currentTab : 'pokedex' //Will be used in navigation to display specific view 
    }
  }

  //OBAVEZNO OVAKVA DEFINICIJA VLASTITE FUNKCIJE KAKO BI RADILO
  //PRIPAZI KOD SETSTATE METODE, ima 2 para zagrada, ( { key : value } )
  signinClick = () => {
    this.setState({signedIn : !this.state.signedIn})
  }

  //METHODS LIKE THIS ONE CAN NOT CHANGE STATE OF COMPONENT FOR SAFETY REASONS BECAUSE THEY ARE RUN INSIDE RENDER METHOD -> WOULD LEAD TO AN INFINITE LOOP - react throws error itself, this is just a notice
  displayCurrentTab = () => {
    let {currentTab} = this.state;
    switch(currentTab){
      case `pokedex`: return <Pokedex />
      case `map`: return <Map />
      case `wtpmon`: return <h1>WHO'S THAT POKEMON TAB</h1>
      case `signin`: return <h1>SIGNIN FORM</h1>
      case `register`: return <h1>REGISTER FORM</h1>
      case `profile`: return <h1>USER PROFILE</h1>
      default : return <h1>odjava</h1>
    }
  }
  changeCurrentTab = (newTab) => {
    this.setState({currentTab : newTab})
  }

  render(){
    let {signedIn} = this.state;
    return (
        <div className="body">
          <Navigation 
            signedIn={signedIn} 
            signinClick={this.signinClick}
            changeCurrentTab={this.changeCurrentTab}
          />
          {this.displayCurrentTab()}
          <p><a href="https://github.com/FilipKupanovac/WebProjekt_TimRaketa">Work in progress...</a></p>
        </div>
    );
  }
}

export default App;