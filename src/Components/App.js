//MISC
import React, { Component } from 'react';
//COMPONENTS
import Navigation from '../Components/Navigation'
import Pokedex from '../Components/Pokedex'
import Map from '../Components/Map'
import Signin from './SignIn'
import Register from './Register'
import UserProfile from './UserProfile';
import WTPmon from './Wtpmon';
import Favorites from './Favorites';
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
  constructor() {
    super();
    this.state = {
      signedIn: false,
      currentTab: 'pokedex',
      username: undefined
    }
  }

  //METHODS LIKE THIS ONE CAN NOT CHANGE STATE OF COMPONENT FOR SAFETY REASONS BECAUSE THEY ARE RUN INSIDE RENDER METHOD -> WOULD LEAD TO AN INFINITE LOOP - react throws error itself, this is just a notice
  displayCurrentTab = () => {
    let { currentTab, username, signedIn } = this.state;
    switch (currentTab) {
      case `pokedex`: return <Pokedex signedIn={signedIn}/>
      case `map`: return <Map />
      case `wtpmon`: return <WTPmon />
      case `signin`: return <Signin changeCurrentTab={this.changeCurrentTab} loginUser={this.loginUser} />
      case `register`: return <Register changeCurrentTab={this.changeCurrentTab} loginUser={this.loginUser} />
      case `profile`: return <UserProfile username={username} />
      case `favorites`: return <Favorites username={username} />
      default: return <h1>odjava</h1>
    }
  }

  //OBAVEZNO OVAKVA DEFINICIJA VLASTITE FUNKCIJE KAKO BI RADILO
  //PRIPAZI KOD SETSTATE METODE, ima 2 para zagrada, ( { key : value } )
  changeCurrentTab = (newTab) => {
    this.setState({ currentTab: newTab })
  }
  loginUser = (_username) => {
    this.setState({ username: _username, signedIn: true })
  }
  logout = () => {
    //MAYBE ADD PROMPT WITH ADDITIONAL CONFIRM BOX
    this.setState({ username: undefined, signedIn: false, currentTab: 'pokedex' })
  }

  render() {
    let { signedIn, username } = this.state;
    return (
      <div className="body">
        <Navigation
          signedIn={signedIn}
          changeCurrentTab={this.changeCurrentTab}
          username={username}
          logout={this.logout}
        />
        {this.displayCurrentTab()}
        <p><a href="https://github.com/FilipKupanovac/WebProjekt_TimRaketa">Work in progress...</a></p>
      </div>
    );
  }
}

export default App;

/**
 * KAKO JE KREŠO REKAO DA MORAMO NEKE REFERENCE I TO ŠTO SMO TRAŽILI NA INTERNETU
 * PRILOŽITI KAO RJEŠENJE, TU PIŠI ŠTA SI TRAŽIO PO NETU TIPA STACK OVERFLOW I
 * TAKVE STRANICE KAKO BI IMALI NA JEDNOM MJESTU SVE
 * 
 * "export default was not found"
 * "react lifecycle hooks"
 * "js map array elements"
 * "use children as props react"
 * https://stackoverflow.com/questions/51282464/using-a-dynamic-key-to-setstate-in-react
 * https://stackoverflow.com/questions/44596025/unexpected-use-of-event-no-restricted-globals-when-using-event-target-id-to-ge
 * https://reactjs.org/docs/handling-events.html
 * https://css-tricks.com/almanac/properties/a/aspect-ratio/
 * https://css-tricks.com/snippets/css/complete-guide-grid/
 * 
 */